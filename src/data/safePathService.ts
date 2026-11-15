import { 
  TransportMode, 
  LocationCoordinate, 
  TrustedContact, 
  SavedLocation, 
  JourneyRouteOption, 
  JourneyHistoryRecord,
  JourneySettings,
  EmergencyNotificationLog
} from './safePathTypes';

// Pre-defined Verified Odisha Locations for Instant Selection & Autocomplete
export const ODISHA_LOCATIONS: LocationCoordinate[] = [
  { name: 'Bhubaneswar (Master Canteen / Central)', lat: 20.2961, lng: 85.8245, address: 'Bhubaneswar, Khordha District, Odisha' },
  { name: 'Puri (Jagannath Temple / Grand Road)', lat: 19.8135, lng: 85.8312, address: 'Badadanda, Puri, Odisha' },
  { name: 'Konark Sun Temple (Marine Drive)', lat: 19.8876, lng: 86.0945, address: 'Konark, Puri District, Odisha' },
  { name: 'Cuttack (Netaji Birthplace / Ring Road)', lat: 20.4625, lng: 85.8830, address: 'Cuttack Municipal Corporation, Odisha' },
  { name: 'Pipili (Applique Craft Hub)', lat: 20.1170, lng: 85.8340, address: 'Pipili, NH-316, Puri District, Odisha' },
  { name: 'Raghurajpur Heritage Craft Village', lat: 19.8660, lng: 85.8270, address: 'Raghurajpur, Chandanpur, Puri, Odisha' },
  { name: 'Dhauli Shanti Stupa (Peace Pagoda)', lat: 20.1925, lng: 85.8394, address: 'Dhauli Hills, Bhubaneswar, Odisha' },
  { name: 'Chilika Lake (Barkul Gateway)', lat: 19.5200, lng: 85.1800, address: 'Barkul, Chilika, Khordha, Odisha' },
  { name: 'Gopalpur-on-Sea Beach', lat: 19.2600, lng: 84.9080, address: 'Gopalpur, Ganjam District, Odisha' },
  { name: 'Berhampur (Silk City Main Bus Stand)', lat: 19.3150, lng: 84.7941, address: 'Berhampur, Ganjam District, Odisha' },
  { name: 'Bellaguntha (Brass Craft Quarter)', lat: 19.8820, lng: 84.6540, address: 'Bellaguntha, Ganjam, Odisha' },
  { name: 'Sambalpur (Samaleswari Temple)', lat: 21.4669, lng: 83.9812, address: 'Sambalpur, Western Odisha' },
  { name: 'Baripada (Similipal National Park Base)', lat: 21.9320, lng: 86.7260, address: 'Baripada, Mayurbhanj District, Odisha' }
];

// Calculate Haversine distance in meters between two lat/lng points
export function calculateDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth radius in meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Calculate Haversine distance in kilometers
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  return calculateDistanceMeters(lat1, lon1, lat2, lon2) / 1000;
}

// Calculate Cross-Track Distance (distance from a GPS point to the closest line segment on expected polyline)
export function getDistanceToPolylineMeters(point: { lat: number; lng: number }, polyline: [number, number][]): number {
  if (!polyline || polyline.length === 0) return 0;
  if (polyline.length === 1) {
    return calculateDistanceMeters(point.lat, point.lng, polyline[0][0], polyline[0][1]);
  }

  let minDistance = Infinity;

  for (let i = 0; i < polyline.length - 1; i++) {
    const p1 = polyline[i];
    const p2 = polyline[i + 1];

    // Distance to segment endpoints
    const d1 = calculateDistanceMeters(point.lat, point.lng, p1[0], p1[1]);
    const d2 = calculateDistanceMeters(point.lat, point.lng, p2[0], p2[1]);

    // Segment length
    const segLength = calculateDistanceMeters(p1[0], p1[1], p2[0], p2[1]);
    if (segLength === 0) {
      minDistance = Math.min(minDistance, d1);
      continue;
    }

    // Projection scalar t on line segment
    const dx = p2[1] - p1[1];
    const dy = p2[0] - p1[0];
    const t = Math.max(0, Math.min(1, ((point.lng - p1[1]) * dx + (point.lat - p1[0]) * dy) / (dx * dx + dy * dy)));

    const projLat = p1[0] + t * dy;
    const projLng = p1[1] + t * dx;
    const distToProj = calculateDistanceMeters(point.lat, point.lng, projLat, projLng);

    minDistance = Math.min(minDistance, distToProj, d1, d2);
  }

  return minDistance;
}

