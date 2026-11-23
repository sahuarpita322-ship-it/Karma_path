import React, { useState } from 'react';
import { 
  FaLeaf, 
  FaHandsHelping, 
  FaLandmark, 
  FaCompass, 
  FaUpload, 
  FaCheckCircle, 
  FaHourglassHalf, 
  FaCoins, 
  FaShieldAlt 
} from 'react-icons/fa';
import { useStore, KarmaActivityDeed } from '../context/store';

export function Tasks() {
  const { karmaDeeds, submitGoodDeed, currentUser } = useStore();

  // Form State
  const [category, setCategory] = useState<'Environmental' | 'Humanity' | 'Cultural Preservation' | 'Responsible Tourism'>('Environmental');
  const [activityType, setActivityType] = useState<string>('Beach / Trail Cleanup');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [proofUrl, setProofUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 4 Specific Activity Types per Category
  const activityOptions: Record<string, string[]> = {
    'Environmental': [
      'Beach / Trail Cleanup',
      'Tree Plantation / Sacred Grove Care',
      'Plastic Waste Segregation',
      'Wildlife Monitoring / Reporting'
    ],
    'Humanity': [
      'Artisan Guild Assistance',
      'Elder Folklorist Support',
      'Educational Workshop Volunteering',
      'Rural Healthcare / Hygiene Assistance'
    ],
    'Cultural Preservation': [
      'Temple Monument Cleanup & Respect',
      'Folk Song / Dialect Audio Recording',
      'Traditional Craft Documentation',
      'Village Oral History Archive'
    ],
    'Responsible Tourism': [
      'Direct Village Artisan Patronage',
      'Public Transport / Bicycle Commute',
      'Sacred Site Code Adherence',
      'Zero Single-Use Plastic Day'
    ]
  };

  const handleCategoryChange = (cat: 'Environmental' | 'Humanity' | 'Cultural Preservation' | 'Responsible Tourism') => {
    setCategory(cat);
    setActivityType(activityOptions[cat][0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim() || !description.trim() || !location.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    // Duplicate submission check
    const isDuplicate = karmaDeeds.some(
      (d) => 
        d.userId === (currentUser?.id || 'guest') &&
        d.title.toLowerCase() === title.trim().toLowerCase() &&
        d.date === date
    );

    if (isDuplicate) {
      setErrorMsg('A contribution with this exact title and date has already been submitted for verification.');
      return;
    }

    submitGoodDeed({
      activityType: category,
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      proofUrl: proofUrl.trim() || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTitle('');
      setDescription('');
      setLocation('');
      setProofUrl('');
    }, 3500);
  };

  const myDeeds = karmaDeeds.filter((d) => d.userId === (currentUser?.id || 'guest'));

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Editorial Header */}
      <section className="relative rounded-3xl p-8 sm:p-14 overflow-hidden glass-panel border border-[#D9CCF2]/30 bg-[#F5F0FC]/90 dark:bg-[#170D2C]/90 text-[#302342] dark:text-[#F8F4FF] shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2] border border-[#D9CCF2]/30">
            <FaCoins className="text-[#BBA5E5]" /> Verified Ethical Tourism Impact
          </div>
          <h1 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-[#302342] dark:text-[#F8F4FF]">
            My Contributions
          </h1>
          <p className="text-sm sm:text-base text-[#716680] dark:text-[#D0C3E3] font-serif italic leading-relaxed">
            Small actions. Meaningful impact. A better journey.
          </p>
        </div>
      </section>

      {/* 4 CONTRIBUTION CATEGORIES */}
      <section className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#716680] dark:text-[#D0C3E3]">
          Contribution Categories
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* 1. Environmental Care */}
          <div 
            onClick={() => handleCategoryChange('Environmental')}
            className={`p-6 rounded-2xl glass-card border cursor-pointer transition-all ${
              category === 'Environmental'
                ? 'border-[#7955AE] bg-[#7955AE]/15 shadow-lg'
                : 'border-[#D9CCF2]/25 hover:border-[#BBA5E5]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-500 flex items-center justify-center text-lg mb-3">
              <FaLeaf />
            </div>
            <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
              Environmental Care
            </h3>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-1 leading-relaxed">
              Coastal cleanups, mangrove preservation, wildlife monitoring, and zero-waste travel.
            </p>
            <div className="text-[11px] font-bold text-[#7955AE] dark:text-[#D9CCF2] mt-3">
              +25 to +40 KP on verification
            </div>
          </div>

          {/* 2. Community Support */}
          <div 
            onClick={() => handleCategoryChange('Humanity')}
            className={`p-6 rounded-2xl glass-card border cursor-pointer transition-all ${
              category === 'Humanity'
                ? 'border-[#7955AE] bg-[#7955AE]/15 shadow-lg'
                : 'border-[#D9CCF2]/25 hover:border-[#BBA5E5]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center text-lg mb-3">
              <FaHandsHelping />
            </div>
            <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
              Community Support
            </h3>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-1 leading-relaxed">
              Volunteering with artisan families, educational workshops, and community assistance.
            </p>
            <div className="text-[11px] font-bold text-[#7955AE] dark:text-[#D9CCF2] mt-3">
              +30 to +50 KP on verification
            </div>
          </div>

          {/* 3. Cultural Preservation */}
          <div 
            onClick={() => handleCategoryChange('Cultural Preservation')}
            className={`p-6 rounded-2xl glass-card border cursor-pointer transition-all ${
              category === 'Cultural Preservation'
                ? 'border-[#7955AE] bg-[#7955AE]/15 shadow-lg'
                : 'border-[#D9CCF2]/25 hover:border-[#BBA5E5]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[#BBA5E5] flex items-center justify-center text-lg mb-3">
              <FaLandmark />
            </div>
            <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
              Cultural Preservation
            </h3>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-1 leading-relaxed">
              Recording folk songs, documenting temple crafts, and archiving oral village histories.
            </p>
            <div className="text-[11px] font-bold text-[#7955AE] dark:text-[#D9CCF2] mt-3">
              +35 to +50 KP on verification
            </div>
          </div>

          {/* 4. Responsible Tourism */}
          <div 
            onClick={() => handleCategoryChange('Responsible Tourism')}
            className={`p-6 rounded-2xl glass-card border cursor-pointer transition-all ${
              category === 'Responsible Tourism'
                ? 'border-[#7955AE] bg-[#7955AE]/15 shadow-lg'
                : 'border-[#D9CCF2]/25 hover:border-[#BBA5E5]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-lg mb-3">
              <FaCompass />
            </div>
            <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
              Responsible Tourism
            </h3>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-1 leading-relaxed">
              Visiting craft villages, supporting weavers directly, and respecting sacred site codes.
            </p>
            <div className="text-[11px] font-bold text-[#7955AE] dark:text-[#D9CCF2] mt-3">
              +20 to +30 KP on verification
            </div>
          </div>

        </div>
      </section>

      {/* TWO-COLUMN WORKFLOW: Submission Form + Verification Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Span 7): Clean Contribution Submission Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-[#D9CCF2]/25 space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#D9CCF2] mb-1">
              Contribution Submission
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF]">
              Submit for Verification
            </h2>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-1 font-serif italic">
              Points are credited to your account only after authentic evidence is verified by our community governance team.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-600/15 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
              <FaCheckCircle className="text-3xl text-emerald-500 mx-auto" />
              <h3 className="font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
                Contribution Submitted for Verification
              </h3>
              <p className="text-xs text-[#716680] dark:text-[#D0C3E3]">
                Your deed has been queued for review by local community moderators. You will receive your Karma Points upon verification.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category & Activity Type Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                    Contribution Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF]"
                  >
                    <option value="Environmental">Environmental Care</option>
                    <option value="Humanity">Community Support</option>
                    <option value="Cultural Preservation">Cultural Preservation</option>
                    <option value="Responsible Tourism">Responsible Tourism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                    Activity Type
                  </label>
                  <select
                    value={activityType}
                    onChange={(e) => setActivityType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF]"
                  >
                    {activityOptions[category].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Activity Title */}
              <div>
                <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                  Activity Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Cleaned 500m of Gopalpur Beach sand dunes"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF] placeholder-[#716680] dark:placeholder-[#9C8FB3]"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                  Detailed Description *
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what action you took, who benefited, and how local heritage or environment was protected..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF] placeholder-[#716680] dark:placeholder-[#9C8FB3]"
                  required
                ></textarea>
              </div>

              {/* Location & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                    Location / Village / District *
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Raghurajpur, Puri"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF] placeholder-[#716680] dark:placeholder-[#9C8FB3]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                    Date of Activity *
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF]"
                    required
                  />
                </div>
              </div>

              {/* Photograph or Video Proof URL */}
              <div>
                <label className="block text-xs font-bold text-[#302342] dark:text-[#F8F4FF] mb-1">
                  Photograph or Video Proof URL
                </label>
                <input
                  type="url"
                  value={proofUrl}
                  onChange={(e) => setProofUrl(e.target.value)}
                  placeholder="https://... link to photo or geo-tagged evidence"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/60 dark:bg-[#211238] border border-[#D9CCF2]/30 focus:outline-none focus:border-[#7955AE] text-[#302342] dark:text-[#F8F4FF] placeholder-[#716680] dark:placeholder-[#9C8FB3]"
                />
                <span className="text-[10px] text-[#716680] dark:text-[#D0C3E3] mt-1 block">
                  Geo-tagged images or receipts accelerate verification approval.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl btn-royal text-xs font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <FaUpload /> Submit Contribution for Verification
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Column (Span 5): Verification Status & Historical Deeds */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card rounded-3xl p-6 border border-[#D9CCF2]/25 space-y-4">
            <div>
              <h3 className="font-cinzel font-bold text-base text-[#302342] dark:text-[#F8F4FF]">
                Verification Status
              </h3>
              <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-0.5">
                Your submitted contributions awaiting review or approved.
              </p>
            </div>

            {myDeeds.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {myDeeds.map((deed) => (
                  <div
                    key={deed.id}
                    className="p-3.5 rounded-2xl glass-card border border-[#D9CCF2]/20 hover:border-[#BBA5E5] transition space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#7955AE] dark:text-[#D9CCF2]">{deed.activityType}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        deed.status === 'Approved'
                          ? 'bg-emerald-600/20 text-emerald-600 dark:text-emerald-400'
                          : deed.status === 'Rejected'
                          ? 'bg-rose-600/20 text-rose-500'
                          : 'bg-amber-600/20 text-amber-600 dark:text-amber-400'
                      }`}>
                        {deed.status === 'Approved' ? <FaCheckCircle /> : <FaHourglassHalf />}
                        {deed.status}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#302342] dark:text-[#F8F4FF]">
                      {deed.title}
                    </div>

                    <div className="text-[11px] text-[#716680] dark:text-[#D0C3E3] flex items-center justify-between pt-1 border-t border-[#D9CCF2]/20">
                      <span>{deed.location}</span>
                      {deed.status === 'Approved' && (
                        <span className="font-bold text-[#BBA5E5]">+{deed.awardedPoints} KP</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl glass-card text-center text-xs text-[#716680] dark:text-[#D0C3E3] space-y-1">
                <FaHourglassHalf className="text-2xl text-[#9C8FB3] mx-auto mb-1" />
                <div>No pending or verified submissions yet.</div>
                <div className="text-[11px]">Submit your first deed using the form.</div>
              </div>
            )}
          </div>

          {/* Verification Protocol Notice */}
          <div className="p-5 rounded-2xl glass-card border border-[#D9CCF2]/20 text-xs text-[#716680] dark:text-[#D0C3E3] space-y-2 bg-[#7955AE]/10">
            <div className="font-bold text-[#7955AE] dark:text-[#D9CCF2] flex items-center gap-1.5 text-xs">
              <FaShieldAlt /> Ethical Verification Protocol
            </div>
            <p className="text-[11px] leading-relaxed">
              To prevent fraudulent claims and protect local communities, Karma Points are never issued automatically. Each submission is reviewed by authorized village guardians or eco-council moderators.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
