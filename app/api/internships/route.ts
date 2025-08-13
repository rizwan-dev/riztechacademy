import { NextRequest, NextResponse } from 'next/server';
import { saveInternshipApplication } from '@/lib/internshipStore';

export async function POST(req: NextRequest){
  try{
    const data = await req.formData();
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      portfolio: data.get('portfolio') ? String(data.get('portfolio')) : undefined,
      motivation: String(data.get('motivation') || '')
    };
    const result = await saveInternshipApplication(payload);
    return NextResponse.redirect(new URL('/internships?ok=1', req.url));
  }catch(e:any){
    return NextResponse.json({ error: e?.message || 'Error' }, { status: 500 });
  }
}


