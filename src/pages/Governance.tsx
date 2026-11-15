import { useState } from 'react';
import { 
  FaUsers, 
  FaVoteYea, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaSlidersH, 
  FaShieldAlt, 
  FaHandshake, 
  FaCoins, 
  FaLock,
  FaFileAlt,
  FaMusic
} from 'react-icons/fa';
import { useStore, DAOProposal } from '../context/store';

export function Governance() {
  const proposals = useStore((s) => s.proposals);
  const voteProposal = useStore((s) => s.voteProposal);
  const karmaDeeds = useStore((s) => s.karmaDeeds);
  const reviewGoodDeed = useStore((s) => s.reviewGoodDeed);
  const villageSubmissions = useStore((s) => s.villageSubmissions);
  const reviewVillageStory = useStore((s) => s.reviewVillageStory);
  const recordedSongs = useStore((s) => s.recordedSongs);
  const reviewFolkSong = useStore((s) => s.reviewFolkSong);
  const karmaRewardConfig = useStore((s) => s.karmaRewardConfig);
  const updateKarmaRewardConfig = useStore((s) => s.updateKarmaRewardConfig);

  const [activeTab, setActiveTab] = useState<'proposals' | 'moderation' | 'settings'>('proposals');

  const pendingDeeds = karmaDeeds.filter((d) => d.status === 'Pending');
  const pendingVillages = villageSubmissions.filter((v) => v.status === 'Pending');
  const pendingSongs = recordedSongs.filter((s) => s.status === 'Pending');

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-8 border border-purple-500/25 bg-gradient-to-r from-purple-950/40 via-indigo-950/25 to-stone-900/40 backdrop-blur-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
            <FaUsers /> HYPER-LOCAL COMMUNITY DAO
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Community Governance <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">& Consensus</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Community consent always overrides a tourist’s Karma score. Local Gram Sabhas and elders decide tourism caps, cultural privacy policies, and reward values.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('proposals')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'proposals'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaVoteYea /> Active Proposals ({proposals.length})
            </button>

            <button
              onClick={() => setActiveTab('moderation')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'moderation'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaShieldAlt /> Verification Queue ({pendingDeeds.length + pendingVillages.length + pendingSongs.length})
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'settings'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaSlidersH /> Reward Parameters
            </button>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* CORE TENET BANNER */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 mb-8 flex items-center gap-3">
        <FaLock className="text-xl flex-shrink-0 text-amber-500" />
        <div>
          <strong>Sacred Sovereignty Principle:</strong> Karma Points must never override a community’s right to restrict access to sacred or sensitive places. Sacred groves and restricted tribal rituals remain protected by Gram Sabha vote.
        </div>
      </div>

      {/* VIEW: PROPOSALS & VOTING */}
      {activeTab === 'proposals' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proposals.map((prop) => {
            const totalVotes = prop.votesFor + prop.votesAgainst + prop.votesAbstain;
            const forPercent = totalVotes > 0 ? Math.round((prop.votesFor / totalVotes) * 100) : 0;

            return (
              <div
                key={prop.id}
                className="glass-card rounded-3xl p-6 border border-purple-500/20 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-bold">
                      {prop.category}
                    </span>
                    <span className="text-slate-400">Deadline: {prop.deadline}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                    {prop.title}
                  </h3>

                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Proposed by: <strong>{prop.author}</strong> ({prop.villageOrDistrict})
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                    {prop.description}
                  </p>

                  {/* Voting Progress Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-emerald-500">For: {prop.votesFor} ({forPercent}%)</span>
                      <span className="text-red-500">Against: {prop.votesAgainst}</span>
                      <span className="text-slate-400">Abstain: {prop.votesAbstain}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                      <div className="bg-emerald-500 h-full" style={{ width: `${forPercent}%` }}></div>
                      <div className="bg-red-500 h-full" style={{ width: `${100 - forPercent}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Vote Buttons */}
                <div className="pt-2">
                  {prop.hasVoted ? (
                    <div className="text-center text-xs font-bold text-purple-400 p-2 rounded-xl bg-purple-500/10">
                      ✓ You voted "{prop.hasVoted.toUpperCase()}"
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => voteProposal(prop.id, 'for')}
                        className="py-2 rounded-xl text-xs font-bold bg-emerald-600/90 hover:bg-emerald-600 text-white shadow-sm"
                      >
                        Vote FOR
                      </button>
                      <button
                        onClick={() => voteProposal(prop.id, 'against')}
                        className="py-2 rounded-xl text-xs font-bold bg-red-600/90 hover:bg-red-600 text-white shadow-sm"
                      >
                        Vote AGAINST
                      </button>
                      <button
                        onClick={() => voteProposal(prop.id, 'abstain')}
                        className="py-2 rounded-xl text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200"
                      >
                        Abstain
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW: COMMUNITY VERIFICATION QUEUE */}
      {activeTab === 'moderation' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Pending Karma Deeds */}
          <div className="glass-card rounded-3xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <FaCoins className="text-amber-500" /> Pending Karma Deeds ({pendingDeeds.length})
            </h3>

            {pendingDeeds.length === 0 ? (
              <div className="text-xs text-slate-400 py-4 text-center">No pending good deed claims.</div>
            ) : (
              <div className="space-y-4">
                {pendingDeeds.map((deed) => (
                  <div
                    key={deed.id}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-amber-500">{deed.activityType} Deed</div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{deed.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{deed.description}</p>
                      <div className="text-[11px] text-slate-400">
                        Submitted by: <strong>{deed.userName}</strong> · {deed.location} ({deed.date})
                      </div>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => reviewGoodDeed(deed.id, 'Approved')}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm flex items-center gap-1"
                      >
                        <FaCheckCircle /> Approve & Award Points
                      </button>
                      <button
                        onClick={() => reviewGoodDeed(deed.id, 'Rejected')}
                        className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-sm flex items-center gap-1"
                      >
                        <FaTimesCircle /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Village Submissions */}
          <div className="glass-card rounded-3xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <FaFileAlt className="text-purple-500" /> Pending Village Stories ({pendingVillages.length})
            </h3>

            {pendingVillages.length === 0 ? (
              <div className="text-xs text-slate-400 py-4 text-center">No pending village story submissions.</div>
            ) : (
              <div className="space-y-4">
                {pendingVillages.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Village: {sub.villageName} ({sub.district})
                      </h4>
                      <div className="text-xs text-amber-500 font-bold">{sub.speciality}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{sub.story}</p>
                      <div className="text-[11px] text-slate-400">By {sub.userName} · {sub.submittedAt}</div>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => reviewVillageStory(sub.id, 'Approved')}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                      >
                        Approve & Publish (+{karmaRewardConfig.shareStory} KT)
                      </button>
                      <button
                        onClick={() => reviewVillageStory(sub.id, 'Rejected')}
                        className="px-3.5 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Folk Song Submissions */}
          <div className="glass-card rounded-3xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <FaMusic className="text-red-500" /> Pending Folk Song Recordings ({pendingSongs.length})
            </h3>

            {pendingSongs.length === 0 ? (
              <div className="text-xs text-slate-400 py-4 text-center">No pending folk song recordings.</div>
            ) : (
              <div className="space-y-4">
                {pendingSongs.map((song) => (
                  <div
                    key={song.id}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{song.title}</h4>
                      <div className="text-xs text-purple-400 font-bold">
                        Language: {song.language} ({song.dialect}) · Village: {song.village}
                      </div>
                      <audio controls src={song.audioUrl} className="h-8 mt-1"></audio>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => reviewFolkSong(song.id, 'Approved')}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                      >
                        Verify (+{karmaRewardConfig.culturalRecording} KT)
                      </button>
                      <button
                        onClick={() => reviewFolkSong(song.id, 'Rejected')}
                        className="px-3.5 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW: SETTINGS & REWARD CONFIGURATION */}
      {activeTab === 'settings' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 max-w-2xl mx-auto space-y-5">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FaSlidersH className="text-purple-500" /> Admin Configurable Karma Reward Values
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Adjust point allocations awarded for verified ecosystem contributions.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <strong className="block text-slate-900 dark:text-white">Verified Local Artisan Purchase</strong>
                <span className="text-slate-500">Points credited upon completed transaction checkout.</span>
              </div>
              <input
                type="number"
                value={karmaRewardConfig.artisanPurchase}
                onChange={(e) => updateKarmaRewardConfig({ artisanPurchase: Number(e.target.value) })}
                className="w-20 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161622] border border-slate-300 dark:border-slate-700 text-right font-black text-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <strong className="block text-slate-900 dark:text-white">Attending an Artisan Workshop</strong>
                <span className="text-slate-500">Points credited when booking cultural masterclasses.</span>
              </div>
              <input
                type="number"
                value={karmaRewardConfig.artisanWorkshop}
                onChange={(e) => updateKarmaRewardConfig({ artisanWorkshop: Number(e.target.value) })}
                className="w-20 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161622] border border-slate-300 dark:border-slate-700 text-right font-black text-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <strong className="block text-slate-900 dark:text-white">Visiting a Verified Artisan Village</strong>
                <span className="text-slate-500">Awarded for on-site visit check-in.</span>
              </div>
              <input
                type="number"
                value={karmaRewardConfig.visitVillage}
                onChange={(e) => updateKarmaRewardConfig({ visitVillage: Number(e.target.value) })}
                className="w-20 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161622] border border-slate-300 dark:border-slate-700 text-right font-black text-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <strong className="block text-slate-900 dark:text-white">Sharing an Approved Artisan / Village Story</strong>
                <span className="text-slate-500">Awarded after moderator verification.</span>
              </div>
              <input
                type="number"
                value={karmaRewardConfig.shareStory}
                onChange={(e) => updateKarmaRewardConfig({ shareStory: Number(e.target.value) })}
                className="w-20 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161622] border border-slate-300 dark:border-slate-700 text-right font-black text-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <strong className="block text-slate-900 dark:text-white">Folk Song Recording & Oral History</strong>
                <span className="text-slate-500">Awarded when audio passes verification.</span>
              </div>
              <input
                type="number"
                value={karmaRewardConfig.culturalRecording}
                onChange={(e) => updateKarmaRewardConfig({ culturalRecording: Number(e.target.value) })}
                className="w-20 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161622] border border-slate-300 dark:border-slate-700 text-right font-black text-amber-500"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