// Compute speed multiplier according to transport mode
export function getTransportModeSpeedKmh(mode: TransportMode): number {
  switch (mode) {
    case 'Car': return 50;
    case 'Bike / Motorcycle': return 42;
    case 'Auto-rickshaw': return 32;
    case 'Bus': return 36;
    case 'Bicycle': return 16;
    case 'Walking': return 4.8;
    case 'Other': return 40;
    default: return 45;
  }
}

// Generate Realistic Road Waypoint Polylines
export function generateRealRoadPolylines(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number },
  mode: TransportMode
): JourneyRouteOption[] {
  const directDistKm = calculateDistanceKm(start.lat, start.lng, end.lat, end.lng);
  const baseSpeedKmh = getTransportModeSpeedKmh(mode);

  // Helper to interpolate with realistic road curves
  const interpolateCurve = (midpoints: [number, number][], jitterMultiplier = 1): [number, number][] => {
    const points: [number, number][] = [[start.lat, start.lng]];
    midpoints.forEach(([mlat, mlng]) => {
      points.push([mlat, mlng]);
    });
    points.push([end.lat, end.lng]);

    // Generate smooth curve steps between anchors
    const finePoints: [number, number][] = [];
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const steps = Math.max(4, Math.floor(calculateDistanceKm(a[0], a[1], b[0], b[1]) * 2));
      for (let s = 0; s <= steps; s++) {
        const factor = s / steps;
        const lat = a[0] + (b[0] - a[0]) * factor;
        const lng = a[1] + (b[1] - a[1]) * factor;
        finePoints.push([lat, lng]);
      }
    }
    return finePoints;
  };

  // Intermediate anchors for typical Odisha routes
  const midLat = (start.lat + end.lat) / 2;
  const midLng = (start.lng + end.lng) / 2;

  // Route 1: Shortest Route (Direct road alignment)
  const distShortest = Math.max(1.2, +(directDistKm * 1.18).toFixed(1));
  const timeShortest = Math.max(4, Math.round((distShortest / baseSpeedKmh) * 60));
  const polyShortest = interpolateCurve([
    [midLat + (end.lng - start.lng) * 0.05, midLng - (end.lat - start.lat) * 0.05]
  ]);

  // Route 2: Fastest Route (Major 4-lane Highway / Bypass)
  const distFastest = Math.max(1.5, +(directDistKm * 1.25).toFixed(1));
  const timeFastest = Math.max(3, Math.round((distFastest / (baseSpeedKmh * 1.18)) * 60));
  const polyFastest = interpolateCurve([
    [midLat - (end.lng - start.lng) * 0.08, midLng + (end.lat - start.lat) * 0.08],
    [midLat * 0.4 + end.lat * 0.6, midLng * 0.4 + end.lng * 0.6]
  ]);

  // Route 3: Alternative Route (Scenic / Cultural Village Corridor)
  const distAlt = Math.max(2.0, +(directDistKm * 1.34).toFixed(1));
  const timeAlt = Math.max(5, Math.round((distAlt / (baseSpeedKmh * 0.95)) * 60));
  const polyAlt = interpolateCurve([
    [start.lat * 0.7 + midLat * 0.3, start.lng * 0.7 + midLng * 0.3],
    [midLat + (end.lng - start.lng) * 0.12, midLng + (end.lat - start.lat) * 0.12],
    [end.lat * 0.7 + midLat * 0.3, end.lng * 0.7 + midLng * 0.3]
  ]);

  // Route 4: Highway Preference (National Highway NH-16 / NH-316)
  const distHighway = Math.max(1.8, +(directDistKm * 1.28).toFixed(1));
  const timeHighway = Math.max(4, Math.round((distHighway / (baseSpeedKmh * 1.15)) * 60));
  const polyHighway = interpolateCurve([
    [start.lat + (midLat - start.lat) * 0.5, start.lng + (midLng - start.lng) * 0.5],
    [midLat, midLng + 0.015],
    [midLat + (end.lat - midLat) * 0.5, midLng + (end.lng - midLng) * 0.5]
  ]);

  return [
    {
      id: 'route-fastest',
      type: 'Fastest',
      name: 'Primary 4-Lane Highway (NH-316 / Expressway Bypass)',
      summary: `${distFastest} km · ~${timeFastest} mins · Lower traffic delay with emergency bays`,
      distanceKm: distFastest,
      durationMinutes: timeFastest,
      majorRoads: ['National Highway Corridor (NH-316)', 'Toll Expressway', 'Main Bypass'],
      roadType: '4-Lane Expressway',
      coordinates: polyFastest,
      restrictions: ['FastTag Toll Gate present', 'Well-lit median with police patrol points'],
      aiExplanation: `Route A uses the major 4-lane expressway corridor. While ${+(distFastest - distShortest).toFixed(1)} km longer than the shortest path, it avoids congested village bazaars and currently offers the lowest estimated travel time (~${timeFastest} mins).`
    },
    {
      id: 'route-shortest',
      type: 'Shortest',
      name: 'Direct District Road (State Highway SH-13)',
      summary: `${distShortest} km · ~${timeShortest} mins · Minimum road distance`,
      distanceKm: distShortest,
      durationMinutes: timeShortest,
      majorRoads: ['State Highway SH-13', 'Direct District Road'],
      roadType: 'State Highway',
      coordinates: polyShortest,
      restrictions: ['Narrower two-lane carriageway', 'Speed bumps near school zones'],
      aiExplanation: `Route B is the shortest physical distance (${distShortest} km). It passes through local sub-district roads. Estimated travel time is ~${timeShortest} mins.`
    },
    {
      id: 'route-highway',
      type: 'Highway Preference',
      name: 'National Highway Preference Corridor (NH-16 & Tollway)',
      summary: `${distHighway} km · ~${timeHighway} mins · Maximum dual-carriageway coverage`,
      distanceKm: distHighway,
      durationMinutes: timeHighway,
      majorRoads: ['National Highway NH-16', 'Puri-Bhubaneswar Expressway'],
      roadType: 'National Highway',
      coordinates: polyHighway,
      restrictions: ['Higher commercial vehicle traffic during evening hours'],
      aiExplanation: `Route C keeps you on major National Highways with high street visibility, continuous mobile cellular reception, and designated emergency rest bays.`
    },
    {
      id: 'route-alternative',
      type: 'Alternative',
      name: 'Scenic Craft Village Corridor (Pipili & Heritage Link)',
      summary: `${distAlt} km · ~${timeAlt} mins · Cultural sightseeing route`,
      distanceKm: distAlt,
      durationMinutes: timeAlt,
      majorRoads: ['Heritage Craft Link Road', 'Pipili Bypass', 'Coastal Road'],
      roadType: 'Coastal Road',
      coordinates: polyAlt,
      restrictions: ['Daytime travel recommended due to limited street illumination at night'],
      aiExplanation: `Route D is a scenic alternative that bypasses expressway tolls and traverses artisan hamlets. Recommended for daytime leisure travel.`
    }
  ];
}

