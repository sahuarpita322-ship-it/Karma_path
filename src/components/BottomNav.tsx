import { Link, useLocation } from 'react-router-dom';
import { FaCompass, FaLandmark, FaStore, FaShieldAlt, FaUserCircle, FaBookOpen } from 'react-icons/fa';

const items = [
  { to: '/destinations', icon: <FaCompass />, label: 'Explore' },
  { to: '/villages', icon: <FaLandmark />, label: 'Villages' },
  { to: '/marketplace', icon: <FaStore />, label: 'Local Hands' },
  { to: '/museum', icon: <FaBookOpen />, label: 'Cultural Vault' },
  { to: '/safety', icon: <FaShieldAlt className="text-rose-400" />, label: 'Safe Path' },
  { to: '/profile', icon: <FaUserCircle />, label: 'Profile' }
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#D9CCF2]/25 bg-[#F5F0FC]/95 dark:bg-[#170D2C]/95 backdrop-blur-2xl py-1.5 px-2 shadow-2xl lg:hidden">
      <div className="flex justify-around items-center">
        {items.map((item) => {
          const isActive = location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center text-[10px] font-bold transition px-2 py-1 rounded-xl ${
                isActive
                  ? 'text-[#7955AE] dark:text-[#D9CCF2] bg-[#7955AE]/15 border border-[#D9CCF2]/30 shadow-sm'
                  : 'text-[#716680] dark:text-[#D0C3E3] hover:text-[#7955AE] dark:hover:text-[#D9CCF2]'
              }`}
            >
              <span className="text-base mb-0.5">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
