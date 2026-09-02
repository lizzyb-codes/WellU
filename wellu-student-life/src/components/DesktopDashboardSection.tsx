import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Flame, 
  Moon, 
  Zap, 
  TrendingUp, 
  Clock, 
  Compass, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Sliders, 
  Share2, 
  Download, 
  Maximize2,
  CheckCircle2,
  RefreshCw,
  Layers,
  BarChart3,
  Calendar,
  Radio,
  Cpu
} from 'lucide-react';
import { Sparkle } from './Sparkle';

export const DesktopDashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day' | 'week' | 'month' | 'year'>('week');
  const [activeMetric, setActiveMetric] = useState<'heart' | 'strain' | 'sleep' | 'calories'>('heart');

  return (
    <section id="desktop-dashboard" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden bg-[#FAFBFD]">
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-[12.5px] font-bold tracking-wide mb-3 shadow-2xs">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Desktop & Web Command Center</span>
          </div>

          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[54px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            Comprehensive Analytics for Serious Performance
          </h2>

          <p className="mt-4 text-[#4B5563] text-[16px] sm:text-[18px] leading-relaxed font-normal">
            Expand beyond mobile with high-resolution telemetry, multi-sensor live streaming, full sleep architecture, and exportable bio-metrics on your PC.
          </p>
        </div>

        {/* Big PC / Desktop Mockup Window */}
        <div className="relative rounded-[28px] sm:rounded-[36px] p-2 sm:p-3.5 bg-gradient-to-b from-slate-200/90 via-slate-300/60 to-slate-200/80 border border-white/80 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.18),0_1px_3px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          
          {/* Outer Specular Inner Highlight */}
          <div className="relative rounded-[22px] sm:rounded-[28px] bg-white border border-slate-200/90 overflow-hidden shadow-inner flex flex-col">
            
            {/* Desktop Browser Window Header / Chrome */}
            <div className="w-full bg-slate-50/90 border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 select-none">
              
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="hidden sm:inline-block ml-3 text-[12px] font-semibold text-slate-400">VitalFlow Desktop Studio v2.4</span>
              </div>

              {/* URL Bar */}
              <div className="hidden md:flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-slate-200 text-[12px] text-slate-600 w-80 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate font-mono text-[11px] text-slate-500">https://hub.vitalflow.io/telemetry/live-sync</span>
              </div>

              {/* Sensor Sync Badge */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11.5px] font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>4 Sensors Paired</span>
                </div>
              </div>
            </div>

            {/* Desktop Dashboard Main Interface */}
            <div className="p-4 sm:p-6 lg:p-8 bg-[#FAFBFD] space-y-6">
              
              {/* Top Banner: Athlete Overview & Quick Biometrics */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Athlete Card with Real Image */}
                <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[220px] bg-slate-900 shadow-sm border border-slate-200 flex flex-col justify-between p-5 text-white">
                  {/* Real athlete image background with gradient */}
                  <img 
                    src="https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=800&q=80" 
                    alt="Active runner telemetry"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                        alt="Profile avatar" 
                        className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold text-[14px] leading-tight">Alex Rivera</div>
                        <div className="text-[11px] text-emerald-400 font-medium">Pro Endurance Tier</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10.5px] font-bold uppercase tracking-wider">
                      Live Stream
                    </span>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-white/15 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-[10px] text-slate-300 font-medium">Daily Strain</div>
                      <div className="font-display font-black text-[18px] text-white">16.8<span className="text-[10px] text-slate-400">/21</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-medium">Recovery</div>
                      <div className="font-display font-black text-[18px] text-emerald-400">94%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-medium">VO2 Max</div>
                      <div className="font-display font-black text-[18px] text-sky-400">54.8</div>
                    </div>
                  </div>
                </div>

                {/* Live Biometric Telemetry Graph Card (8 cols) */}
                <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-black text-[18px] text-slate-900">Continuous Bio-Stream</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          ECG Synced (100Hz)
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-500 mt-0.5">Real-time multi-channel telemetry with instant artifact filtering</p>
                    </div>

                    {/* Time Range Filter Buttons */}
                    <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/80 text-[12px] font-semibold text-slate-600">
                      {(['day', 'week', 'month', 'year'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`px-3 py-1 rounded-lg capitalize transition-all ${
                            activeTab === t ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Waveform SVG Chart */}
                  <div className="relative h-44 sm:h-48 w-full">
                    <svg className="w-full h-full" viewBox="0 0 700 160" fill="none">
                      <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="20" x2="700" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="0" y1="60" x2="700" y2="60" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="0" y1="100" x2="700" y2="100" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="0" y1="140" x2="700" y2="140" stroke="#F1F5F9" strokeWidth="1" />

                      {/* Area Fill */}
                      <path
                        d="M 0,110 Q 70,60 140,85 T 280,45 T 420,70 T 560,30 T 700,55 L 700,160 L 0,160 Z"
                        fill="url(#areaGradient)"
                      />

                      {/* Wave Curve */}
                      <path
                        d="M 0,110 Q 70,60 140,85 T 280,45 T 420,70 T 560,30 T 700,55"
                        stroke="#22C55E"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                      />

                      {/* Target threshold dashed line */}
                      <line x1="0" y1="45" x2="700" y2="45" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />

                      {/* Key data point markers */}
                      <circle cx="280" cy="45" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
                      <circle cx="560" cy="30" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>

                    {/* Peak Marker Tooltip */}
                    <div className="absolute top-2 right-28 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Peak Pace: 168 bpm • Zone 4</span>
                    </div>
                  </div>

                  {/* Bottom Chart Footer Axis */}
                  <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100">
                    <span>06:00 AM (Resting 48bpm)</span>
                    <span>10:30 AM (HIIT 155bpm)</span>
                    <span>02:15 PM (Steady 110bpm)</span>
                    <span>06:45 PM (Trail Run 168bpm)</span>
                    <span>09:00 PM (Recovery)</span>
                  </div>
                </div>

              </div>

              {/* Middle Row: 4 Metric Cards with Vector badges & Real Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Heart Rate Variability */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +14% vs avg
                    </span>
                  </div>
                  <div className="font-display font-black text-[22px] text-slate-900 leading-tight">78 ms</div>
                  <div className="text-[12px] text-slate-500 font-medium mt-0.5">Heart Rate Variability</div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[82%]" />
                  </div>
                </div>

                {/* Metric 2: Deep Sleep Architecture */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Moon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      8h 12m Total
                    </span>
                  </div>
                  <div className="font-display font-black text-[22px] text-slate-900 leading-tight">2h 18m</div>
                  <div className="text-[12px] text-slate-500 font-medium mt-0.5">Deep Restoration Sleep</div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[74%]" />
                  </div>
                </div>

                {/* Metric 3: Active Metabolic Burn */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Flame className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      2,840 kcal
                    </span>
                  </div>
                  <div className="font-display font-black text-[22px] text-slate-900 leading-tight">1,120 kcal</div>
                  <div className="text-[12px] text-slate-500 font-medium mt-0.5">Active Workout Output</div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[90%]" />
                  </div>
                </div>

                {/* Metric 4: Sensor Status & Latency */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                      0.8 ms Low Latency
                    </span>
                  </div>
                  <div className="font-display font-black text-[22px] text-slate-900 leading-tight">36.8° C</div>
                  <div className="text-[12px] text-slate-500 font-medium mt-0.5">Core Body Temperature</div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full w-[65%]" />
                  </div>
                </div>

              </div>

              {/* Bottom Row: Recent High-Definition Activity Sessions with Photography */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-display font-black text-[16px] text-slate-900">Recent Synchronized Workouts</h4>
                    <p className="text-[12px] text-slate-500">Cross-device training sessions verified by GPS and biometric telemetry</p>
                  </div>
                  <button className="text-[12px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                    <span>Export CSV</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Activity 1 */}
                  <div className="rounded-xl p-3 border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-3 bg-slate-50/50">
                    <img 
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300&q=80" 
                      alt="Outdoor Running"
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-[13px] text-slate-900 truncate">Alpine Trail Run</div>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">GPS</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">14.2 km • 1h 08m • 740 kcal</div>
                      <div className="text-[10.5px] text-slate-400 mt-1">Avg 156 bpm • Cadence 178 spm</div>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="rounded-xl p-3 border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-3 bg-slate-50/50">
                    <img 
                      src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80" 
                      alt="Road Cycling"
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-[13px] text-slate-900 truncate">Coastal Road Ride</div>
                        <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded">Power</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">42.8 km • 1h 34m • 890 kcal</div>
                      <div className="text-[10.5px] text-slate-400 mt-1">Avg 218 Watts • 28.4 km/h</div>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="rounded-xl p-3 border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-3 bg-slate-50/50">
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80" 
                      alt="Mobility & Yoga"
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-[13px] text-slate-900 truncate">Mobility Recovery</div>
                        <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.5 rounded">Zen</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">45 min • 180 kcal • Low Strain</div>
                      <div className="text-[10.5px] text-slate-400 mt-1">Avg 78 bpm • HRV Enhanced</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