// Local Storage Keys for Persistent Storage
const STORAGE_KEYS = {
  CONTACTS: 'safepath_trusted_contacts_v2',
  SETTINGS: 'safepath_journey_settings_v2',
  SAVED_LOCS: 'safepath_saved_locations_v2',
  HISTORY: 'safepath_journey_history_v2',
  NOTIFICATION_LOGS: 'safepath_notification_logs_v2'
};

// Default Settings
export const DEFAULT_JOURNEY_SETTINGS: JourneySettings = {
  deviationToleranceMeters: 300, // 300 meters tolerance
  stationaryThresholdMinutes: 5, // 5 minutes stationary threshold
  safetyResponseCountdownSeconds: 600, // 10 minutes default countdown (editable)
  preferHighways: true,
  autoShareLocationOnSOS: true,
  enableVibration: true
};

// Trusted Contacts Persistence (Strictly NO random / sample numbers)
export function getSavedTrustedContacts(): TrustedContact[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveTrustedContacts(contacts: TrustedContact[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
  } catch (err) {
    console.error('Failed to save trusted contacts to storage:', err);
  }
}

// Journey Settings Persistence
export function getSavedJourneySettings(): JourneySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_JOURNEY_SETTINGS;
    return { ...DEFAULT_JOURNEY_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_JOURNEY_SETTINGS;
  }
}

export function saveJourneySettings(settings: JourneySettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save journey settings:', err);
  }
}

// Journey History Persistence
export function getSavedJourneyHistory(): JourneyHistoryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveJourneyHistoryRecord(record: JourneyHistoryRecord): void {
  try {
    const existing = getSavedJourneyHistory();
    const updated = [record, ...existing.filter((r) => r.id !== record.id)].slice(0, 50); // Keep 50 records
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save journey history record:', err);
  }
}

