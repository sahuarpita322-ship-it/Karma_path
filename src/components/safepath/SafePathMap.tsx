import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// @ts-ignore
import L from 'leaflet';
import { LocationCoordinate, JourneyRouteOption } from '../../data/safePathTypes';

// Component to handle map clicks for selecting points
function MapClickHandler({ 
  pickingMode, 
  onLocationPicked 
}: { 
  pickingMode: 'origin' | 'destination' | 'waypoint' | null;
  onLocationPicked: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      if (pickingMode) {
        onLocationPicked(e.latlng.lat, e.latlng.lng);
      }
    }
  });
  return null;
}

// Auto fit map bounds when route or points change
function MapBoundsManager({
  origin,
  destination,
  selectedRoute,
  userLocation
}: {
  origin: LocationCoordinate | null;
  destination: LocationCoordinate | null;
  selectedRoute: JourneyRouteOption | null;
  userLocation: { lat: number; lng: number } | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (selectedRoute && selectedRoute.coordinates.length > 0) {
      const bounds = L.latLngBounds(selectedRoute.coordinates.map(c => [c[0], c[1]]));
      if (userLocation) bounds.extend([userLocation.lat, userLocation.lng]);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    } else if (origin && destination) {
      const bounds = L.latLngBounds([
        [origin.lat, origin.lng],
        [destination.lat, destination.lng]
      ]);
      if (userLocation) bounds.extend([userLocation.lat, userLocation.lng]);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    } else if (userLocation) {
      map.setView([userLocation.lat, userLocation.lng], 14);
    } else if (origin) {
      map.setView([origin.lat, origin.lng], 13);
    }
  }, [map, origin, destination, selectedRoute, userLocation]);

  return null;
}

interface SafePathMapProps {
  origin: LocationCoordinate | null;
  destination: LocationCoordinate | null;
  waypoints?: LocationCoordinate[];
  userLocation: { lat: number; lng: number; accuracy?: number; speed?: number } | null;
  selectedRoute: JourneyRouteOption | null;
  traveledPath?: [number, number][];
  isDeviated?: boolean;
  pickingMode?: 'origin' | 'destination' | 'waypoint' | null;
  onLocationPicked?: (lat: number, lng: number) => void;
  className?: string;
}

