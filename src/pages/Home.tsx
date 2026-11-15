import { useNavigate } from 'react-router-dom';
import { HeroCinematic } from '../components/HeroCinematic';
import { ShowcaseStaggeredNarrative } from '../components/ShowcaseStaggeredNarrative';
import { CulturalOdishaShowcase } from '../components/CulturalOdishaShowcase';
import { KarmaForGoodHomeSection } from '../components/karma-for-good/KarmaForGoodHomeSection';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-10 sm:space-y-14 pb-20">
      
      {/* =========================================================================
          SECTION 1: HERO CINEMATIC (SHREE JAGANNATH TEMPLE PURI & CLOUDY EFFECTS)
          Full-bleed authentic temple sunset, drifting soft clouds, and purpose-driven search
          ========================================================================= */}
      <HeroCinematic onSearch={(q) => navigate(`/destinations?q=${encodeURIComponent(q)}`)} />

      {/* =========================================================================
          SECTION 2: WHAT KARMA-PATH DOES (DOING GOOD WORK, ARTISAN & HANDLOOM UPLIFT)
          Social Impact, Karma Tokens (KT), Handloom Weavers, Rare Crafts & Safe Path
          ========================================================================= */}
      <ShowcaseStaggeredNarrative />

      {/* =========================================================================
          SECTION 3: LIVING CULTURAL SOUL OF ODISHA (DANCE, MUSIC & FESTIVALS)
          Odissi, Chhau, Sambalpuri, Geeta Govinda, Ratha Yatra, Raja Parba, Bali Yatra
          ========================================================================= */}
      <CulturalOdishaShowcase />

      {/* =========================================================================
          SECTION 4: KARMA FOR GOOD (SOCIAL IMPACT, DEEDS & CERTIFICATES)
          Replaces the former 30 Districts section completely with authentic social impact
          ========================================================================= */}
      <KarmaForGoodHomeSection />

    </div>
  );
}
export default Home;