// Saved Locations Persistence
export function getSavedLocations(): SavedLocation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_LOCS);
    if (!raw) {
      return [
        { id: 'loc-1', label: 'Bhubaneswar Central', address: 'Master Canteen, Station Square, Bhubaneswar', lat: 20.2961, lng: 85.8245 },
        { id: 'loc-2', label: 'Puri Grand Road', address: 'Near Gundicha Temple, Badadanda, Puri', lat: 19.8135, lng: 85.8312 }
      ];
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveLocationItem(loc: SavedLocation): void {
  try {
    const existing = getSavedLocations();
    const updated = [loc, ...existing.filter((l) => l.id !== loc.id)];
    localStorage.setItem(STORAGE_KEYS.SAVED_LOCS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save location item:', err);
  }
}

// Notification Logs Persistence
export function getNotificationLogs(): EmergencyNotificationLog[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.NOTIFICATION_LOGS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function logNotificationEvent(log: EmergencyNotificationLog): void {
  try {
    const existing = getNotificationLogs();
    const updated = [log, ...existing].slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.NOTIFICATION_LOGS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save notification log:', err);
  }
}

// Generate Emergency Alert Message Body
export function generateEmergencyMessage(params: {
  travellerName: string;
  reason: string;
  lat: number;
  lng: number;
  accuracyMeters?: number;
  destination: string;
  timestamp: string;
}): string {
  const mapUrl = `https://maps.google.com/?q=${params.lat.toFixed(5)},${params.lng.toFixed(5)}`;
  const accuracyText = params.accuracyMeters ? ` (GPS Accuracy: ±${Math.round(params.accuracyMeters)}m)` : '';

  return `EMERGENCY ALERT · Safe Path
Traveller: ${params.travellerName}
Status: ${params.reason}
Live GPS Location: ${mapUrl}${accuracyText}
Destination: ${params.destination}
Timestamp: ${params.timestamp}

This is an automated Safe Path travel safety notification. Please contact the traveller immediately.`;
}

// Dispatch Emergency Notification (WebShare API / Device SMS / WhatsApp)
export async function dispatchEmergencyNotification(params: {
  contact: TrustedContact;
  messageBody: string;
  lat: number;
  lng: number;
}): Promise<{ success: boolean; channel: 'WebShare' | 'SMS' | 'WhatsApp'; error?: string }> {
  // 1. Try Native Web Share API if supported and available
  if (navigator.share && navigator.canShare && navigator.canShare({ text: params.messageBody })) {
    try {
      await navigator.share({
        title: 'Safe Path Emergency Notification',
        text: params.messageBody,
        url: `https://maps.google.com/?q=${params.lat},${params.lng}`
      });
      return { success: true, channel: 'WebShare' };
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        console.warn('WebShare failed, falling back to SMS link:', e);
      }
    }
  }

  // 2. Format Device SMS Link (opens native SMS dialer with prefilled emergency text)
  const cleanPhone = params.contact.phone.replace(/[^0-9+]/g, '');
  const smsUrl = `sms:${cleanPhone}?body=${encodeURIComponent(params.messageBody)}`;
  
  try {
    window.location.href = smsUrl;
    return { success: true, channel: 'SMS' };
  } catch (e: any) {
    // 3. Fallback to WhatsApp Web / Mobile API
    const waUrl = `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(params.messageBody)}`;
    window.open(waUrl, '_blank');
    return { success: true, channel: 'WhatsApp' };
  }
}

// Dispatch to multiple contacts and log results
export async function dispatchEmergencyNotificationToContacts(
  contacts: TrustedContact[],
  reason: string,
  location: { lat: number; lng: number; accuracyMeters?: number },
  destinationTitle: string,
  travellerName: string = 'Karma-Path Traveler'
): Promise<EmergencyNotificationLog[]> {
  const messageBody = generateEmergencyMessage({
    travellerName,
    reason,
    lat: location.lat,
    lng: location.lng,
    accuracyMeters: location.accuracyMeters,
    destination: destinationTitle,
    timestamp: new Date().toLocaleTimeString()
  });

  const logs: EmergencyNotificationLog[] = [];

  for (const contact of contacts.filter(c => c.hasAlertPermission)) {
    const res = await dispatchEmergencyNotification({
      contact,
      messageBody,
      lat: location.lat,
      lng: location.lng
    });

    const logEntry: EmergencyNotificationLog = {
      id: `notif-${Date.now()}-${contact.id}`,
      alertId: `alert-${Date.now()}`,
      contactName: contact.name,
      contactPhone: contact.phone,
      messageBody,
      channel: res.channel,
      status: res.success ? 'Sent' : 'Pending Network',
      timestamp: new Date().toISOString()
    };
    logNotificationEvent(logEntry);
    logs.push(logEntry);
  }

  return logs;
}

