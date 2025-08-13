import { NextRequest, NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/contactStore';

export async function POST(req: NextRequest){
  try{
    const data = await req.json();
    console.log('[Contact Form]', data);
    // Persist to Vercel Postgres in prod, local JSON in dev
    const result = await saveContactSubmission({
      name: String(data.name || ''),
      email: String(data.email || ''),
      company: data.company ? String(data.company) : undefined,
      phone: data.phone ? String(data.phone) : undefined,
      message: String(data.message || '')
    });
    return NextResponse.json({ ok: true, id: result.id });
  }catch(e:any){
    return NextResponse.json({ error: e?.message || 'Error' }, { status: 500 });
  }
}