export function SafePathMap({
  origin,
  destination,
  waypoints = [],
  userLocation,
  selectedRoute,
  traveledPath = [],
  isDeviated = false,
  pickingMode = null,
  onLocationPicked,
  className = "h-[450px] w-full"
}: SafePathMapProps) {
  // Default center: Bhubaneswar Master Canteen
  const defaultCenter: [number, number] = userLocation 
    ? [userLocation.lat, userLocation.lng] 
    : origin 
    ? [origin.lat, origin.lng] 
    : [20.2961, 85.8245];

  // Custom Div Icons for elegant royal violet & safety palette
  const originIcon = L.divIcon({
    className: 'kp-map-marker',
    html: `<div style="background: linear-gradient(135deg, #10B981, #059669); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(16,185,129,0.45); border: 2.5px solid #ffffff; color: white; font-weight: bold; font-size: 13px;">A</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });

  const destIcon = L.divIcon({
    className: 'kp-map-marker',
    html: `<div style="background: linear-gradient(135deg, #EF4444, #B91C1C); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(239,68,68,0.45); border: 2.5px solid #ffffff; color: white; font-weight: bold; font-size: 13px;">B</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });

  const waypointIcon = L.divIcon({
    className: 'kp-map-marker',
    html: `<div style="background: linear-gradient(135deg, #F59E0B, #D97706); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 10px rgba(245,158,11,0.4); border: 2px solid #ffffff; color: white; font-size: 12px;">★</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  const userMarkerIcon = L.divIcon({
    className: 'kp-map-marker',
    html: `<div style="position: relative; width: 32px; height: 32px;">
      <div style="position: absolute; inset: 0; background: rgba(121, 85, 174, 0.35); border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
      <div style="position: relative; width: 32px; height: 32px; background: linear-gradient(135deg, #7955AE, #4C1D95); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(121,85,174,0.6); border: 3px solid #ffffff;">
        <div style="width: 10px; height: 10px; background: #67E8F9; border-radius: 50%;"></div>
      </div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-violet-200/50 dark:border-violet-900/40 shadow-xl ${className}`}>
      {/* Picking Mode Banner Indicator */}
      {pickingMode && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] bg-violet-950/90 backdrop-blur-md text-violet-200 text-xs px-4 py-2 rounded-full border border-violet-500/40 shadow-xl flex items-center gap-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
          <span>Click anywhere on the map to set <strong>{pickingMode.toUpperCase()}</strong></span>
        </div>
      )}

      {/* Route Status Tag */}
      {selectedRoute && (
        <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 dark:bg-violet-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-violet-500/30 text-xs shadow-lg flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isDeviated ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`}></span>
          <span className="font-medium text-stone-800 dark:text-violet-100">
            {isDeviated ? 'Route Deviation Detected' : `${selectedRoute.type} Route Active (${selectedRoute.distanceKm} km)`}
          </span>
        </div>
      )}

      {/* @ts-ignore */}
      <MapContainer
        // @ts-ignore
        center={defaultCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <MapBoundsManager
          origin={origin}
          destination={destination}
          selectedRoute={selectedRoute}
          userLocation={userLocation}
        />

        {onLocationPicked && (
          <MapClickHandler 
            pickingMode={pickingMode} 
            onLocationPicked={onLocationPicked} 
          />
        )}

        {/* Beautiful high-resolution OpenStreetMap TileLayer */}
        {/* @ts-ignore */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {/* Expected Route Polyline (Karma-Path Royal Violet) */}
        {selectedRoute && selectedRoute.coordinates.length > 0 && (
          // @ts-ignore
          <Polyline
            positions={selectedRoute.coordinates}
            pathOptions={{
              color: isDeviated ? '#F59E0B' : '#7955AE',
              weight: 6,
              opacity: 0.85,
              lineCap: 'round',
              lineJoin: 'round'
            }}
          />
        )}

        {/* Traveled History Polyline (Emerald Green Dashed) */}
        {traveledPath && traveledPath.length > 1 && (
          // @ts-ignore
          <Polyline
            positions={traveledPath}
            pathOptions={{
              color: '#10B981',
              weight: 5,
              dashArray: '8, 8',
              opacity: 0.95,
              lineCap: 'round'
            }}
          />
        )}

        {/* Origin Marker */}
        {origin && (
          // @ts-ignore
          <Marker position={[origin.lat, origin.lng]} icon={originIcon}>
            <Popup>
              <div className="p-1 font-sans">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 block">Starting Location</span>
                <strong className="text-sm text-stone-900 block">{origin.name || 'Origin'}</strong>
                {origin.address && <p className="text-xs text-stone-600 mt-0.5">{origin.address}</p>}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Intermediate Waypoints */}
        {waypoints.map((wp, idx) => (
          // @ts-ignore
          <Marker key={`wp-${idx}`} position={[wp.lat, wp.lng]} icon={waypointIcon}>
            <Popup>
              <div className="p-1 font-sans">
                <span className="text-[10px] uppercase font-bold text-amber-600 block">Waypoint {idx + 1}</span>
                <strong className="text-xs text-stone-900">{wp.name || wp.address || `Stop ${idx + 1}`}</strong>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Destination Marker */}
        {destination && (
          // @ts-ignore
          <Marker position={[destination.lat, destination.lng]} icon={destIcon}>
            <Popup>
              <div className="p-1 font-sans">
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 block">Final Destination</span>
                <strong className="text-sm text-stone-900 block">{destination.name || 'Destination'}</strong>
                {destination.address && <p className="text-xs text-stone-600 mt-0.5">{destination.address}</p>}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Live User Location Marker & Accuracy Halo */}
        {userLocation && (
          <>
            {userLocation.accuracy && userLocation.accuracy > 0 && (
              // @ts-ignore
              <Circle
                center={[userLocation.lat, userLocation.lng]}
                radius={Math.min(userLocation.accuracy, 500)}
                pathOptions={{
                  color: '#7955AE',
                  fillColor: '#7955AE',
                  fillOpacity: 0.12,
                  weight: 1
                }}
              />
            )}
            {/* @ts-ignore */}
            <Marker position={[userLocation.lat, userLocation.lng]} icon={userMarkerIcon}>
              <Popup>
                <div className="p-1 font-sans">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-violet-600 block">Live GPS Location</span>
                  <p className="text-xs font-semibold text-stone-800">
                    {userLocation.lat.toFixed(5)}, {userLocation.lng.toFixed(5)}
                  </p>
                  {typeof userLocation.speed === 'number' && (
                    <p className="text-[11px] text-stone-600">Speed: {Math.round(userLocation.speed * 3.6)} km/h</p>
                  )}
                  {userLocation.accuracy && (
                    <p className="text-[11px] text-stone-500">Accuracy: ±{Math.round(userLocation.accuracy)}m</p>
                  )}
                </div>
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}
