import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export type AuthMode = 'login' | 'signup';

interface LoginSignupModalProps {
  open: boolean;
  initialMode?: AuthMode;
  onClose: () => void;
}

export const LoginSignupModal: React.FC<LoginSignupModalProps> = ({ open, initialMode = 'login', onClose }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPw, setShowPw] = useState(false);

  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // reset when mode or open changes
  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setSuccess(false);
      setError(null);
      setPassword('');
      setConfirm('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, initialMode]);

  // esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (mode === 'signup') {
      if (!name.trim() || !email.trim() || !password) {
        setError('Please fill in all fields.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirm) {
        setError('Passwords do not match.');
        return;
      }
    } else {
      if (!email.trim() || !password) {
        setError('Please enter your email and password.');
        return;
      }
    }

    setSubmitting(true);
    // fake latency → success toast
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.setTimeout(() => {
        setSuccess(false);
      }, 3500);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={mode === 'login' ? 'Log in to WellU' : 'Create a WellU account'}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Success Toast */}
      {success && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#4cad84] text-white shadow-[0_12px_30px_rgba(76,173,132,0.45)] font-semibold text-[14px] animate-[fadeIn_.15s_ease-out]">
          <CheckCircle2 className="w-4.5 h-4.5" />
          <span>
            {mode === 'signup'
              ? `Welcome to WellU${name ? `, ${name.split(' ')[0]}` : ''}!`
              : 'Logged in — welcome back 👋'}
          </span>
        </div>
      )}

      {/* Modal */}
      <div className="auth-scrollbar relative z-10 w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto">
        <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.35)] border border-slate-200 overflow-hidden">

          {/* Accent band */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#4cad84] via-[#fbb43b] to-[#4cad84]" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          <div className="p-6 sm:p-8">

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <img src="/image-removebg-preview.png" alt="WellU Logo" className="w-14 h-14 object-contain" />
                <span className="font-display font-black text-[27px] tracking-tight text-slate-900">WellU</span>
              </div>
              <h3 className="font-display font-black text-[26px] sm:text-[28px] tracking-[-0.02em] text-slate-900 leading-tight">
                {mode === 'login' ? 'Log in to your account' : 'Create your WellU account'}
              </h3>
              <p className="mt-1.5 text-[14px] text-slate-500 leading-relaxed">
                {mode === 'login'
                  ? 'Your whole student day, one dashboard away.'
                  : 'Free to start. No credit card required. Cancel any time.'}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-6 p-1 bg-slate-100 rounded-2xl flex text-[13px] font-semibold">
              <button
                type="button"
                onClick={() => switchMode('login')}
                className={`flex-1 py-2 rounded-xl transition-all ${
                  mode === 'login'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => switchMode('signup')}
                className={`flex-1 py-2 rounded-xl transition-all ${
                  mode === 'signup'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Sign up
              </button>
            </div>

            {/* Error banner */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[13px] font-semibold">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {mode === 'signup' && (
                <Field
                  label="Full name"
                  id="wellu-name"
                  type="text"
                  value={name}
                  onChange={setName}
                  placeholder="Alex Student"
                  icon={<User className="w-4 h-4" />}
                  autoComplete="name"
                />
              )}

              <Field
                label="Email"
                id="wellu-email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="you@university.edu"
                icon={<Mail className="w-4 h-4" />}
                autoComplete="email"
              />

              <Field
                label="Password"
                id="wellu-password"
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={setPassword}
                placeholder="••••••••"
                icon={<Lock className="w-4 h-4" />}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                trailing={
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPw((s) => !s)}
                    className="p-1 text-slate-400 hover:text-slate-600"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />

              {mode === 'signup' && (
                <Field
                  label="Confirm password"
                  id="wellu-confirm"
                  type={showPw ? 'text' : 'password'}
                  value={confirm}
                  onChange={setConfirm}
                  placeholder="Re-enter password"
                  icon={<Lock className="w-4 h-4" />}
                  autoComplete="new-password"
                />
              )}

              <button
                type="submit"
                disabled={submitting}
                className={`relative w-full mt-1 py-3.5 rounded-2xl font-bold text-[15px] text-white shadow-sm transition-all
                  ${submitting ? 'opacity-80 cursor-wait' : 'active:scale-[0.985]'}
                `}
                style={{
                  background:
                    mode === 'signup'
                      ? 'linear-gradient(135deg, #4cad84 0%, #3a9a73 100%)'
                      : 'linear-gradient(135deg, #fbb43b 0%, #f0a420 100%)',
                }}
              >
                {submitting
                  ? 'Please wait…'
                  : mode === 'login'
                    ? 'Log in to WellU'
                    : 'Create account'}
              </button>

              {mode === 'login' && (
                <div className="flex items-center justify-between pt-0.5 text-[12.5px]">
                  <label className="flex items-center gap-2 text-slate-600 font-medium select-none">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-[#4cad84]" defaultChecked />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-[#4cad84] hover:underline font-semibold">
                    Forgot password?
                  </a>
                </div>
              )}

              {mode === 'signup' && (
                <p className="text-[12px] text-slate-500 text-center pt-1 leading-relaxed">
                  By signing up you agree to WellU's{' '}
                  <a href="#" className="text-slate-700 underline">Terms</a> and{' '}
                  <a href="#" className="text-slate-700 underline">Privacy Policy</a>.
                </p>
              )}
            </form>

            {/* Footer link */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-center text-[13.5px] text-slate-600">
              {mode === 'login' ? (
                <>
                  New to WellU?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode('signup')}
                    className="font-bold text-[#4cad84] hover:underline"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already a student?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode('login')}
                    className="font-bold text-[#4cad84] hover:underline"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- small reusable field --- */
interface FieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  autoComplete?: string;
}
const Field: React.FC<FieldProps> = ({ label, id, type, value, onChange, placeholder, icon, trailing, autoComplete }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1.5 text-[12.5px] font-bold text-slate-700">
        {label}
      </label>
      <div className={`flex items-center gap-2 w-full rounded-2xl border transition-all bg-white px-3.5 py-3
        border-slate-200 focus-within:border-[#4cad84] focus-within:ring-4 focus-within:ring-[#4cad84]/15
      `}>
        {icon && <span className="text-slate-400">{icon}</span>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="flex-1 bg-transparent outline-none text-[14px] text-slate-900 placeholder:text-slate-400"
        />
        {trailing}
      </div>
    </div>
  );
};
