import { useEffect, useMemo, useState } from 'react';
import { useStore } from '../context/store';
import { TaskCard } from '../components/TaskCard';
import { MapView } from '../components/MapView';
import { AIStoryPanel } from '../components/AIStoryPanel';
import { tourismPlaces } from '../data/mock';
import { useNavigate } from 'react-router-dom';
import { FaCoins, FaTasks, FaMapMarkerAlt, FaRobot, FaMicrophone, FaPlay } from 'react-icons/fa';

export function Dashboard() {
  const { karmaBalance, dailyImpact, completedTasks, tasks, activities, currentUser, taskParticipants } = useStore();
  const [guideSite, setGuideSite] = useState('Konark Sun Temple');
  const [language, setLanguage] = useState<'English' | 'Hindi' | 'Odia'>('English');
  const [voiceOn, setVoiceOn] = useState(false);
  const [taskInstruction, setTaskInstruction] = useState('Select a task to hear instructions.');
  const [taskLanguage, setTaskLanguage] = useState<'English' | 'Hindi' | 'Odia'>('English');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const navigate = useNavigate();

  const speakTask = (task: any) => {
    let text = `Task ${task.title}: ${task.description} in ${task.location}. Estimated time ${task.time}. Reward ${task.reward} tokens.`;
    if (taskLanguage === 'Hindi') {
      text = `टास्क ${task.title}: ${task.location} में। अनुमानित समय ${task.time}। इनाम ${task.reward} टोकन।`;
    } else if (taskLanguage === 'Odia') {
      text = `କାର୍ଯ୍ୟ ${task.title}: ${task.location} ରେ। ଆନୁମାନିକ ସମୟ ${task.time}। ପୁରସ୍କାର ${task.reward} ଟୋକେନ୍।`;
    }

    setTaskInstruction(text);
    
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = taskLanguage === 'Hindi' ? 'hi-IN' : taskLanguage === 'Odia' ? 'or-IN' : 'en-US';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error watching position", error);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  const markers = useMemo(() => {
    // A master list of famous historical sites, temples, mountains, and beaches in Odisha
    const ALL_MARKERS = [
      { id: 't1', lat: 20.237, lng: 85.833, label: 'Lingaraj Temple', type: 'Temple' },
      { id: 't2', lat: 19.882, lng: 86.094, label: 'Konark Sun Temple', type: 'Temple' },
      { id: 't3', lat: 19.804, lng: 85.817, label: 'Jagannath Temple, Puri', type: 'Temple' },
      { id: 'b1', lat: 19.798, lng: 85.824, label: 'Puri Beach', type: 'Beach' },
      { id: 'h1', lat: 20.259, lng: 85.784, label: 'Khandagiri & Udayagiri Caves', type: 'Historic' },
      { id: 't4', lat: 19.492, lng: 84.819, label: 'Taratarini Temple', type: 'Temple' },
      { id: 't5', lat: 19.378, lng: 84.502, label: 'Balakumari Temple', type: 'Temple' },
      { id: 'b2', lat: 19.263, lng: 84.908, label: 'Gopalpur Beach', type: 'Beach' },
      { id: 'b3', lat: 19.162, lng: 84.783, label: 'Dhabaleswar Beach', type: 'Beach' },
      { id: 'm1', lat: 18.663, lng: 82.981, label: 'Deomali Mountain', type: 'Mountain' },
      { id: 'm2', lat: 18.966, lng: 84.364, label: 'Mahendragiri Mountain', type: 'Mountain' },
      { id: 'm3', lat: 21.666, lng: 85.883, label: 'Malayagiri Mountain', type: 'Mountain' }
    ];

    if (userLocation) {
      // Filter places that are within roughly ~70-80km of the user's exact coordinates
      const nearby = ALL_MARKERS.filter(m => 
        Math.abs(m.lat - userLocation.lat) < 0.8 && Math.abs(m.lng - userLocation.lng) < 0.8
      );

      // If the user's GPS is far away from Odisha, dynamically place the requested ones near them anyway
      if (nearby.length === 0) {
        return [
          { id: 'd1', lat: userLocation.lat + 0.015, lng: userLocation.lng + 0.01, label: 'Taratarini Temple', type: 'Temple' },
          { id: 'd2', lat: userLocation.lat - 0.01, lng: userLocation.lng + 0.02, label: 'Balakumari Temple', type: 'Temple' },
          { id: 'd3', lat: userLocation.lat + 0.005, lng: userLocation.lng - 0.015, label: 'Gopalpur Beach', type: 'Beach' },
          { id: 'd4', lat: userLocation.lat - 0.012, lng: userLocation.lng - 0.008, label: 'Mahendragiri Mountain', type: 'Mountain' },
          { id: 'd5', lat: userLocation.lat + 0.02, lng: userLocation.lng + 0.02, label: 'Historical Fort', type: 'Historic' }
        ];
      }
      
      return nearby;
    }
    return ALL_MARKERS;
  }, [userLocation]);

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12 overflow-hidden">
      {/* Full-screen background image with light overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.flamingotravels.co.in/_next/image?url=https:%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2Flakshadweep%20Island.jpg&w=1920&q=90')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <section className="mx-auto max-w-7xl relative z-10">
        {/* Welcome Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent mb-2">
            Welcome to Karma-Path
          </h1>
          <p className="text-emerald-700/70 text-lg">Your journey to meaningful eco-tourism begins here</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Karma Overview Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-white/80 to-forest/5 backdrop-blur-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-forest to-emerald-600 text-white shadow-lg">
                  <FaCoins className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-forest">Karma Overview</h2>
              </div>
              <p className="text-earth/70 mb-2">Your token balance</p>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-forest to-emerald-600 bg-clip-text text-transparent mb-3">
                {karmaBalance} KT
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-earth/70">Daily Impact</span>
                  <span className="text-sm font-semibold text-forest">{dailyImpact}%</span>
                </div>
                <div className="w-full bg-sand/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-forest to-emerald-600 h-2 rounded-full transition-all duration-500" style={{ width: `${dailyImpact}%` }}></div>
                </div>
                <p className="text-sm text-earth/70">Tasks completed: <span className="font-semibold text-forest">{completedTasks}</span></p>
                {currentUser && (
                  <p className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">
                    Logged in as {currentUser.name} • Total earned: {currentUser.totalEarned} KT
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tasks Preview */}
          <div className="lg:col-span-2 rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg">
                <FaTasks className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-forest">Nearby Eco Tasks</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {tasks.slice(0, 2).map((task) => (
                <div key={task.id} className="transform hover:scale-105 transition-transform duration-300">
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token System Explanation */}
        <div className="mb-8 rounded-3xl border border-white/50 bg-gradient-to-r from-white/60 to-forest/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg">
              <FaCoins className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-forest">Karma Token System</h3>
          </div>
          <p className="text-earth/70 mb-4">Each verified task completion grants tokens. Higher impact tasks earn bonus tokens that unlock levels and special experiences.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white/50 rounded-2xl p-4 border border-white/30">
              <div className="text-forest font-semibold mb-2">Complete Tasks</div>
              <div className="text-sm text-earth/70">Earn base rewards for verified completions</div>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 border border-white/30">
              <div className="text-forest font-semibold mb-2">Upload Proof</div>
              <div className="text-sm text-earth/70">AI validation + community verification</div>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 border border-white/30">
              <div className="text-forest font-semibold mb-2">Bonus Rewards</div>
              <div className="text-sm text-earth/70">Quizzes and heritage missions give extra tokens</div>
            </div>
          </div>
        </div>

        {/* Task Movement & Voice */}
        <div className="mb-8 rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg">
                <FaMicrophone className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-forest">Real-time Task Updates</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-earth/80">Voice Language:</span>
              <select 
                value={taskLanguage} 
                onChange={(e) => setTaskLanguage(e.target.value as any)}
                className="rounded-xl border border-sand bg-white px-3 py-1.5 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी (Hindi)</option>
                <option value="Odia">ଓଡ଼ିଆ (Odia)</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="bg-gradient-to-r from-white/50 to-sand/30 rounded-2xl p-4 border border-white/30 hover:bg-white/70 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-forest">{task.title}</div>
                    <div className="text-sm text-earth/70">{task.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-earth/70">Participants</div>
                    <div className="font-semibold text-forest">{(taskParticipants[task.id] ?? []).length}</div>
                  </div>
                </div>
                <button
                  onClick={() => speakTask(task)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-forest to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FaPlay className="text-xs" />
                  Voice Instruction
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-sand/30 rounded-xl border border-sand/50">
            <p className="text-sm text-earth/70">
              <span className="font-medium">Current instruction:</span> {taskInstruction}
            </p>
          </div>
        </div>

        {/* Map and AI Guide */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-forest">Interactive Map</h3>
            </div>
            <MapView markers={markers} userLocation={userLocation || undefined} />
          </div>

          <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg">
                <FaRobot className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-forest">AI Cultural Guide</h3>
            </div>
            <AIStoryPanel
              site={guideSite}
              language={language}
              voiceOn={voiceOn}
              onLanguageChange={setLanguage}
              onToggleVoice={() => setVoiceOn(!voiceOn)}
            />
            <div className="mt-4">
              <label className="block text-sm font-medium text-earth/80 mb-2">Select a Historical or Tourist Place:</label>
              <select 
                value={guideSite}
                onChange={(e) => {
                  setGuideSite(e.target.value);
                  if (voiceOn) setVoiceOn(false); // Stop voice when changing site
                }}
                className="w-full rounded-xl border border-sand bg-white/80 backdrop-blur-sm p-3 text-forest focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all duration-300 shadow-inner"
              >
                {tourismPlaces.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.state})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                <FaTasks className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-forest">Recent Activity Feed</h3>
            </div>
            <button
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-forest to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Open Chatbot Guide
            </button>
          </div>
          <div className="space-y-4">
            {activities.slice(0, 3).map((act) => (
              <div key={act.id} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/50 to-sand/20 border border-white/30 hover:bg-white/70 transition-colors duration-300">
                <img className="h-12 w-12 rounded-full object-cover shadow-lg" src={act.avatar} alt={act.name} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-forest">{act.name}</span>
                    <span className="text-xs text-earth/60">{act.date}</span>
                  </div>
                  <p className="text-earth/80 text-sm">{act.description} at {act.location}. Earned {act.tokens} KT.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
