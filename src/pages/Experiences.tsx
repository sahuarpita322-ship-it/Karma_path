import { useState } from 'react';
import { 
  FaHandsHelping, 
  FaCoins, 
  FaLock, 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaUsers, 
  FaClock, 
  FaShieldAlt, 
  FaTimes
} from 'react-icons/fa';
import { useStore, CulturalExperience } from '../context/store';

export function Experiences() {
  const experiences = useStore((s) => s.experiences);
  const experienceBookings = useStore((s) => s.experienceBookings);
  const bookExperience = useStore((s) => s.bookExperience);
  const currentUser = useStore((s) => s.currentUser);
  const karmaRewardConfig = useStore((s) => s.karmaRewardConfig);

  const [selectedExperience, setSelectedExperience] = useState<CulturalExperience | null>(null);
  const [bookingDate, setBookingDate] = useState('2026-12-10');
  const [guestCount, setGuestCount] = useState(1);
  const [pledgeAgreed, setPledgeAgreed] = useState(false);
  const [bookingMessage, setBookingMessage] = useState<{ text: string; success: boolean } | null>(null);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExperience) return;
    if (!pledgeAgreed) {
      alert('Please agree to the Responsible Tourism Guidelines pledge before confirming.');
      return;
    }

    const res = bookExperience(selectedExperience.id, bookingDate, guestCount);
    setBookingMessage({ text: res.message, success: res.success });
    if (res.success) {
      setTimeout(() => {
        setBookingMessage(null);
        setSelectedExperience(null);
        setPledgeAgreed(false);
      }, 2500);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-8 border border-blue-500/25 bg-gradient-to-r from-blue-950/40 via-teal-950/25 to-stone-900/40 backdrop-blur-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
            <FaHandsHelping /> UNLOCK HIDDEN ODISHA
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Community-Approved <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Cultural Immersions</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Exclusive masterclasses, indigenous food feasts, guided village walks, and eco-patrols. Unlocked through verified Karma scores and Gram Sabha community consent.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
              <FaCoins /> Your Karma Balance: {currentUser?.tokenBalance ?? 0} KP
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <FaCheckCircle /> 100% Community Hosted
            </span>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Cultural Privacy Notice */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 mb-8 flex items-center gap-3">
        <FaShieldAlt className="text-xl flex-shrink-0 text-amber-500" />
        <div>
          <strong>Responsible Tourism Protocol:</strong> We never expose private tribal festivals, sacred groves, or restricted trekking routes without explicit community authorization. All experiences follow fair-trade hospitality.
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {experiences.map((exp) => {
          const userBalance = currentUser?.tokenBalance ?? 0;
          const isUnlocked = userBalance >= exp.requiredKarma;

          return (
            <div
              key={exp.id}
              className="glass-card rounded-3xl overflow-hidden border border-blue-500/20 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 bg-black/60 text-white">
                    <FaClock className="text-[10px] text-amber-400" />
                    <span>{exp.duration}</span>
                  </div>

                  <div className="absolute top-3 right-3">
                    {isUnlocked ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1">
                        <FaCheckCircle /> Unlocked ({exp.requiredKarma} KP)
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-600/90 text-white shadow-md flex items-center gap-1 backdrop-blur-md">
                        <FaLock /> Requires {exp.requiredKarma} KP
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[11px] font-bold text-amber-400">
                      {exp.village}, {exp.district}
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div><strong>Host:</strong> {exp.communityHost}</div>
                    <div><strong>Max Group Size:</strong> {exp.maxParticipants} conscious travelers</div>
                    <div className="text-emerald-500 font-bold">
                      Price: ₹{exp.price} / person · Earn +{karmaRewardConfig.artisanWorkshop} Karma Points
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedExperience(exp)}
                  disabled={!isUnlocked}
                  className={`w-full py-3 rounded-2xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2 ${
                    isUnlocked
                      ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer active:scale-95'
                      : 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700'
                  }`}
                >
                  {isUnlocked ? (
                    <>Book Workshop & Immersion (+{karmaRewardConfig.artisanWorkshop} KT)</>
                  ) : (
                    <>🔒 Earn {exp.requiredKarma - userBalance} more Karma Points to Unlock</>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* BOOKING MODAL */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-blue-500/30 relative">
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white"
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">
              Book Experience
            </h3>
            <div className="text-xs text-blue-500 font-bold mb-4">{selectedExperience.title}</div>

            {bookingMessage ? (
              <div
                className={`p-5 rounded-2xl text-center space-y-2 ${
                  bookingMessage.success
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}
              >
                {bookingMessage.success ? (
                  <FaCheckCircle className="text-3xl mx-auto" />
                ) : (
                  <FaLock className="text-3xl mx-auto" />
                )}
                <div className="text-sm font-bold">{bookingMessage.text}</div>
              </div>
            ) : (
              <form onSubmit={handleBook} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Number of Participants (Max {selectedExperience.maxParticipants})
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={selectedExperience.maxParticipants}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 space-y-1">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>Total Contribution:</span>
                    <span className="text-emerald-500">₹{(selectedExperience.price * guestCount).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-[10px] text-slate-400">100% directly paid to {selectedExperience.communityHost}</div>
                </div>

                {/* Responsible Tourism Pledge */}
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                  <div className="font-bold text-blue-500 flex items-center gap-1.5">
                    <FaShieldAlt /> Responsible Tourism Pledge
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 italic">
                    "{selectedExperience.responsiblePledge}"
                  </p>
                  <label className="flex items-center gap-2 pt-1 font-bold text-slate-800 dark:text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pledgeAgreed}
                      onChange={(e) => setPledgeAgreed(e.target.checked)}
                      className="rounded"
                    />
                    <span>I solemnly pledge to honor this community agreement</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition"
                >
                  Confirm Reservation & Claim +{karmaRewardConfig.artisanWorkshop} KT
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
