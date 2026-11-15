import { useStore } from '../context/store';

export function Collections() {
  const currentUser = useStore((s) => s.currentUser);

  if (!currentUser) {
    return (
      <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.edVXRXmisOpAeRJNzy959wHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3')` }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        <div className="mx-auto max-w-md rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
          <h1 className="text-2xl font-bold text-forest">My Collection</h1>
          <p className="text-earth mt-2">Please login to view your contributions and achievements.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.edVXRXmisOpAeRJNzy959wHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <section className="mx-auto max-w-6xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
        <h1 className="text-3xl font-bold text-forest">My Collection</h1>
        <p className="text-earth mt-2">Track your task completions, media uploads and Karma earnings.</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Token balance<br/><strong>{currentUser.tokenBalance}</strong></div>
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Total earned<br/><strong>{currentUser.totalEarned}</strong></div>
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Tasks done<br/><strong>{currentUser.tasksDone}</strong></div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-forest">Activity History</h2>
          <div className="mt-2 space-y-2">
            {currentUser.history.map((h) => (
              <div key={`${h.taskId}-${h.date}`} className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-3">
                <p className="font-semibold text-forest">{h.taskTitle}</p>
                <p className="text-xs text-gray-600">{h.date} · Earned {h.tokens} KT</p>
                {h.proof && <img src={h.proof} alt="proof" className="mt-2 h-28 w-full object-cover rounded" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
