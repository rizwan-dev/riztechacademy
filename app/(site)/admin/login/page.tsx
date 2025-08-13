'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin(){
  const [error,setError] = useState<string|undefined>();
  const router = useRouter();
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const r = await fetch('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    if(r.ok){ router.push('/admin'); }
    else{ const j = await r.json().catch(()=>({})); setError(j?.error || 'Invalid credentials'); }
  }
  return (
    <section className="container-g py-16">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl">Admin login</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input type="email" name="email" required className="w-full mt-1 rounded-xl border p-2" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input type="password" name="password" required className="w-full mt-1 rounded-xl border p-2" />
          </div>
          <button className="btn btn-primary w-full">Sign in</button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
}


