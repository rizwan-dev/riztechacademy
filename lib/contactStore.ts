import fs from 'fs';
import path from 'path';

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
};

async function saveToVercelPostgres(payload: ContactPayload){
  const { sql } = await import('@vercel/postgres');
  await sql`CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`;
  const res = await sql<{ id: number }>`INSERT INTO contact_messages (name, email, company, phone, message)
    VALUES (${payload.name}, ${payload.email}, ${payload.company || null}, ${payload.phone || null}, ${payload.message}) RETURNING id`;
  return { id: res.rows[0].id };
}

function saveToLocalJson(payload: ContactPayload){
  // On Vercel (serverless), the filesystem is read-only except for /tmp
  const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
  const dataDir = path.join(baseDir, 'data');
  const file = path.join(dataDir, 'contact-messages.json');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const existing: any[] = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  const id = existing.length ? existing[existing.length - 1].id + 1 : 1;
  const record = { id, ...payload, createdAt: new Date().toISOString() };
  existing.push(record);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  return { id };
}

export async function saveContactSubmission(payload: ContactPayload){
  const useVercelPg = !!process.env.POSTGRES_URL || !!process.env.POSTGRES_PRISMA_URL || !!process.env.POSTGRES_URL_NON_POOLING;
  if (useVercelPg){
    try{
      const res = await saveToVercelPostgres(payload);
      console.log('[Contact] Stored in Vercel Postgres', res);
      return res;
    }catch(err){
      console.error('[Contact] DB write failed, falling back to local file:', (err as any)?.message);
      return saveToLocalJson(payload);
    }
  }
  return saveToLocalJson(payload);
}


