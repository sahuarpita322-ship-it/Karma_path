import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
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
import { useStore } from './context/store';
import './App.css';

function App() {
  const isDarkMode = useStore((s) => s.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-slate-800'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
        <button onClick={() => window.alert('Quick task action, coming soon!')} className="fixed bottom-20 right-5 z-50 rounded-full bg-forest p-4 text-white shadow-xl hover:bg-emerald-800">
          ＋
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
