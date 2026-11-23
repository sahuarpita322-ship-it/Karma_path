import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// @ts-ignore
import L from 'leaflet';

const getMarkerIcon = (type: string) => {
  let color = '#10B981'; // Green
  if (type === 'Temple') color = '#F59E0B'; // Amber
  else if (type === 'Beach') color = '#3B82F6'; // Blue
  else if (type === 'Historic' || type === 'Heritage site') color = '#8B5CF6'; // Purple
  else if (type === 'Mountain') color = '#EC4899'; // Pink

  return L.divIcon({
    className: 'custom-svg-marker',
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 2px solid #FFFFFF;
      box-shadow: 0 4px 10px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
    "><div style="width: 8px; height: 8px; background-color: #FFFFFF; border-radius: 50%; transform: rotate(45deg);"></div></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });
};

const userIcon = L.divIcon({
  className: 'custom-user-marker',
  html: `<div style="
    background-color: #EF4444;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 3px solid #FFFFFF;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.4), 0 4px 10px rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
  "><div style="width: 8px; height: 8px; background-color: #FFFFFF; border-radius: 50%;"></div></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  popupAnchor: [0, -13]
});

function MapUpdater({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

type MapProps = { 
  markers: Array<{ id: string; lat: number; lng: number; label: string; type: string }>; 
  userLocation?: { lat: number; lng: number };
};

const OFFLINE_TILE_URL = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><rect width="256" height="256" fill="%23180B2B"/><path d="M0 64 H256 M0 128 H256 M0 192 H256 M64 0 V256 M128 0 V256 M192 0 V256" stroke="%23301654" stroke-width="1" stroke-dasharray="3 3"/><circle cx="128" cy="128" r="2.5" fill="%237955AE" opacity="0.6"/><text x="128" y="132" font-family="sans-serif" font-size="8" fill="%23B9A5DF" opacity="0.35" text-anchor="middle">ODISHA HERITAGE GRID</text></svg>`;

export function MapView({ markers, userLocation }: MapProps) {
  const center = userLocation ? [userLocation.lat, userLocation.lng] : [20.2961, 85.8245];
  const zoom = userLocation ? 12 : 6;

  return (
    <div className="rounded-2xl border border-sand bg-white dark:bg-[#1E0E34] p-3 shadow-lg relative z-0">
      {/* @ts-ignore */}
      <MapContainer center={center as any} zoom={zoom} style={{ height: '300px', width: '100%' }}>
        <MapUpdater center={center as any} zoom={zoom} />
        {/* @ts-ignore */}
        <TileLayer 
          attribution="&copy; OpenStreetMap | Karma-Path Offline Map" 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          errorTileUrl={OFFLINE_TILE_URL}
        />
        
        {userLocation && (
          // @ts-ignore
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup><strong>You are here</strong></Popup>
          </Marker>
        )}

        {markers.map((m) => (
          // @ts-ignore
          <Marker key={m.id} position={[m.lat, m.lng]} icon={getMarkerIcon(m.type)}>
            <Popup>
              <strong>{m.label}</strong><br />{m.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
