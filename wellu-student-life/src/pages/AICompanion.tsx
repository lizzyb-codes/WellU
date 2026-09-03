import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';

const AICompanion: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere accent="cyan" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center py-10">
            <section className="wellu-scallop-panel w-full max-w-xl rounded-2xl border border-cyan-100 bg-white p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl">✦</div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">AI Companion</p>
              <h1 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-900">A thoughtful study buddy is on the way.</h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">This space is intentionally quiet for now. We are preparing something useful, gentle, and very WellU.</p>
              <div className="mt-7 inline-flex rounded-full bg-lime-50 px-4 py-2 text-xs font-bold text-lime-800">Coming soon</div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AICompanion;
