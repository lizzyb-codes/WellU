// pages/Affirmations.tsx
import React, { useState, useEffect } from 'react';
import { 
  FaHeart, 
  FaPlus, 
  FaTrash, 
  FaEdit, 
  FaTimes, 
  FaSave,
  FaQuoteLeft,
  FaQuoteRight,
  FaRandom,
  FaCopy,
  FaCheck,
  FaStar,
  FaRegStar
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

interface Affirmation {
  id: string;
  text: string;
  category: string;
  isFavorite: boolean;
  createdAt: string;
}

const Affirmations: React.FC = () => {
  const [affirmations, setAffirmations] = useState<Affirmation[]>([
    {
      id: '1',
      text: 'I am worthy of all the love and happiness that comes my way.',
      category: 'Self-Love',
      isFavorite: true,
      createdAt: '2026-09-02'
    },
    {
      id: '2',
      text: 'Every day, I grow stronger and more resilient.',
      category: 'Strength',
      isFavorite: false,
      createdAt: '2026-09-01'
    },
    {
      id: '3',
      text: 'I trust my journey and embrace the lessons along the way.',
      category: 'Trust',
      isFavorite: true,
      createdAt: '2026-08-31'
    },
    {
      id: '4',
      text: 'My mind is calm, my heart is at peace.',
      category: 'Peace',
      isFavorite: false,
      createdAt: '2026-08-30'
    },
    {
      id: '5',
      text: 'I have the power to create the life I desire.',
      category: 'Empowerment',
      isFavorite: false,
      createdAt: '2026-08-29'
    }
  ]);

  const [showNewAffirmation, setShowNewAffirmation] = useState(false);
  const [editingAffirmation, setEditingAffirmation] = useState<Affirmation | null>(null);
  const [newAffirmation, setNewAffirmation] = useState({
    text: '',
    category: ''
  });
  const [currentAffirmation, setCurrentAffirmation] = useState<Affirmation | null>(null);
  const [copied, setCopied] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const categories = ['All', 'Self-Love', 'Strength', 'Trust', 'Peace', 'Empowerment', 'Gratitude', 'Success'];

  useEffect(() => {
    if (affirmations.length > 0) {
      setCurrentAffirmation(affirmations[0]);
    }
  }, []);

  const handleSaveAffirmation = () => {
    if (!newAffirmation.text.trim()) return;

    const affirmation: Affirmation = {
      id: Date.now().toString(),
      text: newAffirmation.text,
      category: newAffirmation.category || 'General',
      isFavorite: false,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setAffirmations([affirmation, ...affirmations]);
    setNewAffirmation({ text: '', category: '' });
    setShowNewAffirmation(false);
  };

  const handleDeleteAffirmation = (id: string) => {
    if (window.confirm('Are you sure you want to delete this affirmation?')) {
      setAffirmations(affirmations.filter(a => a.id !== id));
      if (currentAffirmation?.id === id) {
        setCurrentAffirmation(affirmations.filter(a => a.id !== id)[0] || null);
      }
    }
  };

  const handleEditAffirmation = (affirmation: Affirmation) => {
    setEditingAffirmation(affirmation);
    setNewAffirmation({
      text: affirmation.text,
      category: affirmation.category
    });
    setShowNewAffirmation(true);
  };

  const handleUpdateAffirmation = () => {
    if (!editingAffirmation || !newAffirmation.text.trim()) return;

    const updatedAffirmation: Affirmation = {
      ...editingAffirmation,
      text: newAffirmation.text,
      category: newAffirmation.category || 'General'
    };

    setAffirmations(affirmations.map(a => 
      a.id === editingAffirmation.id ? updatedAffirmation : a
    ));
    setEditingAffirmation(null);
    setNewAffirmation({ text: '', category: '' });
    setShowNewAffirmation(false);
  };

  const handleCancelEntry = () => {
    setShowNewAffirmation(false);
    setEditingAffirmation(null);
    setNewAffirmation({ text: '', category: '' });
  };

  const handleToggleFavorite = (id: string) => {
    setAffirmations(affirmations.map(a => 
      a.id === id ? { ...a, isFavorite: !a.isFavorite } : a
    ));
  };

  const handleRandomAffirmation = () => {
    const filtered = getFilteredAffirmations();
    if (filtered.length > 0) {
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setCurrentAffirmation(random);
    }
  };

  const handleCopyAffirmation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFilteredAffirmations = () => {
    let filtered = affirmations;
    if (showFavoritesOnly) {
      filtered = filtered.filter(a => a.isFavorite);
    }
    if (filterCategory !== 'All') {
      filtered = filtered.filter(a => a.category === filterCategory);
    }
    return filtered;
  };

  const filteredAffirmations = getFilteredAffirmations();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Affirmations</h1>
                <p className="text-gray-500 mt-1">Empower your mind with positive statements</p>
              </div>
              <button
                onClick={() => {
                  setEditingAffirmation(null);
                  setNewAffirmation({ text: '', category: '' });
                  setShowNewAffirmation(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-yellow-400 text-white rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <FaPlus />
                New Affirmation
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Affirmation Display */}
              <div className="lg:col-span-2 space-y-6">
                {/* Current Affirmation Card */}
                {currentAffirmation && (
                  <div className="bg-linear-to-br from-green-50 to-yellow-50 rounded-2xl shadow-sm p-8 border border-green-100">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-green-300 text-3xl">
                        <FaQuoteLeft />
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleToggleFavorite(currentAffirmation.id)}
                          className="p-2 hover:bg-pink-100 rounded-xl transition-colors"
                        >
                          {currentAffirmation.isFavorite ? (
                            <FaStar className="text-yellow-400 text-lg" />
                          ) : (
                            <FaRegStar className="text-gray-400 text-lg" />
                          )}
                        </button>
                        <button
                          onClick={() => handleCopyAffirmation(currentAffirmation.text)}
                          className="p-2 hover:bg-pink-100 rounded-xl transition-colors"
                        >
                          {copied ? (
                            <FaCheck className="text-green-500 text-lg" />
                          ) : (
                            <FaCopy className="text-gray-400 text-lg" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-2xl font-medium text-gray-800 leading-relaxed text-center mb-6">
                      {currentAffirmation.text}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm font-medium">
                        {currentAffirmation.category}
                      </span>
                      <div className="flex gap-3">
                        <button
                          onClick={handleRandomAffirmation}
                          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-green-600 font-medium hover:shadow-md transition-all"
                        >
                          <FaRandom />
                          Random
                        </button>
                        <button
                          onClick={() => handleEditAffirmation(currentAffirmation)}
                          className="p-2 bg-white rounded-xl text-gray-600 hover:shadow-md transition-all"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteAffirmation(currentAffirmation.id)}
                          className="p-2 bg-white rounded-xl text-red-500 hover:shadow-md transition-all"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-sm p-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => { setFilterCategory('All'); setShowFavoritesOnly(false); }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        filterCategory === 'All' && !showFavoritesOnly
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      All
                    </button>
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => { setFilterCategory(category); setShowFavoritesOnly(false); }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          filterCategory === category && !showFavoritesOnly
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                    <button
                      onClick={() => { setShowFavoritesOnly(!showFavoritesOnly); setFilterCategory('All'); }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                        showFavoritesOnly
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <FaStar className="text-yellow-400" />
                      Favorites
                    </button>
                  </div>
                </div>

                {/* Affirmation List */}
                <div className="space-y-3">
                  {filteredAffirmations.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                      <FaHeart className="text-6xl text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No affirmations found</h3>
                      <p className="text-gray-400">Create your first affirmation to start your journey</p>
                    </div>
                  ) : (
                    filteredAffirmations.map((affirmation) => (
                      <div
                        key={affirmation.id}
                        onClick={() => setCurrentAffirmation(affirmation)}
                        className={`bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all cursor-pointer border-2 ${
                          currentAffirmation?.id === affirmation.id
                            ? 'border-green-400'
                            : 'border-transparent hover:border-green-200'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full">
                                {affirmation.category}
                              </span>
                              {affirmation.isFavorite && (
                                <FaStar className="text-yellow-400 text-sm" />
                              )}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{affirmation.text}</p>
                          </div>
                          <div className="flex gap-1 ml-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavorite(affirmation.id);
                              }}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              {affirmation.isFavorite ? (
                                <FaStar className="text-yellow-400 text-sm" />
                              ) : (
                                <FaRegStar className="text-gray-400 text-sm" />
                              )}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditAffirmation(affirmation);
                              }}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <FaEdit className="text-gray-400 text-sm" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteAffirmation(affirmation.id);
                              }}
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <FaTrash className="text-gray-400 text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Sidebar - Stats and Quick Tips */}
              <div className="space-y-6">
                {/* Stats */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                    Your Affirmation Practice
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                      <span className="text-gray-600">Total Affirmations</span>
                      <span className="text-2xl font-bold text-green-600">{affirmations.length}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                      <span className="text-gray-600">Favorites</span>
                      <span className="text-2xl font-bold text-yellow-600">
                        {affirmations.filter(a => a.isFavorite).length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                      <span className="text-gray-600">Categories</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {new Set(affirmations.map(a => a.category)).size}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Daily Affirmation Tip */}
                <div className="bg-linear-to-br from-green-50 to-yellow-50 rounded-2xl shadow-sm p-6 border border-green-100">
                  <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                    Daily Practice
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Start each morning by reading an affirmation aloud. 
                      Repeat it three times and feel the words resonate within you.
                    </p>
                    <div className="bg-white rounded-xl p-3">
                      <p className="text-xs text-gray-500">💡 Tip</p>
                      <p className="text-sm text-gray-700">
                        Write your favorite affirmations in a journal and reflect on them weekly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action */}
                <button
                  onClick={handleRandomAffirmation}
                  className="w-full py-4 bg-linear-to-r from-green-500 to-yellow-400 text-white rounded-2xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FaRandom />
                  Random Affirmation
                </button>
              </div>
            </div>

            {/* New/Edit Affirmation Form */}
            {showNewAffirmation && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {editingAffirmation ? 'Edit Affirmation' : 'New Affirmation'}
                    </h3>
                    <button
                      onClick={handleCancelEntry}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <FaTimes className="text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <textarea
                      placeholder="Write your affirmation..."
                      value={newAffirmation.text}
                      onChange={(e) => setNewAffirmation({ ...newAffirmation, text: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                      rows={4}
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Category
                      </label>
                      <select
                        value={newAffirmation.category}
                        onChange={(e) => setNewAffirmation({ ...newAffirmation, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                      >
                        <option value="">Select a category</option>
                        {categories.slice(1).map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={editingAffirmation ? handleUpdateAffirmation : handleSaveAffirmation}
                        className="flex-1 py-3 bg-linear-to-r from-green-500 to-yellow-400 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                      >
                        <FaSave className="inline mr-2" />
                        {editingAffirmation ? 'Update' : 'Save'}
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
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Affirmations;