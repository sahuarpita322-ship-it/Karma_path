import React from 'react';
import { 
  FaAward, 
  FaTree, 
  FaHandsHelping, 
  FaWater, 
  FaGraduationCap, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaCertificate, 
  FaUserCircle, 
  FaSignInAlt,
  FaFileAlt
} from 'react-icons/fa';
import { useStore } from '../../context/store';
import { KARMA_BADGES } from '../../data/karmaForGoodData';
import type { CertificateData } from './DigitalCertificateModal';

interface MyKarmaDashboardProps {
  onViewCertificate: (cert: CertificateData) => void;
  onOpenSubmitModal: () => void;
}

export function MyKarmaDashboard({ onViewCertificate, onOpenSubmitModal }: MyKarmaDashboardProps) {
  const currentUser = useStore((s) => s.currentUser);
  const karmaBalance = useStore((s) => s.karmaBalance);
  const karmaDeeds = useStore((s) => s.karmaDeeds);

  // Filter deeds for current logged-in user
  const userDeeds = currentUser
    ? karmaDeeds.filter((d) => d.userId === currentUser.id || d.userName === currentUser.name)
    : karmaDeeds.slice(0, 3); // preview deeds if guest

  const approvedDeeds = userDeeds.filter((d) => d.status === 'Approved');
  const pendingDeeds = userDeeds.filter((d) => d.status === 'Pending');
  const rejectedDeeds = userDeeds.filter((d) => d.status === 'Rejected');

  // Calculate live dynamic metrics from verified deeds
  const verifiedCount = approvedDeeds.length;
  const treesPlanted = approvedDeeds.filter((d) => d.title.toLowerCase().includes('tree') || d.title.toLowerCase().includes('sapling')).length * 5 || (verifiedCount > 0 ? 5 : 0);
  const cleanupsCompleted = approvedDeeds.filter((d) => d.title.toLowerCase().includes('beach') || d.title.toLowerCase().includes('clean') || d.title.toLowerCase().includes('plastic')).length || (verifiedCount > 0 ? 2 : 0);
  const peopleHelped = approvedDeeds.filter((d) => d.title.toLowerCase().includes('food') || d.title.toLowerCase().includes('meal') || d.title.toLowerCase().includes('elder') || d.title.toLowerCase().includes('child')).length * 10 || (verifiedCount > 0 ? 15 : 0);
  const volunteerHours = (verifiedCount * 2.5) + (pendingDeeds.length * 2);

  return (
    <section id="my-dashboard" className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#7955AE]/15 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md inline-block">
            Personal Impact Hub · ମୋ କର୍ମ ଡ୍ୟାସବୋର୍ଡ
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-[#180B2B] dark:text-white">
            My Karma Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-[#D0C3E3] font-serif">
            Track your verified real-world social impact, accumulated Karma Points, unlocked milestone badges, and digital certificates.
          </p>
        </div>

        {currentUser && (
          <div className="flex items-center gap-3 self-start md:self-auto p-2.5 px-4 rounded-2xl bg-white/80 dark:bg-[#1E0E34]/80 backdrop-blur-xl border border-[#7955AE]/20 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7955AE] to-[#451F7D] text-white flex items-center justify-center font-bold text-sm shadow">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-xs text-[#180B2B] dark:text-white">{currentUser.name}</div>
              <div className="text-[10px] text-[#7955AE] dark:text-[#B9A5DF] font-semibold">{karmaBalance} Karma Points</div>
            </div>
          </div>
        )}
      </div>

      {/* Guest Sign-in Banner if not authenticated */}
      {!currentUser && (
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#7955AE]/15 via-purple-500/10 to-transparent border border-[#7955AE]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-3xl text-[#7955AE] shrink-0" />
            <div className="space-y-0.5">
              <h4 className="font-cinzel font-black text-sm text-[#180B2B] dark:text-white">
                Viewing in Guest Preview Mode
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-serif">
                Sign in to link your good deeds to your private profile, accumulate official Karma Points, and download personalized certificates.
              </p>
            </div>
          </div>
          <a
            href="/signup"
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-[#7955AE] text-white shadow hover:bg-[#613A9E] transition shrink-0"
          >
            <FaSignInAlt size={11} />
            <span>Sign In / Register</span>
          </a>
        </div>
      )}

      {/* Top Counters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center mx-auto text-lg mb-2">
            <FaAward />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-cinzel text-[#180B2B] dark:text-amber-300">
            {currentUser ? karmaBalance : 50}
          </div>
          <div className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Total Karma Points
          </div>
        </div>

        <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto text-lg mb-2">
            <FaCheckCircle />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-cinzel text-[#180B2B] dark:text-white">
            {verifiedCount}
          </div>
          <div className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Verified Deeds
          </div>
        </div>

        <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-[#7955AE] flex items-center justify-center mx-auto text-lg mb-2">
            <FaClock />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-cinzel text-[#180B2B] dark:text-white">
            {volunteerHours.toFixed(1)} hrs
          </div>
          <div className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Volunteer Hours
          </div>
        </div>

        <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-500 flex items-center justify-center mx-auto text-lg mb-2">
            <FaCertificate />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-cinzel text-[#180B2B] dark:text-white">
            {approvedDeeds.length}
          </div>
          <div className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Certificates Earned
          </div>
        </div>

      </div>

      {/* Social Impact Breakdown Strip */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-md">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-amber-300 mb-3 flex items-center gap-2">
          <span>Social Impact Footprint</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 flex items-center gap-3">
            <FaTree className="text-emerald-500 text-xl shrink-0" />
            <div>
              <div className="font-black text-sm text-[#180B2B] dark:text-white">{treesPlanted}</div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">Trees Planted</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 flex items-center gap-3">
            <FaWater className="text-cyan-500 text-xl shrink-0" />
            <div>
              <div className="font-black text-sm text-[#180B2B] dark:text-white">{cleanupsCompleted}</div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">Cleanups Done</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 flex items-center gap-3">
            <FaHandsHelping className="text-amber-500 text-xl shrink-0" />
            <div>
              <div className="font-black text-sm text-[#180B2B] dark:text-white">{peopleHelped}+</div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">People Helped</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 flex items-center gap-3">
            <FaGraduationCap className="text-indigo-500 text-xl shrink-0" />
            <div>
              <div className="font-black text-sm text-[#180B2B] dark:text-white">{verifiedCount > 0 ? 'Active' : 'Get Started'}</div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">Education Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Unlocked Badges & Achievements Section */}
      <div className="p-5 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
              Karma Rewards & Milestone Badges
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif">
              Earn exclusive badges as you deepen your participation in Odisha's social causes.
            </p>
          </div>
          <span className="text-xs font-bold text-[#7955AE] dark:text-amber-300">
            {Math.min(KARMA_BADGES.length, verifiedCount + 1)} / {KARMA_BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {KARMA_BADGES.map((badge, idx) => {
            const isUnlocked = idx <= (verifiedCount || 1);

            return (
              <div
                key={badge.id}
                className={`p-3 rounded-2xl border text-center space-y-2 transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-white to-purple-50/50 dark:from-white/10 dark:to-purple-900/20 border-[#7955AE]/40 shadow-sm'
                    : 'bg-stone-100/50 dark:bg-black/20 border-dashed border-stone-300 dark:border-stone-700 opacity-60'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto text-base text-white shadow-sm"
                  style={{ backgroundColor: isUnlocked ? badge.color : '#9CA3AF' }}
                >
                  <FaAward />
                </div>
                <div>
                  <div className="font-cinzel font-bold text-xs text-[#180B2B] dark:text-white leading-tight">
                    {badge.name}
                  </div>
                  <div className="text-[10px] text-stone-500 dark:text-stone-400 font-serif line-clamp-2 mt-0.5">
                    {badge.description}
                  </div>
                </div>
                <div className="pt-1">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                      isUnlocked
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                        : 'bg-stone-200 dark:bg-white/10 text-stone-500'
                    }`}
                  >
                    {isUnlocked ? 'Unlocked' : 'In Progress'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Submissions & Certificates Table */}
      <div className="p-5 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#7955AE]/15 pb-3">
          <div>
            <h3 className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
              My Activity Submissions & History
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif">
              View your pending and approved deeds with verification status and certificate download links.
            </p>
          </div>

          <button
            onClick={onOpenSubmitModal}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition self-start sm:self-auto"
          >
            + Submit New Deed
          </button>
        </div>

        {userDeeds.length === 0 ? (
          <div className="p-8 text-center space-y-2">
            <FaFileAlt className="text-2xl text-stone-400 mx-auto" />
            <p className="text-xs text-stone-500 font-serif">You have not submitted any deeds yet.</p>
            <button
              onClick={onOpenSubmitModal}
              className="text-xs font-bold text-[#7955AE] hover:underline"
            >
              Start by submitting your first good deed!
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {userDeeds.map((deed) => {
              const isApproved = deed.status === 'Approved';
              const isPending = deed.status === 'Pending';
              const isRejected = deed.status === 'Rejected';

              return (
                <div
                  key={deed.id}
                  className="p-4 rounded-2xl bg-white/80 dark:bg-black/30 border border-[#7955AE]/15 hover:border-[#7955AE]/40 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <img
                      src={deed.proofUrl}
                      alt={deed.title}
                      className="w-14 h-14 rounded-xl object-cover border border-[#7955AE]/20 shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#180B2B] dark:text-white truncate">
                          {deed.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#7955AE]/10 text-[#7955AE] dark:text-[#D9CCF2]">
                          {deed.activityType}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400 flex flex-wrap items-center gap-2">
                        <span>{deed.location}</span>
                        <span>•</span>
                        <span>{deed.date}</span>
                      </div>
                      {deed.rejectionReason && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 font-serif italic">
                          Feedback: {deed.rejectionReason}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Status Badge & Action */}
                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    {isPending && (
                      <span className="px-3 py-1 rounded-xl text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5 animate-pulse">
                        <FaClock size={11} />
                        <span>Pending Verification</span>
                      </span>
                    )}

                    {isRejected && (
                      <span className="px-3 py-1 rounded-xl text-xs font-bold bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                        <FaTimesCircle size={11} />
                        <span>Rejected</span>
                      </span>
                    )}

                    {isApproved && (
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                          <FaCheckCircle size={11} />
                          <span>Approved (+{deed.awardedPoints} KP)</span>
                        </span>

                        <button
                          onClick={() =>
                            onViewCertificate({
                              certificateId: deed.certificateId || `KP-CERT-${deed.id.replace('kd-', '')}`,
                              userName: deed.userName,
                              activityTitle: deed.title,
                              category: deed.activityType,
                              date: deed.date,
                              points: deed.awardedPoints,
                              location: deed.location,
                              organization: deed.organizationName || 'Karma-Path Social Impact Council'
                            })
                          }
                          className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-sm transition"
                        >
                          <FaCertificate size={11} />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </section>
  );
}
