export type TransportMode = 
  | 'Car' 
  | 'Bike / Motorcycle' 
  | 'Auto-rickshaw' 
  | 'Bus' 
  | 'Walking' 
  | 'Bicycle' 
  | 'Other';

export interface LocationCoordinate {
  lat: number;
  lng: number;
  name?: string;
  address?: string;
}

export interface TrustedContact {
  id: string;
  userId?: string;
  name: string;
  relationship: 'Father' | 'Mother' | 'Brother / Sister' | 'Spouse' | 'Friend' | 'Other';
  phone: string;
  email?: string;
  hasAlertPermission: boolean;
  isPrimary: boolean;
  createdAt: string;
}

export interface SavedLocation {
  id: string;
  userId?: string;
  label: string;
  address: string;
  lat: number;
  lng: number;
}

export interface JourneyRouteOption {
  id: string;
  type: 'Shortest' | 'Fastest' | 'Alternative' | 'Highway Preference';
  name: string;
  summary: string;
  distanceKm: number;
  durationMinutes: number;
  majorRoads: string[];
  roadType: '4-Lane Expressway' | 'National Highway' | 'State Highway' | 'Coastal Road' | 'City Arterial';
  coordinates: [number, number][];
  restrictions?: string[];
  aiExplanation: string;
}

export interface GPSLocationUpdate {
  timestamp: string;
  lat: number;
  lng: number;
  accuracyMeters: number;
  speedKmh: number;
  heading?: number;
  altitude?: number;
}

export interface RouteDeviationEvent {
  id: string;
  journeyId: string;
  timestamp: string;
  deviationDistanceMeters: number;
  lat: number;
  lng: number;
  resolved: boolean;
  resolutionNote?: string;
}

export interface UnexpectedStopEvent {
  id: string;
  journeyId: string;
  startTime: string;
  durationMinutes: number;
  lat: number;
  lng: number;
  isPlannedBreak: boolean;
  resolved: boolean;
}

export interface SafetyCheckin {
  id: string;
  journeyId: string;
  timestamp: string;
  triggerReason: 'Deviation' | 'Unexpected Stop' | 'Routine Check-In' | 'Manual';
  status: 'Responded Safe' | 'Requested Help' | 'Timeout / Escalated';
  responseTimeSeconds?: number;
}

export interface EmergencyAlert {
  id: string;
  journeyId: string;
  timestamp: string;
  alertType: 'SOS Button' | 'No-Response Timeout' | 'Critical Deviation' | 'Test Alert';
  location: { lat: number; lng: number };
  googleMapsLink: string;
  dispatched112: boolean;
  status: 'Active' | 'Acknowledged' | 'Resolved';
}

export interface EmergencyNotificationLog {
  id: string;
  alertId: string;
  contactName: string;
  contactPhone: string;
  messageBody: string;
  channel: 'SMS' | 'WebShare' | 'WhatsApp';
  status: 'Sent' | 'Pending Network' | 'Delivered';
  timestamp: string;
}

export interface JourneyHistoryRecord {
  id: string;
  userId?: string;
  title: string;
  origin: string;
  destination: string;
  transportMode: TransportMode;
  startTime: string;
  endTime: string;
  totalDistanceKm: number;
  totalDurationMinutes: number;
  averageSpeedKmh: number;
  deviationsCount: number;
  checkinsCount: number;
  status: 'Completed' | 'Terminated' | 'SOS Resolved';
  traveledPolyline: [number, number][];
}

export interface JourneySettings {
  deviationToleranceMeters: number; // e.g. 300m
  stationaryThresholdMinutes: number; // e.g. 5m
  safetyResponseCountdownSeconds: number; // e.g. 600s (10 mins default, editable)
  preferHighways: boolean;
  autoShareLocationOnSOS: boolean;
  enableVibration: boolean;
}
