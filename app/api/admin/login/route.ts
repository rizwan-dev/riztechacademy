import { NextRequest, NextResponse } from 'next/server';

// Very simple password check via env vars. In production, replace with a proper auth provider.
export async function POST(req: NextRequest){
  const { email, password } = await req.json();
  const ok = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
  if(!ok){
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  // Set a simple session cookie (for demo). In production, replace with a signed JWT and proper expiry/rotation.
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_auth', '1', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8 // 8 hours
  });
  return res;
}


