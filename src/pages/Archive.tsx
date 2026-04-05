import { useMemo, useState } from 'react';
import { artifacts, tourismPlaces } from '../data/mock';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

export function Archive() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const regions = useMemo(() => ['All', ...new Set(tourismPlaces.map((a) => a.state))], []);
  const categories = useMemo(() => ['All', ...new Set(tourismPlaces.map((a) => a.category))], []);

  const filtered = useMemo(() => tourismPlaces.filter((a) => (selectedRegion === 'All' || a.state === selectedRegion) && (selectedCategory === 'All' || a.category === selectedCategory)), [selectedRegion, selectedCategory]);

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/konark.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <section className="mx-auto max-w-7xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
        <h1 className="text-3xl font-bold text-forest">Cultural Archive</h1>
        <p className="text-earth mt-1">Digital heritage library covering 60+ Indian tourist places.</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <select className="rounded-xl border border-white/50 bg-white/60 backdrop-blur-md p-2 focus:outline-none focus:ring-2 focus:ring-forest/50" onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
            {regions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <select className="rounded-xl border border-white/50 bg-white/60 backdrop-blur-md p-2 focus:outline-none focus:ring-2 focus:ring-forest/50" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {filtered.map((place) => (
            <Link to={`/place/${place.id}`} key={place.id} className="group rounded-2xl border border-white/50 overflow-hidden bg-white/60 backdrop-blur-md shadow-lg hover:shadow-xl relative block transition-all">
              <div className="relative">
                <img src={place.image || `https://picsum.photos/seed/${place.id}/800/500`} alt={place.name} className="h-40 w-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => downloadImage(place.image || `https://picsum.photos/seed/${place.id}/800/500`, `${place.name.replace(/\s+/g, '_')}.jpg`)}
                    className="bg-white/90 text-forest p-3 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg"
                    title="Download Image"
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-md font-semibold text-forest">{place.name}</h4>
                <p className="text-xs text-earth">{place.state} · {place.category}</p>
                <p className="text-xs text-gray-600">{place.highlight}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-forest">Artifact Vault</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {artifacts.slice(0, 12).map((artifact) => (
              <div key={artifact.id} className={`rounded-2xl border border-white/50 overflow-hidden bg-white/60 backdrop-blur-md shadow-lg ${artifact.embedUrl ? 'md:col-span-2' : ''}`}>
                {artifact.embedUrl ? (
                  <iframe
                    title={artifact.name}
                    className="w-full h-64 bg-white/30"
                    src={artifact.embedUrl}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                  ></iframe>
                ) : (
                  <img src={artifact.image.startsWith('http') ? artifact.image + '?auto=format&fit=crop&w=400&q=80' : artifact.image} alt={artifact.name} className="h-32 w-full object-cover" />
                )}
                <div className="p-2">
                  <p className="text-xs text-forest font-semibold">{artifact.name}</p>
                  <p className="text-xs text-earth">{artifact.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
