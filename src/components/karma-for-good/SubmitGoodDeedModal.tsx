import React, { useState } from 'react';
import { FaTimes, FaCamera, FaUpload, FaCheckCircle, FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaInfoCircle } from 'react-icons/fa';
import { useStore } from '../../context/store';
import type { KarmaActivity } from '../../data/karmaForGoodData';

interface SubmitGoodDeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillActivity?: KarmaActivity | null;
  onSuccess?: () => void;
}

export function SubmitGoodDeedModal({
  isOpen,
  onClose,
  prefillActivity,
  onSuccess
}: SubmitGoodDeedModalProps) {
  const currentUser = useStore((s) => s.currentUser);
  const submitGoodDeed = useStore((s) => s.submitGoodDeed);

  const [title, setTitle] = useState(prefillActivity ? prefillActivity.name : '');
  const [category, setCategory] = useState<string>(
    prefillActivity ? prefillActivity.category : 'Environmental'
  );
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [location, setLocation] = useState(prefillActivity ? prefillActivity.location : '');
  const [proofUrl, setProofUrl] = useState('');
  const [impactCount, setImpactCount] = useState<number>(1);
  const [organizationName, setOrganizationName] = useState(
    prefillActivity?.organization || ''
  );
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !location.trim()) {
      setErrorMsg('Please fill in all mandatory fields (Title, Description, and Location).');
      return;
    }

    // Default authentic photo if user leaves proofUrl blank
    const finalProofUrl =
      proofUrl.trim() ||
      prefillActivity?.image ||
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80';

    submitGoodDeed({
      title: title.trim(),
      description: description.trim(),
      activityType: category as any,
      location: location.trim(),
      proofUrl: finalProofUrl,
      category,
      impactCount,
      impactMetric: prefillActivity?.impactMetric || `${impactCount} Units of Positive Impact`,
      organizationName: organizationName.trim() || undefined
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      onClose();
      if (onSuccess) onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl my-6 bg-white dark:bg-[#1A0E2E] rounded-3xl shadow-2xl border border-[#7955AE]/40 overflow-hidden text-[#180B2B] dark:text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#7955AE]/20 bg-[#FAF7FD] dark:bg-[#130724]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2]">
              <FaHeart size={16} />
            </span>
            <div>
              <h3 className="font-cinzel font-black text-base">
                {prefillActivity ? 'Submit Deed Proof' : '“I Did Something Good”'}
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-serif">
                Upload your real-world contribution for verification & Karma Points
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

        {submittedSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl animate-bounce">
              <FaCheckCircle />
            </div>
            <h4 className="text-xl font-cinzel font-black text-[#180B2B] dark:text-white">
              Deed Submitted Successfully!
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-serif max-w-md mx-auto leading-relaxed">
              Your deed has been placed in the <strong>Pending Verification</strong> queue. Once reviewed by an authorized moderator or organization, your Karma Points and Digital Certificate will be unlocked!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
            
            {errorMsg && (
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 font-semibold text-xs">
                {errorMsg}
              </div>
            )}

            {/* User Check Note */}
            {!currentUser && (
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-[11px] flex items-center gap-2">
                <FaInfoCircle size={14} className="shrink-0 text-amber-500" />
                <span>You are contributing as a guest. To view your profile dashboard and badges later, please sign in.</span>
              </div>
            )}

            {/* Activity Title */}
            <div className="space-y-1">
              <label className="font-bold text-stone-700 dark:text-stone-300">
                Activity Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Cleaned 200m Chandrabhaga coastline with college team"
                className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                required
              />
            </div>

            {/* Category & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">
                  Impact Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                >
                  <option value="Environmental">Environmental Protection</option>
                  <option value="Helping People">Helping People in Need</option>
                  <option value="Education">Education & Child Welfare</option>
                  <option value="Elderly Care">Supporting Elderly People</option>
                  <option value="Community Service">Community & Social Service</option>
                  <option value="Culture & Heritage">Preserving Local Culture</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <FaCalendarAlt size={10} className="text-[#7955AE]" /> Date Performed
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Location & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <FaMapMarkerAlt size={10} className="text-rose-500" /> Location / Village <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Chandrabhaga Beach, Puri"
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <FaBuilding size={10} className="text-[#7955AE]" /> Organization / NGO (Optional)
                </label>
                <input
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  placeholder="e.g. Red Cross / Bakul Foundation"
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="font-bold text-stone-700 dark:text-stone-300">
                What did you do? (Detailed Description) <span className="text-rose-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Explain the background of the deed, people involved, time spent, and the real-world positive outcome..."
                className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white leading-relaxed resize-none"
                required
              />
            </div>

            {/* Impact Count & Proof Image URL */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">
                  Estimated Beneficiaries / Units
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={impactCount}
                  onChange={(e) => setImpactCount(parseInt(e.target.value) || 1)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <FaCamera size={10} className="text-[#7955AE]" /> Proof Image URL or Upload Link
                </label>
                <input
                  type="url"
                  value={proofUrl}
                  onChange={(e) => setProofUrl(e.target.value)}
                  placeholder="https://... (photo of activity, sapling, or certificate)"
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                />
              </div>
            </div>

            {/* Privacy & Safety Note */}
            <div className="p-3 rounded-xl bg-[#7955AE]/5 dark:bg-white/5 border border-[#7955AE]/15 text-[11px] text-stone-600 dark:text-stone-300 space-y-1 font-serif">
              <p>
                <strong>Verification Rules:</strong> Each genuine deed is verified once. Do not upload fake or copyrighted stock imagery. Always protect the dignity and privacy of children and vulnerable beneficiaries.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#7955AE]/15">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/10 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-md shadow-purple-600/30 transition transform hover:-translate-y-0.5"
              >
                <FaUpload size={11} />
                <span>Submit for Verification</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
