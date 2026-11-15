import { useParams, Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaLandmark, 
  FaUtensils, 
  FaMusic, 
  FaPalette, 
  FaCalendarAlt, 
  FaLanguage, 
  FaCompass,
  FaCheckCircle
} from 'react-icons/fa';
import { all30OdishaDistricts } from '../data/districtsData';
import { useStore } from '../context/store';

export function DistrictDetailPage() {
  const { id } = useParams<{ id: string }>();
  const destinations = useStore((s) => s.destinations);
  const villages = useStore((s) => s.villages);

  const district = all30OdishaDistricts.find((d) => d.id === id);

  if (!district) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-cinzel font-bold text-stone-900 dark:text-white">District Not Found</h1>
        <p className="text-sm text-stone-500">The district you are looking for does not exist in our Odisha database.</p>
        <Link
          to="/districts"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs"
        >
          <FaArrowLeft /> Back to All 30 Districts
        </Link>
      </div>
    );
  }

  // Find destinations belonging to this district
  const relatedDestinations = destinations.filter(
    (dest) => dest.district.toLowerCase() === district.name.toLowerCase()
  );

  // Find villages belonging to this district
  const relatedVillages = villages.filter(
    (vil) => vil.district.toLowerCase() === district.name.toLowerCase()
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Top Navigation Breadcrumb */}
      <div>
        <Link
          to="/districts"
          className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
        >
          <FaArrowLeft /> Back to All 30 Districts of Odisha
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden border border-orange-500/30 bg-stone-900 text-white shadow-2xl">
        <div className="h-72 sm:h-96 w-full relative">
          <img
            src={district.heroImage}
            alt={district.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/bhubaneswar.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-stone-900/60 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-600 text-white shadow">
                {district.region} Region
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
                HQ: {district.headquarters}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600/90 text-white">
                <FaCheckCircle className="text-[10px]" /> Verified District Record
              </span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-cinzel font-black tracking-tight text-white">
              {district.name} District
            </h1>
            <p className="text-lg sm:text-xl text-amber-300 font-serif italic">
              {district.odiaName}
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Geography */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Detailed Cultural Background */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-4">
            <h2 className="text-xl font-cinzel font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <FaLandmark className="text-orange-500" /> Introduction & Cultural Heritage
            </h2>
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              {district.introduction}
            </p>
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-stone-800 dark:text-stone-200 space-y-1">
              <div className="font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider text-[11px]">
                Geographical Landscape
              </div>
              <p>{district.geography}</p>
            </div>
          </div>

          {/* Destinations in this District */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-cinzel font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <FaCompass className="text-amber-500" /> Key Destinations in {district.name} ({relatedDestinations.length})
              </h2>
              <Link to="/destinations" className="text-xs font-bold text-orange-600 hover:underline">
                View All Odisha Destinations &rarr;
              </Link>
            </div>

            {relatedDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedDestinations.map((dest) => (
                  <Link
                    key={dest.id}
                    to={`/destination/${dest.id}`}
                    className="group glass-card rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-orange-500/50 transition flex flex-col justify-between"
                  >
                    <div className="h-36 overflow-hidden relative bg-stone-900">
                      <img
                        src={dest.heroImage}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/bhubaneswar.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 right-3">
                        <div className="text-sm font-cinzel font-bold text-white truncate">{dest.name}</div>
                        <div className="text-[10px] text-amber-300">{dest.category}</div>
                      </div>
                    </div>
                    <div className="p-3 text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between">
                      <span className="truncate">{dest.tagline}</span>
                      <span className="font-bold text-orange-500 flex-shrink-0">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl glass-card text-center border border-dashed border-stone-300 dark:border-stone-700">
                <div className="text-xs text-stone-500">Major district attractions documented:</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {district.majorAttractions.map((attr, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Villages & Artisan Clusters */}
          <div className="space-y-4">
            <h2 className="text-xl font-cinzel font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <FaLandmark className="text-emerald-500" /> Craft Villages & Rural Communities
            </h2>
            {relatedVillages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedVillages.map((vil) => (
                  <Link
                    key={vil.id}
                    to={`/village/${vil.id}`}
                    className="p-4 rounded-2xl glass-card border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 transition space-y-2 block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm text-stone-900 dark:text-white">{vil.name}</div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 font-bold">
                        {vil.speciality.slice(0, 24)}...
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2">
                      {vil.introduction}
                    </p>
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      View Village Profile &rarr;
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-2xl glass-card border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
                Famous craft and cultural settlements: <span className="font-semibold text-stone-800 dark:text-stone-200">{district.famousVillages.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Cultural Metadata Sidebar */}
        <div className="space-y-6">
          
          {/* Handloom & Handicrafts Card */}
          <div className="glass-card p-6 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-2">
              <FaPalette /> Handloom & Handicrafts
            </h3>
            <ul className="space-y-2">
              {district.handloomsAndHandicrafts.map((craft, i) => (
                <li key={i} className="text-xs text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  {craft}
                </li>
              ))}
            </ul>
          </div>

          {/* Local Cuisine & Traditional Foods */}
          <div className="glass-card p-6 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <FaUtensils /> Traditional Culinary Delicacies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {district.localFood.map((food, i) => (
                <span key={i} className="px-2.5 py-1 rounded-xl text-xs bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 font-medium">
                  {food}
                </span>
              ))}
            </div>
          </div>

          {/* Folk Songs & Dances */}
          <div className="glass-card p-6 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <FaMusic /> Folk Music & Living Traditions
            </h3>
            <div className="space-y-1.5">
              {district.folkMusicAndDances.map((folk, i) => (
                <div key={i} className="text-xs text-stone-700 dark:text-stone-300">
                  • {folk}
                </div>
              ))}
            </div>
          </div>

          {/* Festivals & Languages */}
          <div className="glass-card p-6 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-4">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 flex items-center gap-1.5 mb-1.5">
                <FaCalendarAlt /> Major Festivals
              </div>
              <div className="text-xs text-stone-700 dark:text-stone-300">
                {district.festivals.join(', ')}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 flex items-center gap-1.5 mb-1.5">
                <FaLanguage /> Languages & Dialects
              </div>
              <div className="text-xs text-stone-700 dark:text-stone-300">
                {district.languagesAndDialects.join(', ')}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
