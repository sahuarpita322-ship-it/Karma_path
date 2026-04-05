import React, { useMemo, useState } from 'react';
import { artifacts } from '../data/mock';
import { MuseumCard } from '../components/MuseumCard';
import { FaDownload, FaPlay, FaPause, FaUndo, FaRedo, FaExpand } from 'react-icons/fa';

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

export function Museum() {
  const [selected, setSelected] = useState<typeof artifacts[0] | null>(null);
  const [angle, setAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const displayed = useMemo(() => artifacts, []);

  // Auto-rotation effect
  React.useEffect(() => {
    let interval: number;
    if (isRotating && selected) {
      interval = setInterval(() => {
        setAngle(prev => (prev + rotationSpeed) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating, selected, rotationSpeed]);

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12 overflow-hidden">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/sword-with-dragon-it-is-shown-picture_869640-221276.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <section className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-forest via-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
            Virtual Museum Gallery
          </h1>
          <p className="text-earth/70 text-lg">Explore artifacts with immersive 3D views and download high-quality images</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayed.map((artifact) => (
            <MuseumCard key={artifact.id} artifact={artifact} onSelect={setSelected} />
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/30 bg-white/85 backdrop-blur-xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Header with close and download */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-forest to-emerald-600 bg-clip-text text-transparent">
                    {selected.name}
                  </h2>
                  <p className="text-earth/70">{selected.category} • {selected.location} • {selected.year}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => downloadImage(selected.image, `${selected.name.replace(/\s+/g, '_')}_high_res.jpg`)}
                    className="flex items-center gap-2 bg-gradient-to-r from-forest to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaDownload className="text-sm" />
                    Download
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-earth/70 hover:text-forest transition-colors duration-300 p-2 rounded-full hover:bg-sand/20"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Image with 3D controls */}
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-sand/20 p-4">
                    {selected.embedUrl ? (
                      <iframe
                        title={selected.name}
                        className="w-full h-80 rounded-xl shadow-lg bg-sand/20"
                        src={selected.embedUrl}
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={selected.image}
                          alt={selected.name}
                          className="w-full h-80 object-cover rounded-xl shadow-lg"
                          style={{
                            transform: `perspective(1000px) rotateY(${angle}deg)`,
                            transition: isRotating ? 'none' : 'transform 0.3s ease'
                          }}
                        />

                        {/* 3D View Controls for 2D images */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex items-center justify-between text-white text-sm">
                            <div className="flex items-center gap-2">
                              <FaExpand className="text-xs" />
                              <span>3D View: {angle}°</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setIsRotating(!isRotating)}
                                className="p-1 rounded bg-white/20 hover:bg-white/30 transition-colors"
                              >
                                {isRotating ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
                              </button>
                              <button
                                onClick={() => setAngle(prev => prev - 15)}
                                className="p-1 rounded bg-white/20 hover:bg-white/30 transition-colors"
                              >
                                <FaUndo className="text-xs" />
                              </button>
                              <button
                                onClick={() => setAngle(prev => prev + 15)}
                                className="p-1 rounded bg-white/20 hover:bg-white/30 transition-colors"
                              >
                                <FaRedo className="text-xs" />
                              </button>
                              <input
                                type="range"
                                min="0.5"
                                max="3"
                                step="0.5"
                                value={rotationSpeed}
                                onChange={(e) => setRotationSpeed(Number(e.target.value))}
                                className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Instructions */}
                  {selected.embedUrl ? (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">🎭 Interactive 3D Model</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Rotate:</strong> Click and drag the model</li>
                        <li>• <strong>Zoom:</strong> Scroll or pinch</li>
                        <li>• <strong>Pan:</strong> Right-click and drag</li>
                        <li>• Powered by Sketchfab</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">🎭 3D View Controls</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Auto-rotate:</strong> Click play/pause for continuous rotation</li>
                        <li>• <strong>Manual control:</strong> Use arrow buttons for precise positioning</li>
                        <li>• <strong>Speed control:</strong> Adjust rotation speed with the slider</li>
                        <li>• <strong>Best results:</strong> Use in full-screen for immersive experience</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Artifact details */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-forest/5 to-emerald-50 border border-forest/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-forest mb-3">Artifact Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-earth/70">Category:</span>
                        <p className="text-forest font-medium">{selected.category}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-earth/70">Origin:</span>
                        <p className="text-forest font-medium">{selected.location}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-earth/70">Period:</span>
                        <p className="text-forest font-medium">{selected.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">Historical Context</h3>
                    <p className="text-amber-700 leading-relaxed">{selected.text}</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Download Options</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => downloadImage(selected.image, `${selected.name.replace(/\s+/g, '_')}_HD.jpg`)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <FaDownload className="text-sm" />
                        Download HD Image
                      </button>
                      <p className="text-xs text-purple-600 text-center">
                        High-resolution image for personal use and education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
