import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';

const Profile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name, setName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex@myuniversity.edu');
  const [saved, setSaved] = useState(false);

  const saveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere accent="emerald" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid relative z-10 flex flex-1 items-center justify-center overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-4xl">
            <header className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-700">Your space</p>
              <h1 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Profile</h1>
              <p className="mt-1 text-sm text-slate-500">Keep your WellU details feeling like you.</p>
            </header>
            <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
              <section className="wellu-scallop-panel rounded-2xl border border-lime-200 bg-lime-50 p-5 shadow-sm">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 font-display text-3xl font-black text-white shadow-sm">A</div>
                <p className="mt-4 text-lg font-bold text-slate-900">Alex Morgan</p>
                <p className="mt-1 text-xs text-slate-500">WellU student</p>
                <div className="mt-6 border-t border-lime-200 pt-4 text-xs text-lime-800">7 day check-in streak</div>
              </section>
              <form onSubmit={saveProfile} className="wellu-scallop-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div><h2 className="font-display text-xl font-black text-slate-900">Personal details</h2><p className="mt-1 text-xs text-slate-500">A few basics for your account.</p></div>
                  {saved && <span className="text-xs font-bold text-lime-700">Saved just now</span>}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700">Name<input value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-100" /></label>
                  <label className="text-sm font-semibold text-slate-700">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-100" /></label>
                </div>
                <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-400">Your preferences stay on this device for now.</p><button type="submit" className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700">Save changes</button></div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
