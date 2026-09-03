// pages/Journal.tsx
import React, { useState } from 'react';
import { 
  FaBook, 
  FaPlus, 
  FaSearch, 
  FaCalendarAlt, 
  FaTag,
  FaTrash,
  FaEdit,
  FaTimes,
  FaSave,
  FaSmile,
  FaMeh,
  FaFrown,
  FaGrinStars,
  FaRegClock
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: number;
  tags: string[];
  date: string;
  time: string;
}

const Journal: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      title: 'Morning Meditation',
      content: 'Started my day with a 10-minute meditation session. Feeling more centered and focused. The quiet moments helped me set intentions for the day ahead.',
      mood: 4,
      tags: ['meditation', 'morning-routine'],
      date: '2026-09-02',
      time: '08:30 AM'
    },
    {
      id: '2',
      title: 'Gratitude Practice',
      content: 'Today I\'m grateful for: 1. The warm sunshine 2. Supportive friends 3. Good health 4. Learning opportunities 5. Peaceful moments. Writing this makes me realize how blessed I am.',
      mood: 5,
      tags: ['gratitude', 'mindfulness'],
      date: '2026-09-01',
      time: '07:15 PM'
    },
    {
      id: '3',
      title: 'Stressful Workday',
      content: 'Had a challenging day at work with tight deadlines. Felt overwhelmed but took breaks to breathe. Remembered that it\'s okay to not be perfect.',
      mood: 2,
      tags: ['stress', 'work'],
      date: '2026-08-31',
      time: '09:45 PM'
    }
  ]);

  const [showNewEntry, setShowNewEntry] = useState(false);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    mood: 3,
    tags: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMood, setFilterMood] = useState<number | null>(null);

  const moodLabels = ['Very Bad', 'Bad', 'Okay', 'Good', 'Very Good'];
  const moodColors = ['text-red-500', 'text-orange-400', 'text-yellow-400', 'text-green-400', 'text-purple-400'];

  const getMoodIcon = (value: number) => {
    const icons = [FaFrown, FaFrown, FaMeh, FaSmile, FaGrinStars];
    const Icon = icons[value - 1];
    return <span className={moodColors[value - 1]}><Icon /></span>;
  };

  const handleSaveEntry = () => {
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      title: newEntry.title,
      content: newEntry.content,
      mood: newEntry.mood,
      tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setEntries([entry, ...entries]);
    setNewEntry({ title: '', content: '', mood: 3, tags: '' });
    setShowNewEntry(false);
  };

  const handleDeleteEntry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  const handleEditEntry = (entry: JournalEntry) => {
    setEditingEntry(entry);
    setNewEntry({
      title: entry.title,
      content: entry.content,
      mood: entry.mood,
      tags: entry.tags.join(', ')
    });
    setShowNewEntry(true);
  };

  const handleUpdateEntry = () => {
    if (!editingEntry || !newEntry.title.trim() || !newEntry.content.trim()) return;

    const updatedEntry: JournalEntry = {
      ...editingEntry,
      title: newEntry.title,
      content: newEntry.content,
      mood: newEntry.mood,
      tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    setEntries(entries.map(entry => 
      entry.id === editingEntry.id ? updatedEntry : entry
    ));
    setEditingEntry(null);
    setNewEntry({ title: '', content: '', mood: 3, tags: '' });
    setShowNewEntry(false);
  };

  const handleCancelEntry = () => {
    setShowNewEntry(false);
    setEditingEntry(null);
    setNewEntry({ title: '', content: '', mood: 3, tags: '' });
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesMood = filterMood === null || entry.mood === filterMood;
    return matchesSearch && matchesMood;
  });

  const getMoodLabel = (value: number) => {
    const labels = ['Very Bad', 'Bad', 'Okay', 'Good', 'Very Good'];
    return labels[value - 1];
  };

  const moodOptions = [
    { value: 5, label: 'Very Good', icon: FaGrinStars, color: 'text-purple-400' },
    { value: 4, label: 'Good', icon: FaSmile, color: 'text-green-400' },
    { value: 3, label: 'Okay', icon: FaMeh, color: 'text-yellow-400' },
    { value: 2, label: 'Bad', icon: FaFrown, color: 'text-orange-400' },
    { value: 1, label: 'Very Bad', icon: FaFrown, color: 'text-red-500' }
  ];

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere accent="cyan" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Journal</h1>
                <p className="text-gray-500 mt-1">Write your thoughts, track your journey</p>
              </div>
              <button
                onClick={() => {
                  setEditingEntry(null);
                  setNewEntry({ title: '', content: '', mood: 3, tags: '' });
                  setShowNewEntry(true);
                }}
                className="flex items-center gap-2 rounded-xl bg-linear-to-r from-green-500 to-yellow-400 px-6 py-3 font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <FaPlus />
                New Entry
              </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search entries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                  <button
                    onClick={() => setFilterMood(null)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      filterMood === null
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {moodOptions.map((mood) => {
                    const Icon = mood.icon;
                    return (
                      <button
                        key={mood.value}
                        onClick={() => setFilterMood(filterMood === mood.value ? null : mood.value)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                          filterMood === mood.value
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                          <span className={`text-2xl ${mood.color}`}>
                            <Icon />
                          </span>
                        {mood.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* New Entry Form */}
            {showNewEntry && (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 shadow-sm mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {editingEntry ? 'Edit Entry' : 'New Journal Entry'}
                  </h3>
                  <button
                    onClick={handleCancelEntry}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <span className="text-gray-500">
                      <FaTimes />
                    </span>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Entry title..."
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                  
                  <textarea
                    placeholder="Write your thoughts..."
                    value={newEntry.content}
                    onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                    rows={5}
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      How are you feeling?
                    </label>
                    <div className="flex gap-3">
                      {moodOptions.map((mood) => {
                        const Icon = mood.icon;
                        return (
                          <button
                            key={mood.value}
                            onClick={() => setNewEntry({ ...newEntry, mood: mood.value })}
                            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all flex-1 ${
                              newEntry.mood === mood.value
                                ? 'bg-green-100 ring-2 ring-green-400'
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                          >
                            <span className={`text-2xl ${mood.color}`}>
                              <Icon />
                            </span>
                            <span className="text-xs text-gray-600">{mood.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={newEntry.tags}
                    onChange={(e) => setNewEntry({ ...newEntry, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                  
                  <div className="flex gap-3">
                    <button
                      onClick={editingEntry ? handleUpdateEntry : handleSaveEntry}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-bold text-white transition-all hover:bg-slate-700 hover:shadow-lg"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-lime-300 text-slate-900">
                        <FaSave />
                      </span>
                      {editingEntry ? 'Update' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancelEntry}
                      className="px-6 py-3 border border-gray-200 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Entries List */}
            <div className="space-y-4">
              {filteredEntries.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                  <span className="text-6xl text-gray-300 mx-auto mb-4 inline-block">
                    <FaBook />
                  </span>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No entries yet</h3>
                  <p className="text-gray-400">Start writing your thoughts and feelings</p>
                </div>
              ) : (
                filteredEntries.map((entry) => (
                  <div key={entry.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getMoodIcon(entry.mood)}
                          <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {getMoodLabel(entry.mood)}
                          </span>
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed mb-3">{entry.content}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt />
                            {new Date(entry.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaRegClock />
                            {entry.time}
                          </span>
                          {entry.tags.length > 0 && (
                            <span className="flex items-center gap-1">
                              <FaTag />
                              {entry.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEditEntry(entry)}
                          className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-xl transition-all"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Stats */}
            {entries.length > 0 && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{entries.length}</p>
                  <p className="text-sm text-gray-500">Total Entries</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {Math.round(entries.reduce((acc, e) => acc + e.mood, 0) / entries.length * 10) / 10}
                  </p>
                  <p className="text-sm text-gray-500">Average Mood</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {new Set(entries.flatMap(e => e.tags)).size}
                  </p>
                  <p className="text-sm text-gray-500">Unique Tags</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Journal;