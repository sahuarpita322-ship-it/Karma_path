import { useState, useEffect } from 'react';
import { useStore } from '../context/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  FaUserCircle, 
  FaLock, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCoins, 
  FaCheckCircle, 
  FaUserPlus, 
  FaSignInAlt
} from 'react-icons/fa';

export function SignUp() {
  const registerUser = useStore((s) => s.registerUser);
  const loginUser = useStore((s) => s.loginUser);
  const users = useStore((s) => s.users);
  const currentUser = useStore((s) => s.currentUser);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [mode, setMode] = useState<'login' | 'signup'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('Khordha (Bhubaneswar)');
  const [interests, setInterests] = useState<string[]>(['Heritage', 'Pattachitra Art', 'Eco-tourism']);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    if (urlMode === 'login' || urlMode === 'signup') {
      setMode(urlMode);
    }
  }, [searchParams]);

  // If already logged in, navigate to profile
  useEffect(() => {
    if (currentUser) {
      navigate('/profile');
    }
  }, [currentUser, navigate]);

  const odishaDistricts = [
    'Khordha (Bhubaneswar)', 'Puri', 'Cuttack', 'Sambalpur', 'Bargarh', 
    'Koraput', 'Mayurbhanj (Similipal)', 'Kandhamal (Daringbadi)', 'Ganjam', 
    'Balasore', 'Angul', 'Dhenkanal', 'Sundargarh', 'Rayagada', 'Kalahandi'
  ];

  const interestOptions = [
    'Heritage Architecture', 'Pattachitra Art', 'Ikat Handloom', 'Eco-tourism', 
    'Tribal Culture', 'Folk Music & Vault', 'Beach Cleanup', 'Local Odia Cuisine', 'Stone Carving'
  ];

  const handleInterestToggle = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (mode === 'signup') {
      if (!name.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMsg('Please provide a valid email address.');
        return;
      }
      if (!password || password.length < 4) {
        setErrorMsg('Password should be at least 4 characters.');
        return;
      }

      // Check if user already exists
      const existing = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
      if (existing) {
        setErrorMsg('An account with this email already exists. Please Sign In.');
        setMode('login');
        return;
      }

      registerUser(name.trim(), email.trim().toLowerCase(), password, district, interests);
      setSuccessMsg('Account created successfully! Welcome to Karma-Path.');
      setTimeout(() => {
        navigate('/profile');
      }, 600);
    } else {
      if (!email.trim()) {
        setErrorMsg('Please enter your email.');
        return;
      }

      const found = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
      if (!found) {
        setErrorMsg('No account found with this email. Please Create an Account first!');
        return;
      }

      loginUser(email.trim().toLowerCase());
      setSuccessMsg(`Welcome back, ${found.name}! Redirecting to your profile...`);
      setTimeout(() => {
        navigate('/profile');
      }, 600);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 flex items-center justify-center max-w-xl mx-auto">
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 w-full shadow-2xl relative bg-white/95 dark:bg-[#200D38]/90 backdrop-blur-2xl">
        
        {/* Header Icon & Tagline */}
        <div className="text-center mb-6 space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7955AE] to-[#39205C] dark:from-white dark:to-[#D9CCF2] flex items-center justify-center text-white dark:text-[#180B2B] text-2xl mx-auto shadow-lg shadow-[#7955AE]/30 dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            {mode === 'signup' ? <FaUserPlus /> : <FaSignInAlt />}
          </div>
          <h1 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white">
            {mode === 'signup' ? 'Create Your Account' : 'Sign In to Karma-Path'}
          </h1>
          <p className="text-xs sm:text-sm text-[#503C6B] dark:text-[#E8E3F0]">
            {mode === 'signup' 
              ? 'Join as a responsible explorer, support artisans & earn 50 Karma Tokens' 
              : 'Access your personalized profile, deeds history & Karma Wallet'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-stone-100 dark:bg-[#180B2B] p-1 rounded-2xl mb-6 text-xs font-bold border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
          <button
            type="button"
            onClick={() => { setMode('signup'); setErrorMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
              mode === 'signup'
                ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-md font-black'
                : 'text-[#716680] dark:text-[#D0C3E3] hover:text-[#180B2B] dark:hover:text-white'
            }`}
          >
            <FaUserPlus /> Create Account
          </button>
          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-md font-black'
                : 'text-[#716680] dark:text-[#D0C3E3] hover:text-[#180B2B] dark:hover:text-white'
            }`}
          >
            <FaSignInAlt /> Sign In
          </button>
        </div>

        {/* Welcome Bonus Callout (for Sign Up) */}
        {mode === 'signup' && (
          <div className="p-3.5 rounded-2xl bg-[#7955AE]/10 dark:bg-[#B9A5DF]/15 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 mb-6 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7955AE] dark:bg-white text-white dark:text-[#180B2B] flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
              <FaCoins className="text-yellow-300 dark:text-[#7955AE] animate-bounce" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#7955AE] dark:text-white">
                50 Welcome Karma Tokens (KT)
              </div>
              <div className="text-[11px] text-[#503C6B] dark:text-[#E8E3F0]">
                Instantly credited to your wallet to start supporting rural Odisha artisans!
              </div>
            </div>
          </div>
        )}

        {/* Error / Success Notifications */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-600/15 border border-rose-500/30 text-rose-500 text-xs font-bold mb-4">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="p-3 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-500 text-xs font-bold mb-4 flex items-center gap-2">
            <FaCheckCircle /> {successMsg}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-[#180B2B] dark:text-[#E8E3F0] mb-1">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g., Soumya Ranjan Dash"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/70 dark:bg-[#180B2B]/70 text-[#180B2B] dark:text-white text-xs focus:ring-2 focus:ring-[#7955AE] dark:focus:ring-white outline-none"
                />
                <FaUserCircle className="absolute left-3 top-3 text-[#7955AE] dark:text-[#B9A5DF]" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#180B2B] dark:text-[#E8E3F0] mb-1">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/70 dark:bg-[#180B2B]/70 text-[#180B2B] dark:text-white text-xs focus:ring-2 focus:ring-[#7955AE] dark:focus:ring-white outline-none"
              />
              <FaEnvelope className="absolute left-3 top-3 text-[#7955AE] dark:text-[#B9A5DF]" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#180B2B] dark:text-[#E8E3F0] mb-1">
              Password *
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/70 dark:bg-[#180B2B]/70 text-[#180B2B] dark:text-white text-xs focus:ring-2 focus:ring-[#7955AE] dark:focus:ring-white outline-none"
              />
              <FaLock className="absolute left-3 top-3 text-[#7955AE] dark:text-[#B9A5DF]" />
            </div>
          </div>

          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-bold text-[#180B2B] dark:text-[#E8E3F0] mb-1">
                  Home District (Odisha)
                </label>
                <div className="relative">
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/70 dark:bg-[#180B2B]/70 text-[#180B2B] dark:text-white text-xs focus:ring-2 focus:ring-[#7955AE] dark:focus:ring-white outline-none appearance-none"
                  >
                    {odishaDistricts.map((d) => (
                      <option key={d} value={d} className="bg-white dark:bg-[#180B2B] text-[#180B2B] dark:text-white">{d}</option>
                    ))}
                  </select>
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-[#7955AE] dark:text-[#B9A5DF]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#180B2B] dark:text-[#E8E3F0] mb-1.5">
                  Select Your Cultural Interests
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {interestOptions.map((opt) => {
                    const isSelected = interests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInterestToggle(opt)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition font-medium ${
                          isSelected
                            ? 'bg-[#7955AE] text-white border-[#7955AE] dark:bg-white dark:text-[#180B2B] dark:border-white shadow-sm font-bold'
                            : 'bg-stone-100 dark:bg-[#180B2B] text-[#503C6B] dark:text-[#D0C3E3] border-[#7955AE]/20 dark:border-[#B9A5DF]/30 hover:border-[#7955AE]'
                        }`}
                      >
                        {isSelected && '✓ '} {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl font-black text-sm shadow-xl transition transform hover:scale-[1.01] mt-6 bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC] dark:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            {mode === 'signup' ? 'Create Account & Claim 50 KT' : 'Sign In to My Profile'}
          </button>
        </form>

        {/* Footer Toggle Text */}
        <div className="text-center mt-6 text-xs text-[#503C6B] dark:text-[#D0C3E3]">
          {mode === 'signup' ? (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => { setMode('login'); setErrorMsg(''); }}
                className="text-[#7955AE] dark:text-white font-bold hover:underline"
              >
                Sign In here
              </button>
            </p>
          ) : (
            <p>
              New to Karma-Path?{' '}
              <button
                type="button"
                onClick={() => { setMode('signup'); setErrorMsg(''); }}
                className="text-[#7955AE] dark:text-white font-bold hover:underline"
              >
                Create an account
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
