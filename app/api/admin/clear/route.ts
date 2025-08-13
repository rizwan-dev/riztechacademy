import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest){
  const auth = cookies().get('admin_auth')?.value === '1';
  if (!auth){
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const useVercelPg = !!process.env.POSTGRES_URL || !!process.env.POSTGRES_PRISMA_URL || !!process.env.POSTGRES_URL_NON_POOLING;
  if (useVercelPg){
    try{
      const { sql } = await import('@vercel/postgres');
      await sql`DELETE FROM contact_messages`;
      await sql`DELETE FROM internship_applications`;
      return NextResponse.json({ ok: true, source: 'db' });
    }catch(e:any){
      return NextResponse.json({ error: e?.message || 'DB error' }, { status: 500 });
    }
  }

  try{
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const dataDir = path.join(baseDir, 'data');
    const contactsFile = path.join(dataDir, 'contact-messages.json');
    const internshipsFile = path.join(dataDir, 'internship-applications.json');
    if (fs.existsSync(contactsFile)) fs.writeFileSync(contactsFile, '[]');
    if (fs.existsSync(internshipsFile)) fs.writeFileSync(internshipsFile, '[]');
    return NextResponse.json({ ok: true, source: 'local' });
  }catch(e:any){
    return NextResponse.json({ error: e?.message || 'Local file error' }, { status: 500 });
  }
}


