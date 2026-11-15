import React from 'react';
import { 
  FaCompass, 
  FaHandsHelping, 
  FaCamera, 
  FaCheckCircle, 
  FaClock, 
  FaTimesCircle, 
  FaAward, 
  FaShieldAlt 
} from 'react-icons/fa';

export function HowItWorksFourSteps() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Discover',
      odiaTitle: 'ସନ୍ଧାନ କରନ୍ତୁ',
      icon: <FaCompass className="text-xl" />,
      color: 'from-purple-500 to-indigo-600',
      description: 'Explore verified activities across coastal cleanups, tree plantations, meal distribution, children tutoring, and heritage preservation.'
    },
    {
      step: 'Step 2',
      title: 'Participate',
      odiaTitle: 'ଅଂଶଗ୍ରହଣ କରନ୍ତୁ',
      icon: <FaHandsHelping className="text-xl" />,
      color: 'from-amber-500 to-orange-600',
      description: 'Perform the good deed with honesty and love in the real world—individually, with family, or alongside local registered community NGOs.'
    },
    {
      step: 'Step 3',
      title: 'Submit Proof',
      odiaTitle: 'ପ୍ରମାଣ ଦାଖଲ କରନ୍ତୁ',
      icon: <FaCamera className="text-xl" />,
      color: 'from-emerald-500 to-teal-600',
      description: 'Upload genuine action photos, date, location, and details. Optional verified organization verification for institutional events.'
    },
    {
      step: 'Step 4',
      title: 'Get Verified',
      odiaTitle: 'ପ୍ରମାଣିତ ହୁଅନ୍ତୁ',
      icon: <FaAward className="text-xl" />,
      color: 'from-[#7955AE] to-pink-600',
      description: 'Authorized moderators verify your deed. Points instantly credit to your wallet and your official Digital Certificate is generated!'
    }
  ];

  return (
    <section className="space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2] border border-[#7955AE]/30 inline-block">
          Simple 4-Step Process
        </span>
        <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-[#180B2B] dark:text-white">
          How to Earn Karma Points
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif">
          Karma is never bought with money. It is earned through genuine participation, compassionate effort, and verified positive social impact.
        </p>
      </div>

      {/* 4-Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st, i) => (
          <div
            key={i}
            className="p-5 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#7955AE] dark:text-[#B9A5DF]">
                  {st.step}
                </span>
                <span className="text-xs font-serif font-bold text-stone-400 dark:text-stone-400">
                  {st.odiaTitle}
                </span>
              </div>

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${st.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                {st.icon}
              </div>

              <h3 className="text-lg font-cinzel font-bold text-[#180B2B] dark:text-white">
                {st.title}
              </h3>

              <p className="text-xs text-stone-600 dark:text-[#D0C3E3] font-serif leading-relaxed">
                {st.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[#7955AE]/10 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-[#7955AE] dark:text-[#B9A5DF]">
              <span>Verified Step</span>
              <span className="text-xs">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Explicit Verification Statuses Display */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#7955AE] dark:text-amber-300" />
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#180B2B] dark:text-white">
              Submission Review Lifecycle & Clear Statuses
            </h4>
          </div>
          <span className="text-[11px] font-serif text-stone-500 dark:text-stone-400 italic">
            Zero points awarded for unverified or rejected submissions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
            <FaClock className="text-amber-500 text-base shrink-0 mt-0.5 animate-spin" />
            <div>
              <div className="font-bold text-amber-900 dark:text-amber-200">
                1. Pending Verification
              </div>
              <div className="text-[11px] text-stone-600 dark:text-stone-300 font-serif pt-0.5">
                Moderator and NGO teams review submitted photos, geolocation, and timestamps.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5">
            <FaCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-emerald-900 dark:text-emerald-200">
                2. Approved – Points Awarded
              </div>
              <div className="text-[11px] text-stone-600 dark:text-stone-300 font-serif pt-0.5">
                Authenticity confirmed. Points added to user balance and certificate generated.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5">
            <FaTimesCircle className="text-rose-500 text-base shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-rose-900 dark:text-rose-200">
                3. Rejected – Reason Provided
              </div>
              <div className="text-[11px] text-stone-600 dark:text-stone-300 font-serif pt-0.5">
                Duplicate, blurry or invalid proof. A specific reason is given; 0 points awarded.
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
