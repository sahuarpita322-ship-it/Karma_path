import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  FaMoon, 
  FaSun, 
  FaShieldAlt, 
  FaCoins, 
  FaBars, 
  FaTimes, 
  FaCompass, 
  FaStore, 
  FaLandmark, 
  FaUserCircle,
  FaSignOutAlt,
  FaUserPlus,
  FaSignInAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaHeart,
  FaDesktop
} from 'react-icons/fa';
import { useStore } from '../context/store';
import LanguageSwitcher from './LanguageSwitcher';
import { DesktopAppModal } from './DesktopAppModal';

export function Navbar() {
  const karmaBalance = useStore((s) => s.karmaBalance);
  const currentUser = useStore((s) => s.currentUser);
  const logoutUser = useStore((s) => s.logoutUser);
  const isDarkMode = useStore((s) => s.isDarkMode);
  const toggleDarkMode = useStore((s) => s.toggleDarkMode);
  const activeTrip = useStore((s) => s.activeTrip);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    setUserDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#B9A5DF]/25 transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#7955AE] dark:bg-white border border-[#7955AE]/40 dark:border-white/50 flex items-center justify-center text-white dark:text-[#180B2B] shadow-[0_0_20px_rgba(121,85,174,0.35)] dark:shadow-[0_0_20px_rgba(255,255,255,0.45)] group-hover:scale-105 transition">
            <span className="font-cinzel font-black text-base tracking-wider">KP</span>
          </div>
          <div>
            <div className="font-cinzel font-black text-lg tracking-wider text-[#180B2B] dark:text-[#FFFFFF] group-hover:text-[#7955AE] dark:group-hover:text-[#D9CCF2] transition">
              Karma-Path
            </div>
            <div className="hidden lg:block text-[8px] tracking-[0.2em] uppercase font-bold text-[#503C6B] dark:text-[#B9A5DF] -mt-1">
              Odisha Living Heritage
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#302342] dark:text-[#F8F4FF]">
          <NavLink 
            to="/destinations" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaCompass className="text-[#B9A5DF]" />
            <span>Explore</span>
          </NavLink>

          <NavLink 
            to="/karma-for-good" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 font-bold ${
              isActive 
                ? 'bg-gradient-to-r from-[#7955AE] to-[#5C3691] text-white border border-[#B9A5DF]/50 shadow-[0_0_15px_rgba(121,85,174,0.45)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10 text-[#7955AE] dark:text-[#E8E3F0]'
            }`}
          >
            <FaHeart className="text-pink-400 text-xs" />
            <span>Karma for Good</span>
          </NavLink>

          <NavLink 
            to="/villages" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaLandmark className="text-[#B9A5DF]" />
            <span>Villages</span>
          </NavLink>

          <NavLink 
            to="/marketplace" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaStore className="text-[#B9A5DF]" />
            <span>Local Hands</span>
          </NavLink>

          <NavLink 
            to="/museum" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaBookOpen className="text-[#B9A5DF]" />
            <span>Cultural Vault</span>
          </NavLink>

          <NavLink 
            to="/safety" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 relative ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaShieldAlt className="text-rose-400" />
            <span>Safe Path</span>
            {activeTrip && (
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping absolute -top-0.5 -right-0.5"></span>
            )}
          </NavLink>

          <NavLink 
            to="/profile" 
            className={({isActive}) => `px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              isActive 
                ? 'bg-[#7955AE]/25 text-[#7955AE] dark:text-[#E8E3F0] font-bold border border-[#B9A5DF]/45 shadow-[0_0_15px_rgba(169,138,217,0.35)]' 
                : 'hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
            }`}
          >
            <FaUserCircle className="text-[#B9A5DF]" />
            <span>Profile</span>
          </NavLink>
        </nav>

        {/* Right Action Tools: Language, Theme Toggle & User Auth */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Offline Ready & Desktop App Trigger Pill */}
          <button
            onClick={() => setDesktopModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#7955AE]/15 text-[#7955AE] dark:text-[#FFFFFF] border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 hover:bg-[#7955AE]/25 transition shadow-sm"
            title="Karma-Path Offline Ready & Desktop App"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <FaDesktop className="text-xs" />
            <span>Desktop App</span>
          </button>

          {/* Language Selector */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          {/* Theme Toggle (Royal Lavender Light / Royal Midnight Dark) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-[#302342] dark:text-[#F8F4FF] hover:bg-black/5 dark:hover:bg-white/10 border border-[#B9A5DF]/40 transition shadow-sm"
            title={isDarkMode ? 'Switch to Royal Lavender Light Mode' : 'Switch to Royal Midnight Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun className="text-[#B9A5DF] text-sm" /> : <FaMoon className="text-[#7955AE] text-sm" />}
          </button>

          {/* User Status / Account Dropdown or Sign In */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-[#7955AE]/15 border border-[#B9A5DF]/40 hover:border-[#B9A5DF] text-[#302342] dark:text-[#F8F4FF] transition shadow"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7955AE] to-[#39205C] border border-[#B9A5DF]/50 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-xs font-bold text-[#302342] dark:text-[#F8F4FF] leading-none truncate max-w-[90px]">
                    {currentUser.name.split(' ')[0]}
                  </div>
                  <div className="text-[10px] text-[#7955AE] dark:text-[#B9A5DF] leading-none font-semibold mt-0.5">
                    {karmaBalance} KP
                  </div>
                </div>
              </button>

              {/* User Dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-card p-3 border border-[#B9A5DF]/40 shadow-2xl space-y-1.5 animate-fadeIn z-50 text-xs bg-[#F5F0FC]/95 dark:bg-[#170D2C]/95 backdrop-blur-2xl">
                  <div className="px-3 py-2 border-b border-[#B9A5DF]/20">
                    <div className="font-bold text-[#302342] dark:text-[#F8F4FF] truncate">{currentUser.name}</div>
                    <div className="text-[11px] text-[#716680] dark:text-[#D0C3E3] truncate">{currentUser.email}</div>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7955AE]/20 text-[#7955AE] dark:text-[#E8E3F0] border border-[#B9A5DF]/30">
                      <FaCoins className="text-[#B9A5DF]" /> {karmaBalance} Karma Points
                    </div>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#302342] dark:text-[#F8F4FF] hover:bg-[#7955AE]/15 font-medium transition"
                  >
                    <FaUserCircle className="text-[#B9A5DF]" />
                    <span>Guardian Profile</span>
                  </Link>

                  <Link
                    to="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#302342] dark:text-[#F8F4FF] hover:bg-[#7955AE]/15 font-medium transition"
                  >
                    <FaCompass className="text-[#B9A5DF]" />
                    <span>My Journey</span>
                  </Link>

                  <Link
                    to="/tasks"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#302342] dark:text-[#F8F4FF] hover:bg-[#7955AE]/15 font-medium transition"
                  >
                    <FaCoins className="text-[#B9A5DF]" />
                    <span>My Contributions</span>
                  </Link>

                  <div className="border-t border-[#B9A5DF]/20 mt-1.5 pt-1.5">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 p-2 rounded-xl text-rose-500 hover:bg-rose-500/10 text-xs font-bold transition"
                    >
                      <FaSignOutAlt />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                to="/signup?mode=login" 
                className="px-3.5 py-1.5 rounded-xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 text-[#180B2B] dark:text-[#FFFFFF] hover:bg-[#7955AE]/10 dark:hover:bg-white/10 font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
              >
                <FaSignInAlt className="text-[#7955AE] dark:text-[#B9A5DF]" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
              <Link 
                to="/signup?mode=signup" 
                className="px-4 py-1.5 rounded-xl text-xs font-black shadow-md transition flex items-center gap-1.5 bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC] dark:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              >
                <FaUserPlus />
                <span>Join (+50 KT)</span>
              </Link>
            </div>
          )}

          {/* Mobile Drawer Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-xl text-[#302342] dark:text-[#F8F4FF] hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes className="text-lg text-[#B9A5DF]" /> : <FaBars className="text-lg text-[#B9A5DF]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#B9A5DF]/30 bg-[#F5F0FC]/98 dark:bg-[#170D2C]/98 backdrop-blur-2xl p-4 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <Link to="/destinations" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaCompass className="text-[#B9A5DF]" /> Explore
            </Link>
            <Link to="/karma-for-good" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-purple-500/10 dark:bg-purple-900/20 flex items-center gap-2 text-[#7955AE] dark:text-[#D9CCF2] font-bold">
              <FaHeart className="text-pink-400" /> Karma for Good
            </Link>
            <Link to="/villages" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaLandmark className="text-[#B9A5DF]" /> Villages
            </Link>
            <Link to="/marketplace" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaStore className="text-[#B9A5DF]" /> Local Hands
            </Link>
            <Link to="/museum" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaBookOpen className="text-[#B9A5DF]" /> Cultural Vault
            </Link>
            <Link to="/safety" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-rose-950/10 text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <FaShieldAlt /> Safe Path
            </Link>
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaUserCircle className="text-[#B9A5DF]" /> Profile
            </Link>
            <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 flex items-center gap-2 text-[#302342] dark:text-[#F8F4FF]">
              <FaCoins className="text-[#B9A5DF]" /> My Journey
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setDesktopModalOpen(true);
              }}
              className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-between font-bold text-xs"
            >
              <div className="flex items-center gap-2">
                <FaDesktop /> Desktop App & Offline Mode
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>
          </div>

          <div className="pt-2 border-t border-[#B9A5DF]/20 flex items-center justify-between">
            <LanguageSwitcher />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 text-[#302342] dark:text-[#F8F4FF]"
            >
              {isDarkMode ? <FaSun className="text-[#B9A5DF]" /> : <FaMoon className="text-[#7955AE]" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Standalone Desktop App & Offline Info Modal */}
      <DesktopAppModal
        isOpen={desktopModalOpen}
        onClose={() => setDesktopModalOpen(false)}
      />
    </header>
  );
}
