import React, { useState } from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const CleanFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white text-slate-600 pt-16 pb-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-t border-slate-200 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Newsletter Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-slate-200 mb-12">
          <div className="space-y-2 max-w-md">
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
              Get weekly tips and updates
            </h3>
            <p className="text-sm text-slate-500">
              No spam. Unsubscribe any time.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Subscribed — check your inbox soon.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 bg-white px-4 py-2.5 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none border border-slate-200"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-3.5 font-display text-[34px] font-black tracking-tight text-slate-900">
              <img src="/image-removebg-preview.png" alt="WellU Logo" className="w-14 h-14 object-contain" />
              <span>WellU</span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              The all-in-one student life companion for academics, productivity, wellness, campus life, and personal growth.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <div className="font-bold text-sm text-slate-900 mb-4">Product</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#product" className="hover:text-slate-900 transition-colors">Daily dashboard</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">AI assistant</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Academic planner</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Wellness hub</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Student community</a></li>
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <div className="font-bold text-sm text-slate-900 mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column: Support */}
          <div>
            <div className="font-bold text-sm text-slate-900 mb-4">Support</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Security</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-100">
          <span>© 2026 WellU. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
