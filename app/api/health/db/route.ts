import { NextResponse } from 'next/server';

export async function GET(){
  const hasPg = !!process.env.POSTGRES_URL || !!process.env.POSTGRES_PRISMA_URL || !!process.env.POSTGRES_URL_NON_POOLING;
  if(!hasPg){
    return NextResponse.json({ ok: false, configured: false, message: 'Postgres env vars not set' }, { status: 200 });
  }
  try{
    const { sql } = await import('@vercel/postgres');
    const nowRes = await sql`SELECT NOW() as now`;
    const now = nowRes.rows?.[0]?.now ?? null;
    // Check tables exist and counts (safe if not found)
    let contactMessages: number | null = null;
    let internshipApplications: number | null = null;
    try{
      const r = await sql`SELECT COUNT(*)::int as c FROM contact_messages`;
      contactMessages = r.rows?.[0]?.c ?? 0;
    }catch{
      contactMessages = null;
    }
    try{
      const r = await sql`SELECT COUNT(*)::int as c FROM internship_applications`;
      internshipApplications = r.rows?.[0]?.c ?? 0;
    }catch{
      internshipApplications = null;
    }
    return NextResponse.json({ ok: true, configured: true, driver: 'vercel-postgres', now, counts: { contactMessages, internshipApplications } });
  }catch(e:any){
    return NextResponse.json({ ok: false, configured: true, error: e?.message || 'DB error' }, { status: 200 });
  }
}


