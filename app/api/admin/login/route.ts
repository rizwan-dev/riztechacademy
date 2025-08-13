import { NextRequest, NextResponse } from 'next/server';

// Very simple password check via env vars. In production, replace with a proper auth provider.
export async function POST(req: NextRequest){
  const { email, password } = await req.json();
  const ok = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
  if(!ok){
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  // Stateless redirect (you can set a cookie/JWT here if desired)
  return NextResponse.json({ ok: true });
}


