import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/store';
import { culturalPlaceDetails, tourismPlaces } from '../data/mock';
import { AIGuideAssistant } from '../components/AIGuideAssistant';
import { PlaceChatbot } from '../components/PlaceChatbot';
import { MapView } from '../components/MapView';
import { FaArrowLeft } from 'react-icons/fa';

export function CulturalPlacePage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useStore();
  const navigate = useNavigate();
  
  // Find the place in the mock data
  let place: any = id ? culturalPlaceDetails[id as keyof typeof culturalPlaceDetails] : null;

  // Smart Dynamic Fallback for all other 65+ places in the archive
  if (!place && id) {
    const basic = tourismPlaces.find(p => p.id === id);
    if (basic) {
      const typeEn = basic.category.toLowerCase();
      place = {
        name: { en: basic.name, hi: basic.name, or: basic.name },
        location: `${basic.state}, India`,
        tagline: {
          en: `A magnificent ${typeEn} located in ${basic.state}.`,
          hi: `${basic.state} में स्थित एक शानदार ${typeEn}।`,
          or: `${basic.state} ରେ ଅବସ୍ଥିତ ଏକ ଚମତ୍କାର ${typeEn}।`
        },
        heroImage: basic.image || `https://picsum.photos/seed/${id}/1200/800`,
        overview: {
          en: `${basic.name} is a renowned ${typeEn} in ${basic.state}. Known widely for its ${basic.highlight.toLowerCase()}, it stands as a testament to the region's heritage and natural beauty.`,
          hi: `${basic.name} ${basic.state} में एक प्रसिद्ध ${typeEn} है। अपने ${basic.highlight.toLowerCase()} के लिए व्यापक रूप से जाना जाने वाला, यह क्षेत्र की विरासत और प्राकृतिक सुंदरता के प्रमाण के रूप में खड़ा है।`,
          or: `${basic.name} ହେଉଛି ${basic.state} ରେ ଏକ ପ୍ରସିଦ୍ଧ ${typeEn}। ଏହାର ${basic.highlight.toLowerCase()} ପାଇଁ ଜଣାଶୁଣା, ଏହା ଅଞ୍ଚଳର ଐତିହ୍ୟ ଏବଂ ପ୍ରାକୃତିକ ସୌନ୍ଦର୍ଯ୍ୟର ପ୍ରମାଣ।`
        },
        whyFamous: {
          en: `It is highly famous for its ${basic.highlight.toLowerCase()}, making it a must-visit destination in India.`,
          hi: `यह अपने ${basic.highlight.toLowerCase()} के लिए अत्यधिक प्रसिद्ध है, जो इसे भारत में एक दर्शनीय स्थल बनाता है।`,
          or: `ଏହା ଏହାର ${basic.highlight.toLowerCase()} ପାଇଁ ଅତ୍ୟନ୍ତ ପ୍ରସିଦ୍ଧ, ଯାହା ଏହାକୁ ଭାରତରେ ଏକ ନିଶ୍ଚିତ ପରିଦର୍ଶନୀୟ ସ୍ଥାନ କରିଥାଏ।`
        },
        history: {
          en: `The history of ${basic.name} is deeply connected with the cultural timeline of ${basic.state}. Over the years, it has preserved its authentic essence, attracting historians and travelers alike.`,
          hi: `${basic.name} का इतिहास ${basic.state} की सांस्कृतिक समयरेखा से गहराई से जुड़ा हुआ है। इन वर्षों में, इसने अपने प्रामाणिक सार को संरक्षित किया है।`,
          or: `${basic.name} ର ଇତିହାସ ${basic.state} ର ସାଂସ୍କୃତିକ ସମୟରେଖା ସହିତ ଗଭୀର ଭାବରେ ଜଡିତ। ବର୍ଷ ବର୍ଷ ଧରି, ଏହା ନିଜର ପ୍ରକୃତ ସାରକୁ ସଂରକ୍ଷଣ କରିଛି।`
        },
        architecture: {
          en: `The site features structural elements characteristic of a classical ${typeEn}. Its layout and design reflect the traditional aesthetics of the region.`,
          hi: `साइट में एक शास्त्रीय ${typeEn} की संरचनात्मक तत्वों की विशेषता है। इसका लेआउट और डिज़ाइन क्षेत्र के पारंपरिक सौंदर्यशास्त्र को दर्शाता है।`,
          or: `ଏହି ସାଇଟ୍‌ରେ ଏକ ଶାସ୍ତ୍ରୀୟ ${typeEn} ର ଗଠନମୂଳକ ଉପାଦାନଗୁଡ଼ିକ ରହିଛି। ଏହାର ଡିଜାଇନ୍ ଅଞ୍ଚଳର ପାରମ୍ପାରିକ ସୌନ୍ଦର୍ଯ୍ୟକୁ ପ୍ରତିଫଳିତ କରେ।`
        },
        culturalImportance: {
          en: `As a key landmark, it plays a significant role in local tourism, representing the vibrant cultural identity of ${basic.state}.`,
          hi: `एक प्रमुख मील के पत्थर के रूप में, यह स्थानीय पर्यटन में महत्वपूर्ण भूमिका निभाता है, जो ${basic.state} की जीवंत सांस्कृतिक पहचान का प्रतिनिधित्व करता है।`,
          or: `ଏକ ପ୍ରମୁଖ ସ୍ଥାନ ଭାବରେ, ଏହା ସ୍ଥାନୀୟ ପର୍ଯ୍ୟଟନରେ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଭୂମିକା ଗ୍ରହଣ କରେ, ଯାହା ${basic.state} ର ଜୀବନ୍ତ ସାଂସ୍କୃତିକ ପରିଚୟକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ।`
        },
        facts: [
          { en: `Located prominently in ${basic.state}.`, hi: `प्रमुख रूप से ${basic.state} में स्थित है।`, or: `${basic.state} ରେ ଅବସ୍ଥିତ।` },
          { en: `Categorized under ${basic.category} attractions.`, hi: `${basic.category} आकर्षणों के तहत वर्गीकृत।`, or: `${basic.category} ଆକର୍ଷଣ ଅଧୀନରେ ବର୍ଗୀକୃତ।` },
          { en: `A major center for ${basic.highlight.toLowerCase()}.`, hi: `${basic.highlight.toLowerCase()} के लिए एक प्रमुख केंद्र।`, or: `${basic.highlight.toLowerCase()} ପାଇଁ ଏକ ପ୍ରମୁଖ କେନ୍ଦ୍ର।` }
        ],
        visitorInfo: {
          bestTimeToVisit: { en: 'Year-round, primarily October to March', hi: 'साल भर, मुख्य रूप से अक्टूबर से मार्च', or: 'ବର୍ଷସାରା, ମୁଖ୍ୟତଃ ଅକ୍ଟୋବରରୁ ମାର୍ଚ୍ଚ' },
          entry: { en: 'Check local tourism guidelines', hi: 'स्थानीय पर्यटन दिशानिर्देशों की जांच करें', or: 'ସ୍ଥାନୀୟ ପର୍ଯ୍ୟଟନ ନିର୍ଦ୍ଦେଶାବଳୀ ଯାଞ୍ଚ କରନ୍ତୁ' },
          tips: [
            { en: 'Hire a local guide to fully appreciate the significance of the place.', hi: 'स्थान के महत्व की पूरी तरह से सराहना करने के लिए एक स्थानीय गाइड किराए पर लें।', or: 'ସ୍ଥାନର ଗୁରୁତ୍ୱକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ବୁଝିବା ପାଇଁ ଏକ ସ୍ଥାନୀୟ ଗାଇଡ୍ ନିଯୁକ୍ତ କରନ୍ତୁ।' }
          ]
        },
        images: [],
        mapLocation: { lat: 20.5937, lng: 78.9629 } // Geographic center of India as generic fallback
      };
    }
  }

  if (!place) {
    return (
      <main className="min-h-screen bg-sand p-8 pt-32 text-center">
        <h1 className="text-3xl font-bold text-forest">Information Incoming!</h1>
        <p className="text-earth mt-4">We are still compiling the detailed interactive archive for this specific place.</p>
        <button onClick={() => navigate('/archive')} className="mt-6 text-emerald-600 font-bold hover:underline">Go Back</button>
      </main>
    );
  }

  // The script that the AI floating assistant will narrate
  const narrationText = `${place.name[language]}. ${place.tagline[language]} ${place.overview[language]} ${place.history[language]}`;

  return (
    <main className="min-h-screen relative pb-12">
      {/* Full-screen background image with light overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${place.heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      </div>

      <div className="mx-auto max-w-5xl p-4 md:p-8 pt-24 space-y-8 relative z-10">
        <div>
          <button onClick={() => navigate('/archive')} className="mb-6 flex items-center gap-2 text-forest hover:text-emerald-700 w-fit bg-white/50 px-4 py-2 rounded-full backdrop-blur-md transition shadow-sm border border-white/50">
            <FaArrowLeft /> Back to Archive
          </button>
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-forest drop-shadow-sm">{place.name[language]}</h1>
            <p className="mt-2 text-lg md:text-2xl text-earth font-medium flex items-center gap-2">
              <span>📍 {place.location}</span>
            </p>
            <p className="mt-2 text-md md:text-xl font-semibold italic text-emerald-800">{place.tagline[language]}</p>
          </div>
        </div>

        <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 md:p-8 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold text-forest mb-4">Overview</h2>
          <p className="text-earth text-lg leading-relaxed">{place.overview[language]}</p>
          <h3 className="text-xl font-bold text-forest mt-6 mb-2">Why it is famous</h3>
          <p className="text-earth leading-relaxed">{place.whyFamous[language]}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 md:p-8 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-forest mb-4">History</h2>
            <p className="text-earth leading-relaxed">{place.history[language]}</p>
          </section>
          <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 md:p-8 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-forest mb-4">Architecture</h2>
            <p className="text-earth leading-relaxed">{place.architecture[language]}</p>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-forest mb-4">Interesting Facts</h2>
            <ul className="list-disc pl-5 space-y-3 text-earth">
              {place.facts.map((fact: Record<string, string>, i: number) => (
                <li key={i} className="leading-relaxed">{fact[language]}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-forest mb-4">Visitor Information</h2>
            <div className="space-y-4 text-earth">
              <p><strong>🕒 Best Time to Visit:</strong> {place.visitorInfo.bestTimeToVisit[language]}</p>
              <p><strong>🎟️ Entry Details:</strong> {place.visitorInfo.entry[language]}</p>
              <div>
                <strong>💡 Travel Tips:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  {place.visitorInfo.tips.map((tip: Record<string, string>, i: number) => <li key={i}>{tip[language]}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold text-forest mb-4">Location</h2>
          <div className="rounded-xl overflow-hidden shadow-inner">
            <MapView markers={[{ id: '1', lat: place.mapLocation.lat, lng: place.mapLocation.lng, label: place.name[language], type: 'Historic' }]} />
          </div>
        </section>

        <PlaceChatbot placeName={place.name[language]} />
      </div>

      <AIGuideAssistant text={narrationText} language={language} />
    </main>
  );
}