'use client';
import { useState } from 'react';

export function ClearDataButton(){
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string|undefined>();

  async function onClick(){
    if (loading) return;
    const ok = confirm('This will permanently delete all contact and internship submissions. Continue?');
    if (!ok) return;
    try{
      setLoading(true);
      setMsg(undefined);
      const r = await fetch('/api/admin/clear', { method: 'POST' });
      const j = await r.json().catch(()=>({}));
      if (r.ok && j?.ok){
        setMsg('Cleared successfully');
        // Refresh the page to reflect changes
        window.location.reload();
      }else{
        setMsg(j?.error || 'Failed to clear');
      }
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button onClick={onClick} disabled={loading} className="btn btn-outline">
        {loading ? 'Clearing…' : 'Clear test data'}
      </button>
      {msg && <span className="text-xs text-gray-500">{msg}</span>}
    </div>
  );
}


