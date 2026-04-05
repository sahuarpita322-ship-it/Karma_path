import { useState } from 'react';
import { useStore } from '../context/store';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaGift } from 'react-icons/fa';

export function SignUp() {
  const registerUser = useStore((s) => s.registerUser);
  const loginUser = useStore((s) => s.loginUser);
  const addKarma = useStore((s) => s.addKarma);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState<'signup'|'login'>('signup');
  const [isGmailLogin, setIsGmailLogin] = useState(false);
  const navigate = useNavigate();

  const handleGmailLogin = async () => {
    setIsGmailLogin(true);
    // Simulate Gmail OAuth flow
    setTimeout(() => {
      const mockGmailUser = {
        name: 'Arpita Sahu',
        email: 'arpita.sahu@gmail.com'
      };

      // Check if this is a first-time user
      const existingUsers = useStore.getState().users || [];
      const userExists = existingUsers.some((u: any) => u.email === mockGmailUser.email);

      // Register/login the user
      registerUser(mockGmailUser.name, mockGmailUser.email);

      // Give 250kt bonus to new users
      if (!userExists) {
        addKarma(250);
        alert('🎉 Congratulations! As a new user, you\'ve received 250 Karma Tokens bonus!');
      }

      navigate('/dashboard');
      setIsGmailLogin(false);
    }, 2000);
  };

  const submit = () => {
    if (mode === 'signup') {
      if (!name || !email) return;
      
      const existingUsers = useStore.getState().users || [];
      const userExists = existingUsers.some((u: any) => u.email === email);
      
      registerUser(name, email);
      if (!userExists) {
        addKarma(250);
        alert('🎉 Congratulations! As a new user, you\'ve received 250 Karma Tokens bonus!');
      }
      setMode('login');
    } else {
      loginUser(email);
      navigate('/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sand via-orange-50 to-amber-50 p-4 pt-24 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-forest/10 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto w-full max-w-md relative z-10">
        <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-forest to-emerald-600 bg-clip-text text-transparent mb-2">
              {mode === 'signup' ? 'Join Karma-Path' : 'Welcome Back'}
            </h1>
            <p className="text-earth/70">
              {mode === 'signup' ? 'Start your eco-tourism journey' : 'Continue your impact journey'}
            </p>
          </div>

          {/* Gmail Login Button */}
          <div className="mb-6">
            <button
              onClick={handleGmailLogin}
              disabled={isGmailLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-red-400 text-gray-700 font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGmailLogin ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-500"></div>
              ) : (
                <FaGoogle className="text-red-500 text-lg" />
              )}
              <span>{isGmailLogin ? 'Connecting...' : 'Continue with Gmail'}</span>
            </button>

            {mode === 'signup' && (
              <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                  <FaGift className="text-green-600" />
                  <span>New users get 250 Karma Tokens bonus!</span>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Traditional Login Form */}
          <div className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-earth/70 mb-2">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm p-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all duration-300"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-earth/70 mb-2">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className="w-full rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm p-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all duration-300"
              />
            </div>

            <button
              onClick={submit}
              className="w-full bg-gradient-to-r from-forest to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {mode === 'signup' ? 'Create Account' : 'Login'}
            </button>
          </div>

          {/* Toggle between signup/login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-earth/70">
              {mode === 'signup' ? 'Already have an account?' : 'Need an account?'}
              <button
                onClick={() => setMode((m) => m === 'signup' ? 'login' : 'signup')}
                className="ml-2 text-forest font-semibold hover:text-emerald-600 transition-colors duration-300"
              >
                {mode === 'signup' ? 'Login' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
