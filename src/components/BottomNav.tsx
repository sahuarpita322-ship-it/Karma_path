import { Link, useLocation } from 'react-router-dom';
import { FaCompass, FaLandmark, FaMap, FaWallet, FaUserCircle } from 'react-icons/fa';

const items = [
  { to: '/dashboard', icon: <FaCompass />, label: 'Home' },
  { to: '/tasks', icon: <FaLandmark />, label: 'Tasks' },
  { to: '/museum', icon: <FaMap />, label: 'Museum' },
  { to: '/wallet', icon: <FaWallet />, label: 'Wallet' },
  { to: '/profile', icon: <FaUserCircle />, label: 'Profile' }
];

export function BottomNav() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-sand bg-white/95 p-2 shadow-inner md:hidden">
      <div className="flex justify-between">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className={`flex w-full flex-col items-center text-xs ${location.pathname === item.to ? 'text-forest' : 'text-earth'}`}>
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
