import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

function readJsonSafe(filePath: string){
  try{
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }catch{
    return [];
  }
}

export default async function Admin({ searchParams }: { searchParams?: Record<string,string|undefined> }){
  const auth = cookies().get('admin_auth')?.value === '1';
  if (!auth){
    return (
      <section className="container-g py-14">
        <h1 className="text-3xl">Admin</h1>
        <p className="text-gray-700 mt-2">You are not signed in. Please visit the admin login page.</p>
      </section>
    );
  }
  const qc = (searchParams?.qc || '').toString();
  const qi = (searchParams?.qi || '').toString();
  const pc = Math.max(1, parseInt((searchParams?.pc || '1').toString(), 10) || 1);
  const pi = Math.max(1, parseInt((searchParams?.pi || '1').toString(), 10) || 1);
  const perPage = 10;

  let contacts: any[] = [];
  let internships: any[] = [];
  let usingDb = false;
  let contactsTotal = 0;
  let internshipsTotal = 0;
  const useVercelPg = !!process.env.POSTGRES_URL || !!process.env.POSTGRES_PRISMA_URL || !!process.env.POSTGRES_URL_NON_POOLING;
  if (useVercelPg){
    try{
      const { sql } = await import('@vercel/postgres');
      const qclike = `%${qc}%`;
      const qilike = `%${qi}%`;
      const cCount = await sql`SELECT COUNT(*)::int as c FROM contact_messages WHERE (${qc === ''} OR name ILIKE ${qclike} OR email ILIKE ${qclike} OR coalesce(company,'') ILIKE ${qclike} OR coalesce(phone,'') ILIKE ${qclike} OR message ILIKE ${qclike})`;
      contactsTotal = cCount.rows[0]?.c || 0;
      const c = await sql`SELECT id, name, email, company, phone, message, created_at FROM contact_messages
        WHERE (${qc === ''} OR name ILIKE ${qclike} OR email ILIKE ${qclike} OR coalesce(company,'') ILIKE ${qclike} OR coalesce(phone,'') ILIKE ${qclike} OR message ILIKE ${qclike})
        ORDER BY created_at DESC LIMIT ${perPage} OFFSET ${(pc-1)*perPage}`;
      contacts = c.rows.map(r => ({ id: r.id, name: r.name, email: r.email, company: r.company, phone: r.phone, message: r.message, createdAt: new Date(r.created_at as any).toISOString() }));

      const iCount = await sql`SELECT COUNT(*)::int as c FROM internship_applications WHERE (${qi === ''} OR name ILIKE ${qilike} OR email ILIKE ${qilike} OR coalesce(portfolio,'') ILIKE ${qilike} OR motivation ILIKE ${qilike})`;
      internshipsTotal = iCount.rows[0]?.c || 0;
      const i = await sql`SELECT id, name, email, portfolio, motivation, created_at FROM internship_applications
        WHERE (${qi === ''} OR name ILIKE ${qilike} OR email ILIKE ${qilike} OR coalesce(portfolio,'') ILIKE ${qilike} OR motivation ILIKE ${qilike})
        ORDER BY created_at DESC LIMIT ${perPage} OFFSET ${(pi-1)*perPage}`;
      internships = i.rows.map(r => ({ id: r.id, name: r.name, email: r.email, portfolio: r.portfolio, motivation: r.motivation, createdAt: new Date(r.created_at as any).toISOString() }));
      usingDb = true;
    }catch{
      const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
      const dataDir = path.join(baseDir, 'data');
      const contactsFile = path.join(dataDir, 'contact-messages.json');
      const internshipsFile = path.join(dataDir, 'internship-applications.json');
      const allC = fs.existsSync(contactsFile) ? readJsonSafe(contactsFile) : [];
      const allI = fs.existsSync(internshipsFile) ? readJsonSafe(internshipsFile) : [];
      const filter = (q:string, arr:any[], fields:string[]) => {
        if (!q) return arr;
        const s = q.toLowerCase();
        return arr.filter(r => fields.some(f => (r[f]||'').toString().toLowerCase().includes(s)));
      };
      const fc = filter(qc, allC, ['name','email','company','phone','message']);
      const fi = filter(qi, allI, ['name','email','portfolio','motivation']);
      contactsTotal = fc.length; internshipsTotal = fi.length;
      contacts = fc.slice((pc-1)*perPage, (pc)*perPage);
      internships = fi.slice((pi-1)*perPage, (pi)*perPage);
    }
  }else{
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const dataDir = path.join(baseDir, 'data');
    const contactsFile = path.join(dataDir, 'contact-messages.json');
    const internshipsFile = path.join(dataDir, 'internship-applications.json');
    const allC = fs.existsSync(contactsFile) ? readJsonSafe(contactsFile) : [];
    const allI = fs.existsSync(internshipsFile) ? readJsonSafe(internshipsFile) : [];
    const filter = (q:string, arr:any[], fields:string[]) => {
      if (!q) return arr;
      const s = q.toLowerCase();
      return arr.filter(r => fields.some(f => (r[f]||'').toString().toLowerCase().includes(s)));
    };
    const fc = filter(qc, allC, ['name','email','company','phone','message']);
    const fi = filter(qi, allI, ['name','email','portfolio','motivation']);
    contactsTotal = fc.length; internshipsTotal = fi.length;
    contacts = fc.slice((pc-1)*perPage, (pc)*perPage);
    internships = fi.slice((pi-1)*perPage, (pi)*perPage);
  }

  const maxPc = Math.max(1, Math.ceil(contactsTotal / perPage));
  const maxPi = Math.max(1, Math.ceil(internshipsTotal / perPage));

  function linkWith(overrides: Record<string,string|number|undefined>){
    const params = new URLSearchParams();
    if (qc) params.set('qc', qc);
    if (qi) params.set('qi', qi);
    params.set('pc', pc.toString());
    params.set('pi', pi.toString());
    Object.entries(overrides).forEach(([k,v])=>{ if (v===undefined) params.delete(k); else params.set(k, String(v)); });
    return `?${params.toString()}`;
  }

  return (
    <section className="container-g py-14">
      <h1 className="text-3xl">Admin</h1>
      <div className="mt-2 text-sm text-gray-700 flex items-center gap-3">
        <span className="badge">Source: {usingDb ? 'Vercel Postgres' : 'Local file'}</span>
        <span>Contacts: {contacts.length}</span>
        <span>Internships: {internships.length}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card p-6">
          <h2 className="font-semibold text-lg">Contact submissions ({contacts.length})</h2>
          <form method="get" className="mt-3 flex gap-2">
            <input name="qc" defaultValue={qc} placeholder="Search name, email, message..." className="input flex-1" />
            <input type="hidden" name="pi" value={pi} />
            <input type="hidden" name="qi" value={qi} />
            <button className="btn btn-outline">Search</button>
          </form>
          <div className="mt-4 space-y-3 max-h-[420px] overflow-auto pr-2">
            {contacts.map((c:any)=> (
              <div key={c.id} className="rounded-lg border p-3">
                <div className="text-sm font-medium">{c.name} — {c.email}</div>
                {c.company && <div className="text-xs text-gray-600">{c.company}</div>}
                {c.phone && <div className="text-xs text-gray-600">{c.phone}</div>}
                <div className="text-sm text-gray-700 mt-2">{c.message}</div>
                <div className="text-xs text-gray-500 mt-1">{c.createdAt}</div>
              </div>
            ))}
            {contacts.length===0 && <div className="text-sm text-gray-600">No submissions yet.</div>}
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span>Page {pc} of {maxPc}</span>
            <div className="flex gap-2">
              <Link href={linkWith({ pc: Math.max(1, pc-1) })} className="btn btn-outline">Prev</Link>
              <Link href={linkWith({ pc: Math.min(maxPc, pc+1) })} className="btn btn-outline">Next</Link>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg">Internship applications ({internships.length})</h2>
          <form method="get" className="mt-3 flex gap-2">
            <input name="qi" defaultValue={qi} placeholder="Search name, email, motivation..." className="input flex-1" />
            <input type="hidden" name="pc" value={pc} />
            <input type="hidden" name="qc" value={qc} />
            <button className="btn btn-outline">Search</button>
          </form>
          <div className="mt-4 space-y-3 max-h-[420px] overflow-auto pr-2">
            {internships.map((c:any)=> (
              <div key={c.id} className="rounded-lg border p-3">
                <div className="text-sm font-medium">{c.name} — {c.email}</div>
                {c.portfolio && <div className="text-xs text-gray-600">{c.portfolio}</div>}
                <div className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{c.motivation}</div>
                <div className="text-xs text-gray-500 mt-1">{c.createdAt}</div>
              </div>
            ))}
            {internships.length===0 && <div className="text-sm text-gray-600">No submissions yet.</div>}
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span>Page {pi} of {maxPi}</span>
            <div className="flex gap-2">
              <Link href={linkWith({ pi: Math.max(1, pi-1) })} className="btn btn-outline">Prev</Link>
              <Link href={linkWith({ pi: Math.min(maxPi, pi+1) })} className="btn btn-outline">Next</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


