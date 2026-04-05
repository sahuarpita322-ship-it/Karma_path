import type { Artifact } from '../data/mock';
import { FaDownload } from 'react-icons/fa';

type MuseumCardProps = { artifact: Artifact; onSelect: (artifact: Artifact) => void };

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

export function MuseumCard({ artifact, onSelect }: MuseumCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-white/50 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                downloadImage(artifact.image, `${artifact.name.replace(/\s+/g, '_')}.jpg`);
              }}
              className="bg-white/90 backdrop-blur-sm text-forest p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
              title="Download Image"
            >
              <FaDownload className="text-sm" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4" onClick={() => onSelect(artifact)}>
        <h4 className="font-bold text-forest text-lg mb-1">{artifact.name}</h4>
        <p className="text-sm text-earth/70 mb-2">{artifact.category} • {artifact.location}</p>
        <p className="text-xs text-earth/60">{artifact.year}</p>
      </div>
    </div>
  );
}
