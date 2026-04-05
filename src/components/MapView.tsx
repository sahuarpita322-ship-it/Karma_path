import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// @ts-ignore
import L from 'leaflet';

const getMarkerIcon = (type: string) => {
  let color = 'green'; // Default color
  if (type === 'Temple') color = 'orange';
  else if (type === 'Beach') color = 'blue';
  else if (type === 'Historic' || type === 'Heritage site') color = 'grey';
  else if (type === 'Mountain') color = 'violet';

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });
};

const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
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

export function MapView({ markers, userLocation }: MapProps) {
  const center = userLocation ? [userLocation.lat, userLocation.lng] : [20.2961, 85.8245];
  const zoom = userLocation ? 12 : 6;

  return (
    <div className="rounded-2xl border border-sand bg-white p-3 shadow-lg relative z-0">
      {/* @ts-ignore */}
      <MapContainer center={center as any} zoom={zoom} style={{ height: '300px', width: '100%' }}>
        <MapUpdater center={center as any} zoom={zoom} />
        {/* @ts-ignore */}
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
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
