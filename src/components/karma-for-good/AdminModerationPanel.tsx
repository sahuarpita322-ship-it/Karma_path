import React, { useState } from 'react';
import { 
  FaTimes, 
  FaShieldAlt, 
  FaCheck, 
  FaBan, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUserCheck, 
  FaAward,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { useStore, type KarmaActivityDeed } from '../../context/store';

interface AdminModerationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminModerationPanel({ isOpen, onClose }: AdminModerationPanelProps) {
  const karmaDeeds = useStore((s) => s.karmaDeeds);
  const reviewGoodDeed = useStore((s) => s.reviewGoodDeed);

  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [selectedDeed, setSelectedDeed] = useState<KarmaActivityDeed | null>(null);
  const [customPoints, setCustomPoints] = useState<number>(25);
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const pendingList = karmaDeeds.filter((d) => d.status === 'Pending');
  const approvedList = karmaDeeds.filter((d) => d.status === 'Approved');
  const rejectedList = karmaDeeds.filter((d) => d.status === 'Rejected');

  const handleApprove = (deed: KarmaActivityDeed) => {
    reviewGoodDeed(deed.id, 'Approved', undefined, customPoints);
    setActionSuccess(`Deed "${deed.title}" approved! ${customPoints} Karma Points awarded to ${deed.userName}. Certificate generated.`);
    setSelectedDeed(null);
    setTimeout(() => setActionSuccess(null), 3500);
  };

  const handleReject = (deed: KarmaActivityDeed) => {
    if (!rejectionReason.trim()) {
      alert('Please provide a specific reason for rejection.');
      return;
    }
    reviewGoodDeed(deed.id, 'Rejected', rejectionReason.trim(), 0);
    setActionSuccess(`Deed "${deed.title}" rejected. Feedback recorded.`);
    setRejectingId(null);
    setRejectionReason('');
    setSelectedDeed(null);
    setTimeout(() => setActionSuccess(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl my-6 bg-white dark:bg-[#1A0E2E] rounded-3xl shadow-2xl border border-[#7955AE]/40 overflow-hidden text-[#180B2B] dark:text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#7955AE]/20 bg-[#FAF7FD] dark:bg-[#130724] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-300">
              <FaShieldAlt size={18} />
            </span>
            <div>
              <h3 className="font-cinzel font-black text-base">
                Moderator & Impact Verification Desk
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-serif">
                Review submitted proof, audit duplicates, award points, and issue certificates
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-white transition"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {actionSuccess && (
          <div className="p-3 mx-6 mt-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <FaCheckCircle className="text-emerald-500 shrink-0 text-base" />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-[#7955AE]/15 text-xs shrink-0">
          <button
            onClick={() => setActiveTab('pending')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'pending'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            }`}
          >
            <FaClock size={11} className="text-amber-500" />
            <span>Pending Review ({pendingList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('approved')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'approved'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            }`}
          >
            <FaCheckCircle size={11} className="text-emerald-500" />
            <span>Approved & Certified ({approvedList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('rejected')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'rejected'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            }`}
          >
            <FaTimesCircle size={11} className="text-rose-500" />
            <span>Rejected Submissions ({rejectedList.length})</span>
          </button>
        </div>

        {/* Body Content List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'pending' && (
            <>
              {pendingList.length === 0 ? (
                <div className="p-8 text-center text-xs text-stone-500 font-serif space-y-2">
                  <FaCheckCircle className="text-emerald-500 text-2xl mx-auto" />
                  <p>All submitted deeds have been reviewed! No pending items in queue.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingList.map((deed) => (
                    <div
                      key={deed.id}
                      className="p-4 rounded-2xl bg-white dark:bg-black/30 border border-[#7955AE]/20 hover:border-[#7955AE]/40 transition space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <img
                            src={deed.proofUrl}
                            alt={deed.title}
                            className="w-20 h-20 rounded-xl object-cover border border-[#7955AE]/20 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80';
                            }}
                          />
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#7955AE] text-white">
                                {deed.activityType}
                              </span>
                              <span className="text-[11px] font-bold text-stone-600 dark:text-stone-300">
                                Contributor: {deed.userName}
                              </span>
                            </div>
                            <h4 className="font-cinzel font-bold text-sm text-[#180B2B] dark:text-white">
                              {deed.title}
                            </h4>
                            <div className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-2">
                              <span><FaMapMarkerAlt className="inline text-rose-500 mr-1" />{deed.location}</span>
                              <span>•</span>
                              <span><FaCalendarAlt className="inline text-[#7955AE] mr-1" />{deed.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right self-end sm:self-auto shrink-0 space-y-1">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                            Awaiting Decision
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed bg-stone-50 dark:bg-white/5 p-3 rounded-xl border border-[#7955AE]/10">
                        "{deed.description}"
                      </p>

                      {/* Moderation Actions Bar */}
                      {rejectingId === deed.id ? (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2 text-xs">
                          <label className="font-bold text-rose-800 dark:text-rose-200">
                            Reason for Rejection (Mandatory):
                          </label>
                          <input
                            type="text"
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            placeholder="e.g. Unclear photo, duplicate submission, or unverified location..."
                            className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-stone-900 border border-rose-500/30 focus:outline-none text-[#180B2B] dark:text-white text-xs"
                          />
                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              onClick={() => { setRejectingId(null); setRejectionReason(''); }}
                              className="px-3 py-1 rounded-lg text-stone-500 hover:text-stone-700"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleReject(deed)}
                              className="px-3.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold"
                            >
                              Confirm Rejection (0 KP)
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#7955AE]/10 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-stone-600 dark:text-stone-300">Award Points:</span>
                            <input
                              type="number"
                              min="5"
                              max="100"
                              value={customPoints}
                              onChange={(e) => setCustomPoints(parseInt(e.target.value) || 25)}
                              className="w-16 px-2 py-1 rounded-lg bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 text-center font-bold"
                            />
                            <span className="text-[11px] text-stone-500">KP</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setRejectingId(deed.id)}
                              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold bg-rose-500/15 hover:bg-rose-500 text-rose-700 hover:text-white dark:text-rose-300 border border-rose-500/30 transition"
                            >
                              <FaBan size={11} />
                              <span>Reject</span>
                            </button>

                            <button
                              onClick={() => handleApprove(deed)}
                              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/30 transition"
                            >
                              <FaCheck size={11} />
                              <span>Approve & Issue Certificate</span>
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'approved' && (
            <div className="space-y-3">
              {approvedList.map((deed) => (
                <div
                  key={deed.id}
                  className="p-3.5 rounded-2xl bg-white/70 dark:bg-black/30 border border-emerald-500/20 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="font-cinzel font-bold text-[#180B2B] dark:text-white truncate">
                      {deed.title}
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400">
                      Contributor: <strong>{deed.userName}</strong> • {deed.location} • {deed.date}
                    </div>
                    {deed.certificateId && (
                      <div className="text-[10px] text-[#7955AE] dark:text-[#D9CCF2] font-mono">
                        Certificate #{deed.certificateId}
                      </div>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shrink-0">
                    +{deed.awardedPoints} KP Awarded
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'rejected' && (
            <div className="space-y-3">
              {rejectedList.length === 0 ? (
                <p className="p-6 text-center text-xs text-stone-500 font-serif">No rejected submissions.</p>
              ) : (
                rejectedList.map((deed) => (
                  <div
                    key={deed.id}
                    className="p-3.5 rounded-2xl bg-white/70 dark:bg-black/30 border border-rose-500/20 space-y-1 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-700 dark:text-rose-300">{deed.title}</span>
                      <span className="text-[11px] text-stone-400">{deed.date}</span>
                    </div>
                    <div className="text-[11px] text-stone-500">Contributor: {deed.userName} ({deed.location})</div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-300 font-serif italic pt-1">
                      Reason: {deed.rejectionReason || 'Proof does not meet verification requirements.'}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
