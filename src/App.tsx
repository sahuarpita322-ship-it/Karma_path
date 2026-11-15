import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Destinations } from './pages/Destinations';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { Villages } from './pages/Villages';
import { VillageDetailPage } from './pages/VillageDetailPage';
import { Marketplace } from './pages/Marketplace';
import { SafePath } from './pages/SafePath';
import { Governance } from './pages/Governance';
import { Experiences } from './pages/Experiences';
import { Tasks } from './pages/Tasks';
import { TaskDetail } from './pages/TaskDetail';
import { Wallet } from './pages/Wallet';
import { Archive } from './pages/Archive';
import { Museum } from './pages/Museum';
import { Guide } from './pages/Guide';
import { Chat } from './pages/Chat';
import { Admin } from './pages/Admin';
import { SignUp } from './pages/SignUp';
import { Collections } from './pages/Collections';
import { Quiz } from './pages/Quiz';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { CulturalPlacePage } from './pages/CulturalPlacePage';
import { KarmaForGood } from './pages/KarmaForGood';
import { useStore } from './context/store';
import { FaShieldAlt, FaPlus, FaTimes, FaCamera, FaMicrophone, FaCoins } from 'react-icons/fa';
import './App.css';

function App() {
  const isDarkMode = useStore((s) => s.isDarkMode);
  const activeTrip = useStore((s) => s.activeTrip);
  const [quickActionOpen, setQuickActionOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-[#180B2B] text-[#FFFFFF]' 
          : 'bg-[#FFFFFF] text-[#180B2B]'
      }`}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetailPage />} />
          <Route path="/karma-for-good" element={<KarmaForGood />} />
          <Route path="/districts" element={<KarmaForGood />} />
          <Route path="/district/:id" element={<KarmaForGood />} />
          <Route path="/villages" element={<Villages />} />
          <Route path="/village/:id" element={<VillageDetailPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/safety" element={<SafePath />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/dao" element={<Governance />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/place/:id" element={<CulturalPlacePage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>

        <Footer />
        <BottomNav />

        {/* Discrete Royal Purple Quick Action & Safe Path Launcher */}
        <div className="fixed bottom-20 xl:bottom-6 right-5 z-40 flex flex-col items-end gap-2">
          {quickActionOpen && (
            <div className="glass-card rounded-2xl p-3 border border-[#D9CCF2]/30 shadow-2xl space-y-2 mb-1 w-52 animate-fadeIn text-xs font-semibold text-[#302342] dark:text-[#F8F4FF] bg-[#F5F0FC]/95 dark:bg-[#170D2C]/95 backdrop-blur-xl">
              <div className="text-[10px] text-[#716680] dark:text-[#D0C3E3] uppercase tracking-wider px-2 font-bold">Quick Actions</div>
              <Link
                to="/safety"
                onClick={() => setQuickActionOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-rose-950/15 text-rose-700 dark:text-rose-300 hover:bg-rose-950/25 transition"
              >
                <FaShieldAlt />
                <span>Safe Path Guardian</span>
              </Link>
              <Link
                to="/tasks"
                onClick={() => setQuickActionOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#7955AE]/15 transition"
              >
                <FaCamera className="text-[#A98AD9]" />
                <span>My Contributions</span>
              </Link>
              <Link
                to="/villages"
                onClick={() => setQuickActionOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#7955AE]/15 transition"
              >
                <FaCoins className="text-[#A98AD9]" />
                <span>Add Village Story</span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* Elegant SOS Button */}
            <Link
              to="/safety"
              className="px-3.5 py-2 rounded-full bg-[#211238] text-[#F8F4FF] border border-[#D9CCF2]/30 shadow-lg hover:border-[#D9CCF2] transition-all flex items-center gap-1.5 text-xs font-bold"
              title="Safe Path Guardian"
            >
              <FaShieldAlt className="text-rose-400 text-xs" />
              <span className="hidden sm:inline">Safe Path</span>
            </Link>

            {/* Quick Action Toggle Button */}
            <button
              onClick={() => setQuickActionOpen(!quickActionOpen)}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7955AE] to-[#613A9E] text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center text-sm font-bold border border-[#D9CCF2]/30"
              title="Quick Menu"
            >
              {quickActionOpen ? <FaTimes /> : <FaPlus />}
            </button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
