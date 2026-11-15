import React, { useState } from 'react';
import { KarmaForGoodHero } from '../components/karma-for-good/KarmaForGoodHero';
import { HowItWorksFourSteps } from '../components/karma-for-good/HowItWorksFourSteps';
import { ExploreGoodDeeds } from '../components/karma-for-good/ExploreGoodDeeds';
import { FindOpportunities } from '../components/karma-for-good/FindOpportunities';
import { MyKarmaDashboard } from '../components/karma-for-good/MyKarmaDashboard';
import { CommunityImpactWall } from '../components/karma-for-good/CommunityImpactWall';
import { DigitalCertificateModal, type CertificateData } from '../components/karma-for-good/DigitalCertificateModal';
import { SubmitGoodDeedModal } from '../components/karma-for-good/SubmitGoodDeedModal';
import { AdminModerationPanel } from '../components/karma-for-good/AdminModerationPanel';
import type { KarmaActivity } from '../data/karmaForGoodData';
import { FaHeart, FaPlusCircle, FaShieldAlt } from 'react-icons/fa';

export function KarmaForGood() {
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [selectedActivityForSubmit, setSelectedActivityForSubmit] = useState<KarmaActivity | null>(null);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [viewingCertificate, setViewingCertificate] = useState<CertificateData | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectActivityToParticipate = (activity: KarmaActivity) => {
    setSelectedActivityForSubmit(activity);
    setSubmitModalOpen(true);
  };

  const handleOpenGeneralSubmitModal = () => {
    setSelectedActivityForSubmit(null);
    setSubmitModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Animated Hero Experience */}
      <KarmaForGoodHero
        onOpenSubmitModal={handleOpenGeneralSubmitModal}
        onScrollToSection={scrollToSection}
        onOpenAdminPanel={() => setAdminPanelOpen(true)}
      />

      {/* 2. Four-Step Process (Discover, Participate, Submit Proof, Get Verified) */}
      <HowItWorksFourSteps />

      {/* 3. Explore Good Deeds (12 Interactive Cards) */}
      <ExploreGoodDeeds
        onSelectActivityToParticipate={handleSelectActivityToParticipate}
      />

      {/* 4. Find Opportunities Near You */}
      <FindOpportunities />

      {/* 5. My Karma Dashboard & Milestone Badges */}
      <MyKarmaDashboard
        onViewCertificate={(cert) => setViewingCertificate(cert)}
        onOpenSubmitModal={handleOpenGeneralSubmitModal}
      />

      {/* 6. Community Impact Wall */}
      <CommunityImpactWall />

      {/* 7. Final Inspiring Message Banner */}
      <section className="p-8 sm:p-12 rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#200C38] via-[#2F1551] to-[#180B2B] text-center border border-[#7955AE]/40 shadow-2xl space-y-4 text-white relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7955AE] to-pink-600 text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
          <FaHeart className="animate-pulse" />
        </div>
        <div className="space-y-2 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-cinzel font-black tracking-wide text-white">
            “Travel with Purpose. Help with Kindness. Leave Behind Good Karma.”
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 font-serif italic pt-1">
            Every step in Odisha can nourish a sapling, feed a hungry family, empower a rural artisan, or teach a child. Join hands with us to build a kinder, greener world.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleOpenGeneralSubmitModal}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5"
          >
            <FaPlusCircle size={14} />
            <span>“I Did Something Good”</span>
          </button>
          <button
            onClick={() => scrollToSection('explore-deeds')}
            className="px-6 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
          >
            Browse All Activities
          </button>
        </div>
      </section>

      {/* Modals */}
      <SubmitGoodDeedModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        prefillActivity={selectedActivityForSubmit}
      />

      <DigitalCertificateModal
        certificate={viewingCertificate}
        onClose={() => setViewingCertificate(null)}
      />

      <AdminModerationPanel
        isOpen={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
      />

    </div>
  );
}

export default KarmaForGood;
