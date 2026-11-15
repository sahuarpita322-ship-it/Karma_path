import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCoins } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#D9CCF2]/25 bg-[#F5F0FC] dark:bg-[#170D2C] py-14 px-4 sm:px-6 lg:px-8 text-[#716680] dark:text-[#D0C3E3] transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-3.5 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7955AE] to-[#4B2B7D] border border-[#D9CCF2]/40 flex items-center justify-center text-[#D9CCF2] font-cinzel font-black text-sm shadow">
              KP
            </div>
            <span className="font-cinzel font-black text-lg text-[#302342] dark:text-[#F8F4FF] tracking-wider">
              Karma-Path
            </span>
          </div>
          <p className="text-xs leading-relaxed font-serif italic text-[#716680] dark:text-[#D0C3E3]">
            Discover Odisha. Experience Its Soul. Explore hidden places, living traditions and stories beyond the ordinary.
          </p>
          <div className="text-[11px] text-[#7955AE] dark:text-[#D9CCF2] font-bold flex items-center gap-1.5 pt-1">
            <FaCoins className="text-xs text-[#BBA5E5]" /> Verified Cultural Karma Ecosystem
          </div>
        </div>

        {/* Explore Links */}
        <div className="space-y-2.5 text-xs">
          <h4 className="font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF] uppercase tracking-wider text-[11px]">
            Explore Odisha
          </h4>
          <ul className="space-y-2">
            <li><Link to="/destinations" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">50+ Destinations in 3D</Link></li>
            <li><Link to="/karma-for-good" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition font-bold text-[#7955AE] dark:text-[#D9CCF2]">Karma for Good (Social Impact)</Link></li>
            <li><Link to="/villages" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Discover My Village</Link></li>
            <li><Link to="/marketplace" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Local Hands Marketplace</Link></li>
          </ul>
        </div>

        {/* Cultural Vault & Safety */}
        <div className="space-y-2.5 text-xs">
          <h4 className="font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF] uppercase tracking-wider text-[11px]">
            Cultural Vault & Safety
          </h4>
          <ul className="space-y-2">
            <li><Link to="/museum" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Odisha Cultural Vault (12 Categories)</Link></li>
            <li><Link to="/archive" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Folk Songs & Dialects Archive</Link></li>
            <li><Link to="/safety" className="hover:text-rose-400 font-bold transition flex items-center gap-1.5"><FaShieldAlt className="text-rose-400" /> Safe Path Guardian</Link></li>
            <li><Link to="/chat" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">AI Cultural Companion</Link></li>
          </ul>
        </div>

        {/* Community & Governance */}
        <div className="space-y-2.5 text-xs">
          <h4 className="font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF] uppercase tracking-wider text-[11px]">
            Community & Stewardship
          </h4>
          <ul className="space-y-2">
            <li><Link to="/tasks" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">My Contributions (Good Deeds)</Link></li>
            <li><Link to="/dao" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Community Governance & Proposals</Link></li>
            <li><Link to="/quiz" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Student Heritage Quiz</Link></li>
            <li><Link to="/admin" className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] transition">Verification & Admin Portal</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-[#D9CCF2]/20 dark:border-[#D9CCF2]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#716680] dark:text-[#9C8FB3] gap-4">
        <div>
          © {new Date().getFullYear()} Karma-Path. Built with respect for Odisha's indigenous communities and artisan guilds.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] cursor-pointer">Ethical Tourism Charter</span>
          <span className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] cursor-pointer">Cultural Privacy</span>
          <span className="hover:text-[#7955AE] dark:hover:text-[#D9CCF2] cursor-pointer">Artisan Verification</span>
        </div>
      </div>
    </footer>
  );
}
