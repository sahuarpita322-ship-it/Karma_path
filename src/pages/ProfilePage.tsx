import { useStore } from '../context/store';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserEdit, FaHistory, FaTrophy, FaCoins, FaMedal, FaCog, FaSignOutAlt } from 'react-icons/fa';

export function ProfilePage() {
  const { currentUser, logoutUser, users } = useStore();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <main className="min-h-screen relative p-8 pt-32 text-center pb-12">
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/shimla.jpg')` }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-forest">Please Log In</h1>
          <p className="text-earth mt-4 font-semibold">You need to be logged in to view your profile.</p>
          <Link to="/signup" className="mt-6 inline-block bg-forest text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-700 transition shadow-lg">
            Login / Register
          </Link>
        </div>
      </main>
    );
  }

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  // Get top users for the leaderboard. 
  // We'll pad it with some mock players if the app only has your account so it looks populated!
  let leaderboard = [...users];
  if (leaderboard.length < 3) {
    leaderboard.push(
      { id: 'mock1', name: 'Rohan Das', avatar: 'https://i.pravatar.cc/60?img=33', totalEarned: 1250 } as any,
      { id: 'mock2', name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/60?img=45', totalEarned: 980 } as any,
      { id: 'mock3', name: 'Amit Kumar', avatar: 'https://i.pravatar.cc/60?img=11', totalEarned: 450 } as any
    );
  }
  leaderboard = leaderboard.sort((a, b) => b.totalEarned - a.totalEarned).slice(0, 10);

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/shimla.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img src={currentUser.avatar} alt="Profile" className="h-32 w-32 rounded-full border-4 border-white shadow-xl object-cover" />
            <button className="absolute bottom-0 right-0 bg-forest text-white p-2 rounded-full hover:bg-emerald-700 transition shadow-md">
              <FaUserEdit />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-forest">{currentUser.name}</h1>
            <p className="text-earth mt-1">{currentUser.email}</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full shadow-sm">
                <FaCoins />
                <strong>{currentUser.tokenBalance}</strong> KT Balance
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full shadow-sm">
                <FaTrophy />
                <strong>{currentUser.totalEarned}</strong> KT Total Earned
              </div>
              <div className="flex items-center gap-2 bg-sky-50 text-sky-800 border border-sky-200 px-3 py-1 rounded-full shadow-sm">
                <strong>{currentUser.tasksDone}</strong> Tasks Completed
              </div>
            </div>
          </div>
          <div className="md:ml-auto flex flex-col gap-2 w-full md:w-auto">
            <Link to="/settings" className="flex items-center justify-center gap-2 bg-white/60 text-forest px-6 py-2 rounded-xl font-bold hover:bg-white/80 transition shadow-sm border border-white/50">
              <FaCog /> Settings
            </Link>
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-200 px-6 py-2 rounded-xl font-bold hover:bg-red-100 transition shadow-md">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-forest flex items-center gap-3"><FaHistory /> Activity History</h2>
            <div className="mt-4 space-y-4 max-h-96 overflow-y-auto pr-2">
              {currentUser.history.length > 0 ? (
                currentUser.history.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 border-l-4 border-l-forest shadow-sm">
                    <div>
                      <p className="font-semibold text-earth">{item.taskTitle}</p>
                      <p className="text-xs text-gray-500">Completed on {item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-forest">+{item.tokens} KT</p>
                      {item.proof && <a href={item.proof} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:underline">View Proof</a>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-earth text-center py-8">No activities yet. Go complete some tasks!</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-forest flex items-center gap-3"><FaMedal /> Global Leaderboard</h2>
            <div className="mt-4 space-y-3 max-h-96 overflow-y-auto pr-2">
              {leaderboard.map((user, index) => (
                <div key={user.id} className={`flex items-center gap-3 p-3 rounded-2xl border backdrop-blur-md shadow-sm ${user.id === currentUser.id ? 'border-forest bg-forest/10' : 'border-white/50 bg-white/60'}`}>
                  <span className={`font-bold text-lg w-6 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-earth'}`}>{index + 1}.</span>
                  <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-white shadow-sm object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-forest">{user.name} {user.id === currentUser.id && <span className="text-xs font-normal text-emerald-600">(You)</span>}</p>
                  </div>
                  <div className="text-right font-bold text-emerald-600">
                    {user.totalEarned} <span className="text-xs font-normal text-earth">KT</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}