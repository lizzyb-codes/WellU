import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook,
  FaChartLine,
  FaChevronRight,
  FaHeart,
  FaLightbulb,
  FaSmile,
  FaArrowRight,
  FaCheck,
  FaPlus,
  FaTrash,
  FaRandom,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';
import { Sparkle } from '../components/Sparkle';
import confetti from 'canvas-confetti';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [journeyIndex, setJourneyIndex] = useState(1);
  const [tasks, setTasks] = useState([
    { title: 'Complete your daily mood check-in', done: true },
    { title: 'Write one journal entry', done: false },
    { title: 'Read one wellness tip', done: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const completedTaskCount = tasks.filter((task) => task.done).length;

  const toggleTask = (index: number) => {
    setTasks((currentTasks) => currentTasks.map((task, taskIndex) => taskIndex === index ? { ...task, done: !task.done } : task));
    if (!tasks[index].done) {
      confetti({ particleCount: 70, spread: 58, origin: { y: 0.72 }, colors: ['#4CAD84', '#A3E635', '#F9A8D4', '#FDE68A'] });
    }
  };

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    setTasks((currentTasks) => [...currentTasks, { title: newTask.trim(), done: false }]);
    confetti({ particleCount: 45, spread: 46, origin: { y: 0.78 }, colors: ['#4CAD84', '#A3E635', '#BAE6FD'] });
    setNewTask('');
  };

  const removeTask = (index: number) => {
    setTasks((currentTasks) => currentTasks.filter((_, taskIndex) => taskIndex !== index));
  };
  const courses = [
    { title: 'Check in with your mood', detail: 'A quick daily reflection', path: '/mood-tracker', icon: FaSmile, color: 'text-[#4CAD84]', background: 'bg-[#DCFCE7]', progress: '2/8 completed' },
    { title: 'Build a journaling habit', detail: 'Write what is on your mind', path: '/journal', icon: FaBook, color: 'text-[#4CAD84]', background: 'bg-[#DCFCE7]', progress: '3/8 completed' },
    { title: 'Explore wellness tips', detail: 'Small steps for a better day', path: '/wellness-tips', icon: FaLightbulb, color: 'text-[#4CAD84]', background: 'bg-[#DCFCE7]', progress: '6/12 completed' },
  ];
    const journeyCards = [
      { image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80', label: 'Mindful moments', title: 'A five-minute reset for busy days', path: '/mood-tracker' },
      { image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80', label: 'Journaling', title: 'Give your thoughts some space', path: '/journal' },
      { image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=600&q=80', label: 'Wellness', title: 'Simple routines that stick', path: '/wellness-tips' },
    ];
  const currentJourney = journeyCards[journeyIndex];

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1500px] mx-auto relative">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_285px]">
              <div className="min-w-0 space-y-6">
                <section className="wellu-large-dashes relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-sm sm:p-8">
                  <Sparkle size={23} color="#FFFFFF" delay={0.4} className="left-[7%] top-6" withDot />
                  <Sparkle size={18} color="#FFFFFF" delay={1.6} className="right-[8%] top-12" withDot />
                  <div className="absolute inset-x-0 bottom-0 h-3 opacity-50 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(76,173,132,0.18)_4px,transparent_5px)]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#318766]">Your daily overview</p>
                    <FaHeart className="text-[#4CAD84]" />
                  </div>
                  <div className="relative">
                    <h1 className="mt-8 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Good morning, Alex</h1>
                    <p className="mt-2 max-w-xl text-slate-600">Take care of your mind, your tasks, and your next small step.</p>
                  </div>
                </section>

                <section className="wellu-scallop-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3"><h2 className="font-display text-2xl font-black tracking-tight text-slate-900">Today&apos;s task tracker</h2><span className="rotate-[5deg] rounded-full bg-pink-400 px-2.5 py-1 text-[9px] font-extrabold tracking-wider text-white">ONE STEP AT A TIME</span></div>
                      <p className="mt-1 text-sm text-slate-500">A short list to keep your student day moving.</p>
                    </div>
                    <div className="flex items-center gap-3"><div className="h-2.5 w-28 overflow-hidden rounded-full bg-[#DCFCE7]"><div className="h-full rounded-full bg-[#4CAD84] transition-all" style={{ width: `${tasks.length ? (completedTaskCount / tasks.length) * 100 : 0}%` }} /></div><span className="text-sm font-bold text-[#318766]">{completedTaskCount}/{tasks.length}</span></div>
                  </div>
                  <div className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-3">
                    {tasks.map((task, index) => <TaskRow key={`${task.title}-${index}`} label={task.title} done={task.done} onToggle={() => toggleTask(index)} onRemove={() => removeTask(index)} />)}
                  </div>
                  <form onSubmit={addTask} className="mt-4 flex gap-2">
                    <input value={newTask} onChange={(event) => setNewTask(event.target.value)} placeholder="Add a task for today..." className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#4CAD84] focus:ring-2 focus:ring-[#DCFCE7]" />
                    <button type="submit" className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"><FaPlus className="text-xs" /> <span className="hidden sm:inline">Add task</span></button>
                  </form>
                </section>

                <section className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
                  {courses.map(({ title, detail, path, icon: Icon, color, background, progress }) => (
                    <Link key={path} to={path} className="wellu-scallop-panel flex h-[145px] flex-col bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between gap-3">
                        <div className={`w-10 h-10 rounded-xl ${background} ${color} flex items-center justify-center`}><Icon /></div>
                        <FaChevronRight className="text-gray-300 text-xs" />
                      </div>
                      <p className="mt-auto text-[11px] text-gray-400">{progress}</p>
                      <h2 className="mt-1 text-lg font-semibold leading-snug text-gray-800">{title}</h2>
                      <p className="mt-1 text-sm text-gray-500">{detail}</p>
                    </Link>
                  ))}
                </section>

              </div>

              <aside className="space-y-4">
                <section className="wellu-scallop-panel rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between"><h2 className="font-bold text-gray-800">Your statistics</h2><FaChartLine className="text-[#4CAD84]" /></div>
                  <div className="relative mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-[#DCFCE7]"><div className="absolute inset-0 rounded-full border-[8px] border-[#4CAD84] border-l-transparent border-b-transparent rotate-[-35deg]" /><div className="text-center"><p className="text-xl font-bold text-gray-800">68%</p><p className="text-[10px] text-gray-400">this week</p></div></div>
                  <p className="mt-4 text-center text-sm font-semibold text-gray-800">Nice work, Alex</p><p className="mt-1 text-center text-xs text-gray-500">You are building a steady rhythm.</p>
                  <div className="mt-3 flex h-20 items-end justify-between gap-2 px-2">{[35, 52, 42, 70, 58, 82, 64].map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-[#DCFCE7]" style={{ height: `${height}%` }}><div className="h-full w-full rounded-t-md bg-[#4CAD84]" style={{ clipPath: `inset(${100 - height / 1.4}% 0 0 0)` }} /></div>)}</div>
                  <div className="mt-2 flex justify-between text-[10px] text-gray-400"><span>Mon</span><span>Sun</span></div>
                </section>

                <section className="wellu-scallop-panel overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-3 shadow-sm xl:mt-[37px] xl:h-[246px] xl:translate-y-0">
                  <div className="flex items-start justify-between gap-3">
                    <div><h2 className="text-base font-bold text-gray-800">Continue your journey</h2><p className="mt-0.5 text-[10px] text-gray-500">One next step, whenever you need it.</p></div>
                    <button type="button" onClick={() => setJourneyIndex((journeyIndex + 1) % journeyCards.length)} aria-label="Shuffle journey suggestion" className="rounded-md border border-gray-200 p-2 text-gray-500 transition hover:border-gray-400 hover:text-gray-800"><FaRandom /></button>
                  </div>
                  <Link to={currentJourney.path} className="group mt-3 block overflow-hidden rounded-xl border border-slate-200/50 bg-gray-50">
                    <img src={currentJourney.image} alt="" className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="p-3"><p className="text-[11px] font-bold uppercase tracking-wide text-[#318766]">{currentJourney.label}</p><h3 className="mt-1 text-sm font-semibold leading-snug text-gray-800">{currentJourney.title}</h3><span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gray-500">Continue <FaChevronRight className="text-[8px]" /></span></div>
                  </Link>
                </section>

              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface JourneyCardProps { image: string; label: string; title: string; path: string; }

const JourneyCard: React.FC<JourneyCardProps> = ({ image, label, title, path }) => (
  <Link to={path} className="group block overflow-hidden rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
    <img src={image} alt="" className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
    <div className="p-3"><p className="text-xs font-bold uppercase tracking-wide text-[#318766]">{label}</p><h3 className="mt-1 text-base font-semibold leading-snug text-gray-800">{title}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gray-500">Continue <FaChevronRight className="text-[9px]" /></span></div>
  </Link>
);

const TaskRow: React.FC<{ label: string; done?: boolean; onToggle: () => void; onRemove: () => void }> = ({ label, done = false, onToggle, onRemove }) => (
  <div className="flex min-h-16 items-center gap-3 rounded-xl border border-slate-100 bg-[#FAFBFD] px-3 py-3 transition-colors hover:border-[#A7E8C2] hover:bg-[#E2FDEB]"><button type="button" onClick={onToggle} className="flex min-w-0 flex-1 items-center gap-3 text-left"><span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center ${done ? 'bg-[#4CAD84] text-white' : 'border-2 border-gray-200 text-transparent'}`}><FaCheck className="text-[10px]" /></span><span className={`text-base ${done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{label}</span></button><button type="button" onClick={onRemove} aria-label={`Remove ${label}`} className="shrink-0 p-1.5 text-gray-300 transition hover:text-rose-500"><FaTrash className="text-[11px]" /></button></div>
);

export default Dashboard;