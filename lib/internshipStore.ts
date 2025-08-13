import fs from 'fs';
import path from 'path';

export type InternshipPayload = {
  name: string;
  email: string;
  portfolio?: string;
  motivation: string;
};

async function saveToVercelPostgres(payload: InternshipPayload){
  const { sql } = await import('@vercel/postgres');
  await sql`CREATE TABLE IF NOT EXISTS internship_applications (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    portfolio TEXT,
    motivation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`;
  const res = await sql<{ id: number }>`INSERT INTO internship_applications (name, email, portfolio, motivation)
    VALUES (${payload.name}, ${payload.email}, ${payload.portfolio || null}, ${payload.motivation}) RETURNING id`;
  return { id: res.rows[0].id };
}

function saveToLocalJson(payload: InternshipPayload){
  const dataDir = path.join(process.cwd(), 'data');
  const file = path.join(dataDir, 'internship-applications.json');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const existing: any[] = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  const id = existing.length ? existing[existing.length - 1].id + 1 : 1;
  const record = { id, ...payload, createdAt: new Date().toISOString() };
  existing.push(record);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  return { id };
}

export async function saveInternshipApplication(payload: InternshipPayload){
  const useVercelPg = !!process.env.POSTGRES_URL || !!process.env.POSTGRES_PRISMA_URL || !!process.env.POSTGRES_URL_NON_POOLING;
  if (useVercelPg) return saveToVercelPostgres(payload);
  return saveToLocalJson(payload);
}


