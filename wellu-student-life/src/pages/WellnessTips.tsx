// pages/WellnessTips.tsx
import React, { useState } from 'react';
import { 
  FaLightbulb, 
  FaHeart, 
  FaBrain, 
  FaAppleAlt, 
  FaBed,
  FaRunning,
  FaBookOpen,
  FaSmile,
  FaLeaf,
  FaSearch,
  FaFilter,
  FaThumbsUp,
  FaRegClock,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

interface WellnessTip {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  readTime: string;
  isSaved: boolean;
  color: string;
}

const WellnessTips: React.FC = () => {
  const [tips, setTips] = useState<WellnessTip[]>([
    {
      id: '1',
      title: 'The Power of Deep Breathing',
      description: 'Practice the 4-7-8 breathing technique: Inhale for 4 seconds, hold for 7, exhale for 8. This activates your parasympathetic nervous system and reduces stress.',
      category: 'Mental Health',
      icon: <span className="text-blue-500"><FaBrain /></span>,
      readTime: '3 min',
      isSaved: true,
      color: 'from-blue-100 to-blue-50'
    },
    {
      id: '2',
      title: 'Mindful Eating Habits',
      description: 'Eat slowly and without distractions. Pay attention to the colors, textures, and flavors of your food. This practice improves digestion and helps maintain a healthy weight.',
      category: 'Nutrition',
      icon: <span className="text-green-500"><FaAppleAlt /></span>,
      readTime: '5 min',
      isSaved: false,
      color: 'from-green-100 to-green-50'
    },
    {
      id: '3',
      title: 'Quality Sleep Matters',
      description: 'Create a sleep sanctuary: keep your room cool (65-68°F), dark, and quiet. Maintain a consistent sleep schedule, even on weekends. Aim for 7-9 hours.',
      category: 'Sleep',
      icon: <span className="text-indigo-500"><FaBed /></span>,
      readTime: '4 min',
      isSaved: false,
      color: 'from-indigo-100 to-indigo-50'
    },
    {
      id: '4',
      title: 'Daily Movement Routine',
      description: 'Incorporate at least 30 minutes of movement daily. This can be walking, stretching, yoga, or any activity that gets your body moving and heart pumping.',
      category: 'Fitness',
      icon: <span className="text-orange-500"><FaRunning /></span>,
      readTime: '3 min',
      isSaved: true,
      color: 'from-orange-100 to-orange-50'
    },
    {
      id: '5',
      title: 'Gratitude Journaling',
      description: 'Write down three things you\'re grateful for each day. This simple practice rewires your brain to notice positive experiences and improves overall well-being.',
      category: 'Mindfulness',
      icon: <span className="text-pink-500"><FaHeart /></span>,
      readTime: '5 min',
      isSaved: false,
      color: 'from-pink-100 to-pink-50'
    },
    {
      id: '6',
      title: 'Digital Detox Benefits',
      description: 'Take intentional breaks from screens. Try 30 minutes of digital-free time before bed. Your eyes, mind, and sleep quality will thank you.',
      category: 'Digital Wellness',
      icon: <span className="text-yellow-500"><FaLightbulb /></span>,
      readTime: '4 min',
      isSaved: false,
      color: 'from-yellow-100 to-yellow-50'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const categories = ['All', 'Mental Health', 'Nutrition', 'Sleep', 'Fitness', 'Mindfulness', 'Digital Wellness'];

  const handleToggleSave = (id: string) => {
    setTips(tips.map(tip => 
      tip.id === id ? { ...tip, isSaved: !tip.isSaved } : tip
    ));
  };

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSaved = !showSavedOnly || tip.isSaved;
    return matchesSearch && matchesCategory && matchesSaved;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Mental Health': <span className="text-blue-500"><FaBrain /></span>,
      'Nutrition': <span className="text-green-500"><FaAppleAlt /></span>,
      'Sleep': <span className="text-indigo-500"><FaBed /></span>,
      'Fitness': <span className="text-orange-500"><FaRunning /></span>,
      'Mindfulness': <span className="text-pink-500"><FaHeart /></span>,
      'Digital Wellness': <span className="text-yellow-500"><FaLightbulb /></span>
    };
    return iconMap[category] || <span className="text-green-500"><FaLeaf /></span>;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Wellness Tips</h1>
              <p className="text-gray-500 mt-1">Discover practical tips for a healthier, happier you</p>
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
                    placeholder="Search wellness tips..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                  <button
                    onClick={() => setShowSavedOnly(!showSavedOnly)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                      showSavedOnly
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-yellow-500">
                      <FaBookmark />
                    </span>
                    Saved
                  </button>
                </div>
              </div>
            </div>

            {/* Tips Grid */}
            {filteredTips.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <span className="text-6xl text-gray-300 mx-auto mb-4 inline-block">
                  <FaLightbulb />
                </span>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No tips found</h3>
                <p className="text-gray-400">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTips.map((tip) => (
                  <div
                    key={tip.id}
                    className={`bg-linear-to-br ${tip.color} rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-white/50`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                          <span className="text-xs text-gray-500">{tip.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggleSave(tip.id)}
                        className="p-2 bg-white rounded-xl hover:shadow-md transition-all"
                      >
                        {tip.isSaved ? (
                          <span className="text-yellow-500">
                            <FaBookmark />
                          </span>
                        ) : (
                          <span className="text-gray-400">
                            <FaRegBookmark />
                          </span>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {tip.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>
                          <FaRegClock />
                        </span>
                        <span>{tip.readTime} read</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/80 hover:bg-white rounded-xl transition-all text-gray-600">
                          <span className="text-sm">
                            <FaShare />
                          </span>
                        </button>
                        <button className="p-2 bg-white/80 hover:bg-white rounded-xl transition-all text-gray-600">
                          <span className="text-sm">
                            <FaThumbsUp />
                          </span>
                        </button>
                        <button className="p-2 bg-white/80 hover:bg-white rounded-xl transition-all text-gray-600">
                          <span className="text-sm">
                            <FaChevronRight />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Featured Categories */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl p-4 text-center hover:scale-[1.02] transition-all cursor-pointer">
                <span className="text-3xl text-blue-500 mx-auto mb-2 inline-block">
                  <FaBrain />
                </span>
                <h4 className="font-medium text-gray-700">Mental Health</h4>
                <p className="text-xs text-gray-500">4 tips</p>
              </div>
              <div className="bg-linear-to-br from-green-100 to-green-50 rounded-2xl p-4 text-center hover:scale-[1.02] transition-all cursor-pointer">
                <span className="text-3xl text-green-500 mx-auto mb-2 inline-block">
                  <FaAppleAlt />
                </span>
                <h4 className="font-medium text-gray-700">Nutrition</h4>
                <p className="text-xs text-gray-500">3 tips</p>
              </div>
              <div className="bg-linear-to-br from-indigo-100 to-indigo-50 rounded-2xl p-4 text-center hover:scale-[1.02] transition-all cursor-pointer">
                <span className="text-3xl text-indigo-500 mx-auto mb-2 inline-block">
                  <FaBed />
                </span>
                <h4 className="font-medium text-gray-700">Sleep</h4>
                <p className="text-xs text-gray-500">5 tips</p>
              </div>
              <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl p-4 text-center hover:scale-[1.02] transition-all cursor-pointer">
                <span className="text-3xl text-orange-500 mx-auto mb-2 inline-block">
                  <FaRunning />
                </span>
                <h4 className="font-medium text-gray-700">Fitness</h4>
                <p className="text-xs text-gray-500">3 tips</p>
              </div>
            </div>

            {/* Daily Wellness Quote */}
            <div className="mt-6 bg-linear-to-r from-green-500 to-yellow-400 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <span className="text-3xl opacity-50">
                  <FaQuoteLeft />
                </span>
                <div>
                  <p className="text-lg font-medium leading-relaxed">
                    "Wellness is not a destination, but a continuous journey of self-discovery and growth."
                  </p>
                  <p className="text-sm opacity-75 mt-2">— Daily Wellness Insight</p>
                </div>
                <span className="text-3xl opacity-50 ml-auto">
                  <FaQuoteRight />
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WellnessTips;