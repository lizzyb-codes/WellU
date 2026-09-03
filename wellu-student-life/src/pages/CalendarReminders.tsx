import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBell,
  FaCalendarAlt,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaGoogle,
  FaPlus,
  FaTrash,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';

interface Reminder {
  id: number;
  day: number;
  title: string;
  time: string;
  color: string;
}

const CalendarReminders: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(3);
  const [isSynced, setIsSynced] = useState(false);
  const [newReminder, setNewReminder] = useState('');
  const [newTime, setNewTime] = useState('09:00');
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, day: 3, title: 'Daily mood check-in', time: '9:00 AM', color: 'bg-emerald-500' },
    { id: 2, day: 5, title: 'Journal reflection', time: '7:30 PM', color: 'bg-emerald-400' },
    { id: 3, day: 9, title: 'Take a mindful break', time: '2:00 PM', color: 'bg-emerald-600' },
    { id: 4, day: 15, title: 'Wellness plan review', time: '10:00 AM', color: 'bg-emerald-500' },
  ]);

  const daysInMonth = 30;
  const firstDayOffset = 2;
  const calendarDays = Array.from({ length: 35 }, (_, index) => {
    const day = index - firstDayOffset + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });
  const selectedReminders = reminders.filter((reminder) => reminder.day === selectedDay);

  const addReminder = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newReminder.trim()) return;
    setReminders((current) => [...current, {
      id: Date.now(),
      day: selectedDay,
      title: newReminder.trim(),
      time: new Date(`2026-09-03T${newTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      color: 'bg-emerald-500',
    }]);
    setNewReminder('');
  };

  const removeReminder = (id: number) => {
    setReminders((current) => current.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere accent="cyan" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1250px] space-y-6">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">Stay in rhythm</p>
                <h1 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-900">Calendar &amp; reminders</h1>
                <p className="mt-1 text-sm text-slate-500">Keep your student day visible without carrying it all in your head.</p>
              </div>
              <button type="button" onClick={() => setIsSynced((synced) => !synced)} className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${isSynced ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300'}`}>
                {isSynced ? <FaCheck className="text-xs" /> : <FaGoogle className="text-xs" />}
                {isSynced ? 'Google Calendar synced' : 'Sync Google Calendar'}
              </button>
            </header>

            {isSynced && <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"><strong>Demo sync active.</strong> Calendar events are simulated locally in this frontend.</div>}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
              <section className="wellu-scallop-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Month view</p><h2 className="mt-1 font-display text-2xl font-black text-slate-900">September 2026</h2></div><div className="flex gap-2"><button type="button" aria-label="Previous month" className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:border-emerald-300 hover:text-emerald-600"><FaChevronLeft /></button><button type="button" aria-label="Next month" className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:border-emerald-300 hover:text-emerald-600"><FaChevronRight /></button></div></div>
                <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[11px] font-bold uppercase tracking-wide text-slate-400">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day} className="py-2">{day}</span>)}</div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const hasReminder = day !== null && reminders.some((reminder) => reminder.day === day);
                    return <button key={`${day}-${index}`} type="button" disabled={day === null} onClick={() => day !== null && setSelectedDay(day)} className={`relative min-h-16 rounded-xl p-2 text-left transition ${day === null ? 'cursor-default' : selectedDay === day ? 'bg-emerald-500 text-white shadow-sm' : 'bg-[#FAFBFD] text-slate-700 hover:bg-emerald-50'}`}><span className="text-sm font-semibold">{day}</span>{hasReminder && <span className={`absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full ${selectedDay === day ? 'bg-white' : 'bg-emerald-500'}`} />}</button>;
                  })}
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Days with reminders</div>
              </section>

              <section className="wellu-scallop-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Tuesday, September {selectedDay}</p><h2 className="mt-1 font-display text-2xl font-black text-slate-900">Your reminders</h2></div><FaBell className="text-emerald-500" /></div>
                <div className="mt-5 space-y-3">
                  {selectedReminders.length ? selectedReminders.map((reminder) => <div key={reminder.id} className="flex items-center gap-3 rounded-xl bg-emerald-50 p-3"><span className={`h-2.5 w-2.5 shrink-0 rounded-full ${reminder.color}`} /><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-800">{reminder.title}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><FaClock /> {reminder.time}</p></div><button type="button" onClick={() => removeReminder(reminder.id)} aria-label={`Remove ${reminder.title}`} className="p-1.5 text-slate-300 hover:text-rose-500"><FaTrash className="text-xs" /></button></div>) : <div className="rounded-xl border border-dashed border-slate-200 p-5 text-center text-sm text-slate-400">No reminders for this day.</div>}
                </div>
                <form onSubmit={addReminder} className="mt-5 border-t border-slate-100 pt-5"><label className="text-xs font-bold uppercase tracking-wide text-slate-500" htmlFor="reminder-title">Add reminder</label><input id="reminder-title" value={newReminder} onChange={(event) => setNewReminder(event.target.value)} placeholder="e.g. Submit assignment" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100" /><div className="mt-2 flex gap-2"><input type="time" value={newTime} onChange={(event) => setNewTime(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-emerald-400" /><button type="submit" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2.5 text-sm font-bold text-white hover:bg-emerald-600"><FaPlus className="text-xs" /> Add reminder</button></div></form>
              </section>
            </div>

            <section className="wellu-scallop-panel rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><FaCalendarAlt /></div><div><h2 className="font-display text-xl font-black text-slate-900">WellU keeps the important bits together</h2><p className="mt-1 text-sm text-slate-500">Your reminders are local for now. Connect a backend later to persist them across devices.</p></div><Link to="/dashboard" className="ml-auto hidden items-center gap-2 text-sm font-bold text-emerald-600 sm:flex">Back to dashboard <FaChevronRight className="text-xs" /></Link></div></section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CalendarReminders;