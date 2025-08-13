import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

function readJsonSafe(filePath: string){
  try{
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }catch{
    return [];
  }
}

export default function Admin(){
  const auth = cookies().get('admin_auth')?.value === '1';
  if (!auth){
    return (
      <section className="container-g py-14">
        <h1 className="text-3xl">Admin</h1>
        <p className="text-gray-700 mt-2">You are not signed in. Please visit the admin login page.</p>
      </section>
    );
  }
  const dataDir = path.join(process.cwd(), 'data');
  const contactsFile = path.join(dataDir, 'contact-messages.json');
  const internshipsFile = path.join(dataDir, 'internship-applications.json');
  const contacts = fs.existsSync(contactsFile) ? readJsonSafe(contactsFile) : [];
  const internships = fs.existsSync(internshipsFile) ? readJsonSafe(internshipsFile) : [];

  return (
    <section className="container-g py-14">
      <h1 className="text-3xl">Admin</h1>
      <p className="text-gray-700 mt-2">Local submissions (for production, query your Vercel Postgres database).</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card p-6">
          <h2 className="font-semibold text-lg">Contact submissions ({contacts.length})</h2>
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
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg">Internship applications ({internships.length})</h2>
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
        </div>
      </div>
    </section>
  );
}


