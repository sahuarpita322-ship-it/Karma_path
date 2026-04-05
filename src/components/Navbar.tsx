import { Link, NavLink } from 'react-router-dom';
import { FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { useStore } from '../context/store';
import LanguageSwitcher from './LanguageSwitcher';

export function Navbar() {
  const karmaBalance = useStore((s) => s.karmaBalance);
  const currentUser = useStore((s) => s.currentUser);
  const isDarkMode = useStore((s) => s.isDarkMode);
  const toggleDarkMode = useStore((s) => s.toggleDarkMode);

  return (
    <header className="bg-white/90 shadow-md backdrop-blur-lg border-b border-sand/40 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-bold text-forest text-2xl flex-shrink-0">Karma-Path</Link>
        <nav className="hidden xl:flex gap-4 items-center justify-center text-sm text-earth flex-1 px-4">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Dashboard</NavLink>
          <NavLink to="/tasks" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Tasks</NavLink>
          <NavLink to="/archive" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Cultural Archive</NavLink>
          <NavLink to="/museum" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Virtual Museum</NavLink>
          <NavLink to="/wallet" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Wallet</NavLink>
          <NavLink to="/quiz" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Quiz</NavLink>
          <NavLink to="/collections" className={({isActive}) => isActive ? 'font-semibold text-forest' : ''}>Collections</NavLink>
        </nav>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden lg:block"><LanguageSwitcher /></div>
          <button onClick={toggleDarkMode} className="text-earth text-xl hover:text-forest transition" title="Toggle Dark Mode">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <span className="hidden sm:inline-block rounded-full bg-forest text-white px-3 py-1 text-xs font-semibold">{karmaBalance} KT</span>
          <FaBell className="hidden sm:block text-earth text-xl hover:text-forest transition" />
          {currentUser ? (
            <Link to="/profile" className="flex items-center gap-2 bg-forest text-white px-3 py-1.5 rounded-full shadow-md hover:bg-emerald-700 transition">
              <img src={currentUser.avatar || 'https://via.placeholder.com/150'} className="h-7 w-7 rounded-full border border-white object-cover" alt="profile" />
              <span className="font-bold text-sm whitespace-nowrap">{currentUser.name}</span>
            </Link>
          ) : (
            <Link to="/signup" className="flex items-center gap-2 bg-forest text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-700 transition">
              <FaUserCircle className="text-xl" />
              <span className="font-bold text-sm whitespace-nowrap">Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
