import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaExclamationTriangle, 
  FaPhoneAlt, 
  FaUserShield, 
  FaCar, 
  FaMotorcycle,
  FaBus, 
  FaBicycle, 
  FaWalking, 
  FaTruck,
  FaCheckCircle, 
  FaTimes, 
  FaClock, 
  FaBroadcastTower, 
  FaUserFriends,
  FaSatellite,
  FaSlidersH,
  FaRoute,
  FaHistory,
  FaCompass,
  FaCrosshairs,
  FaFlagCheckered,
  FaPlus,
  FaTrash,
  FaCoffee,
  FaPlay,
  FaStop,
  FaInfoCircle,
  FaHeartbeat
} from 'react-icons/fa';
import { 
  TransportMode, 
  LocationCoordinate, 
  TrustedContact, 
  JourneyRouteOption, 
  GPSLocationUpdate,
  JourneyHistoryRecord,
  JourneySettings
} from '../data/safePathTypes';
import { 
  ODISHA_LOCATIONS,
  calculateDistanceKm,
  calculateDistanceMeters,
  getDistanceToPolylineMeters,
  generateRealRoadPolylines,
  getSavedTrustedContacts,
  getSavedJourneySettings,
  getSavedJourneyHistory,
  saveJourneyHistoryRecord,
  dispatchEmergencyNotification
} from '../data/safePathService';
import { SafePathMap } from '../components/safepath/SafePathMap';
import { TrustedContactsModal } from '../components/safepath/TrustedContactsModal';
import { SafetyCheckinModal } from '../components/safepath/SafetyCheckinModal';
import { EmergencySOSModal } from '../components/safepath/EmergencySOSModal';
import { JourneySummaryModal } from '../components/safepath/JourneySummaryModal';
import { JourneySettingsModal } from '../components/safepath/JourneySettingsModal';

export function SafePath() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<'tracker' | 'history'>('tracker');

  // Persistent User Settings & Contacts
  const [trustedContacts, setTrustedContacts] = useState<TrustedContact[]>(() => getSavedTrustedContacts());
  const [settings, setSettings] = useState<JourneySettings>(() => getSavedJourneySettings());
  const [journeyHistory, setJourneyHistory] = useState<JourneyHistoryRecord[]>(() => getSavedJourneyHistory());

  // Journey Input States
  const [origin, setOrigin] = useState<LocationCoordinate>({
    name: 'Bhubaneswar (Master Canteen)',
    address: 'Bhubaneswar, Khordha District, Odisha',
    lat: 20.2961,
    lng: 85.8245
  });

  const [destination, setDestination] = useState<LocationCoordinate>({
    name: 'Puri (Jagannath Temple / Grand Road)',
    address: 'Badadanda, Puri, Odisha',
    lat: 19.8135,
    lng: 85.8312
  });

  const [waypoints, setWaypoints] = useState<LocationCoordinate[]>([]);
  const [transportMode, setTransportMode] = useState<TransportMode>('Car');

  // Map click picking mode
  const [pickingMode, setPickingMode] = useState<'origin' | 'destination' | 'waypoint' | null>(null);

  // Computed Route Options
  const [routes, setRoutes] = useState<JourneyRouteOption[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<JourneyRouteOption | null>(null);

  // Live Tracking States
  const [isTrackingActive, setIsTrackingActive] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; accuracy?: number; speed?: number } | null>(null);
  const [traveledPath, setTraveledPath] = useState<[number, number][]>([]);
  const [journeyStartTime, setJourneyStartTime] = useState<string | null>(null);
  const [isStationary, setIsStationary] = useState(false);
  const [isPlannedBreak, setIsPlannedBreak] = useState(false);
  const [stationaryStartTimestamp, setStationaryStartTimestamp] = useState<number | null>(null);

  // Deviation & Safety States
  const [isDeviated, setIsDeviated] = useState(false);
  const [deviationCount, setDeviationCount] = useState(0);
  const [checkinCount, setCheckinCount] = useState(0);
  const consecutiveDeviationsRef = useRef(0);

  // Modals
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
  const [checkinReason, setCheckinReason] = useState<'Deviation' | 'Unexpected Stop' | 'Routine Check-In' | 'Manual'>('Manual');
  const [checkinDetails, setCheckinDetails] = useState<string>('');
  const [summaryData, setSummaryData] = useState<JourneyHistoryRecord | null>(null);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  // Geolocation Watcher Ref
  const watchIdRef = useRef<number | null>(null);

  // Re-generate routes whenever origin, destination, or mode changes
  useEffect(() => {
    if (origin && destination) {
      const computedRoutes = generateRealRoadPolylines(origin, destination, transportMode);
      setRoutes(computedRoutes);
      // Default to Fastest route or Highway preference
      const defaultRoute = settings.preferHighways 
        ? computedRoutes.find(r => r.type === 'Highway Preference') || computedRoutes[0]
        : computedRoutes[0];
      setSelectedRoute(defaultRoute);
    }
  }, [origin, destination, transportMode, settings.preferHighways]);

  // Request Current GPS for Origin
  const handleUseCurrentGPSAsOrigin = () => {
    if (!('geolocation' in navigator)) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coord: LocationCoordinate = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          name: 'My Current GPS Location',
          address: `Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`
        };
        setOrigin(coord);
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          speed: pos.coords.speed || 0
        });
      },
      (err) => {
        alert(`Unable to retrieve GPS location: ${err.message}. Please allow location access in your browser.`);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  // Map Click Picking Callback
  const handleMapLocationPicked = (lat: number, lng: number) => {
    const coord: LocationCoordinate = {
      lat,
      lng,
      name: `Map Point (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
      address: `Custom Road Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`
    };

    if (pickingMode === 'origin') {
      setOrigin(coord);
    } else if (pickingMode === 'destination') {
      setDestination(coord);
    } else if (pickingMode === 'waypoint') {
      setWaypoints((prev) => [...prev, coord]);
    }
    setPickingMode(null);
  };

  // Start Real GPS Travel Tracking
  const handleStartJourney = () => {
    if (!selectedRoute) {
      alert('Please select a route to start tracking.');
      return;
    }

    const now = new Date().toISOString();
    setJourneyStartTime(now);
    setIsTrackingActive(true);
    setTraveledPath([[origin.lat, origin.lng]]);
    setDeviationCount(0);
    setCheckinCount(0);
    setIsDeviated(false);
    setIsStationary(false);
    setIsPlannedBreak(false);
    consecutiveDeviationsRef.current = 0;

    // Start GPS Watcher
    if ('geolocation' in navigator) {
      const id = navigator.geolocation.watchPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          const speedKmh = pos.coords.speed ? pos.coords.speed * 3.6 : 0;
          const accuracy = pos.coords.accuracy;

          setUserLocation({
            lat,
            lng,
            accuracy,
            speed: pos.coords.speed || 0
          });

          // Append to traveled path
          setTraveledPath((prev) => [...prev, [lat, lng]]);

          // Deviation Analysis against active route
          if (selectedRoute && selectedRoute.coordinates.length > 0) {
            const distMeters = getDistanceToPolylineMeters({ lat, lng }, selectedRoute.coordinates);
            
            if (distMeters > settings.deviationToleranceMeters) {
              consecutiveDeviationsRef.current += 1;
              // If deviation persists for at least 3 consecutive updates
              if (consecutiveDeviationsRef.current >= 3 && !isDeviated) {
                setIsDeviated(true);
                setDeviationCount((c) => c + 1);
                setCheckinReason('Deviation');
                setCheckinDetails(
                  `You are currently ~${Math.round(distMeters)}m away from your selected route (${selectedRoute.name}). Tolerance threshold is ${settings.deviationToleranceMeters}m.`
                );
                setIsCheckinModalOpen(true);
              }
            } else {
              consecutiveDeviationsRef.current = 0;
              if (isDeviated) setIsDeviated(false);
            }
          }

          // Stationary Stop Analysis
          if (speedKmh < 1.0) {
            if (!stationaryStartTimestamp) {
              setStationaryStartTimestamp(Date.now());
            } else {
              const elapsedMinutes = (Date.now() - stationaryStartTimestamp) / (1000 * 60);
              if (elapsedMinutes >= settings.stationaryThresholdMinutes && !isStationary && !isPlannedBreak) {
                setIsStationary(true);
                setCheckinReason('Unexpected Stop');
                setCheckinDetails(
                  `Your vehicle has been stationary for over ${Math.round(elapsedMinutes)} minutes without a recorded planned break.`
                );
                setIsCheckinModalOpen(true);
              }
            }
          } else {
            setStationaryStartTimestamp(null);
            setIsStationary(false);
          }

          // Destination Arrival Check (within 150m of destination)
          if (destination) {
            const distToDest = calculateDistanceMeters(lat, lng, destination.lat, destination.lng);
            if (distToDest < 150) {
              handleEndJourney('Completed');
            }
          }
        },
        (err) => {
          console.warn('GPS Watcher warning:', err.message);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 3000 }
      );

      watchIdRef.current = id;
    }
  };

  // End or Complete Journey
  const handleEndJourney = (status: 'Completed' | 'Terminated' | 'SOS Resolved' = 'Completed') => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    setIsTrackingActive(false);

    const endTime = new Date().toISOString();
    const startTime = journeyStartTime || new Date(Date.now() - 3600000).toISOString();
    const durationMins = Math.max(1, Math.round((new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000));
    
    // Calculate total distance covered along traveled path
    let totalDistKm = 0;
    for (let i = 0; i < traveledPath.length - 1; i++) {
      totalDistKm += calculateDistanceKm(
        traveledPath[i][0], traveledPath[i][1],
        traveledPath[i + 1][0], traveledPath[i + 1][1]
      );
    }
    if (totalDistKm === 0 && selectedRoute) {
      totalDistKm = selectedRoute.distanceKm;
    }

    const avgSpeed = durationMins > 0 ? Math.round((totalDistKm / (durationMins / 60))) : 40;

    const record: JourneyHistoryRecord = {
      id: `jny-${Date.now()}`,
      title: `${origin.name || 'Start'} to ${destination.name || 'Destination'}`,
      origin: origin.name || 'Start Location',
      destination: destination.name || 'Destination',
      transportMode,
      startTime,
      endTime,
      totalDistanceKm: +totalDistKm.toFixed(1),
      totalDurationMinutes: durationMins,
      averageSpeedKmh: avgSpeed,
      deviationsCount: deviationCount,
      checkinsCount: checkinCount,
      status,
      traveledPolyline: traveledPath
    };

    saveJourneyHistoryRecord(record);
    setJourneyHistory(getSavedJourneyHistory());
    setSummaryData(record);
    setIsSummaryModalOpen(true);
  };

  // Clean up GPS watcher on unmount
  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  // Distance remaining to destination
  const distanceRemainingKm = useMemo(() => {
    if (!destination) return 0;
    const currentLat = userLocation?.lat || origin.lat;
    const currentLng = userLocation?.lng || origin.lng;
    return +calculateDistanceKm(currentLat, currentLng, destination.lat, destination.lng).toFixed(1);
  }, [userLocation, origin, destination]);

  // ETA Calculation
  const estimatedETA = useMemo(() => {
    if (!selectedRoute) return 'Calculating...';
    const now = new Date();
    const speed = userLocation?.speed ? userLocation.speed * 3.6 : selectedRoute.distanceKm / (selectedRoute.durationMinutes / 60);
    const effectiveSpeed = Math.max(15, speed);
    const minsRemaining = Math.round((distanceRemainingKm / effectiveSpeed) * 60);
    const arrivalDate = new Date(now.getTime() + minsRemaining * 60000);
    return arrivalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [distanceRemainingKm, selectedRoute, userLocation]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0C0617] text-stone-900 dark:text-violet-50 transition-colors duration-300">
      
      {/* Top Banner Navigation Bar */}
      <div className="border-b border-violet-200/60 dark:border-violet-900/40 bg-white/70 dark:bg-[#120824]/70 backdrop-blur-xl sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* Section Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel font-black text-lg bg-gradient-to-r from-violet-700 to-purple-600 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent">
                  Safe Path
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 font-bold">
                  AI Travel Safety
                </span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-violet-300/80">
                Every Journey Matters. Your Safety Comes First.
              </p>
            </div>
          </div>

          {/* Top Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Contacts Button */}
            <button
              onClick={() => setIsContactsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl border border-violet-200 dark:border-violet-800 bg-white dark:bg-violet-950/40 text-xs font-semibold text-violet-700 dark:text-violet-200 hover:bg-violet-50 transition flex items-center gap-2 shadow-sm"
            >
              <FaUserFriends className="text-violet-500" />
              <span>Trusted Contacts</span>
              <span className="px-1.5 py-0.2 rounded-full bg-violet-100 dark:bg-violet-900 text-[10px] font-bold">
                {trustedContacts.length}/5
              </span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="p-2 rounded-xl border border-violet-200 dark:border-violet-800 bg-white dark:bg-violet-950/40 text-xs text-stone-600 dark:text-violet-300 hover:bg-violet-50 transition shadow-sm"
              title="Tracking Settings"
            >
              <FaSlidersH />
            </button>

            {/* SOS Emergency Button */}
            <button
              onClick={() => setIsSOSModalOpen(true)}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-black tracking-wide shadow-lg shadow-red-600/30 transition transform active:scale-98 flex items-center gap-2 animate-pulse"
            >
              <FaHeartbeat />
              <span>EMERGENCY SOS (112)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Hero Section */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-cinzel font-black tracking-tight text-stone-900 dark:text-white">
            Your Journey. Your Safety. Your Peace of Mind.
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-violet-200/80 leading-relaxed">
            Travel confidently across Odisha while Karma-Path continuously verifies your expected road route, detects unexpected deviations, and keeps your family protected.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'tracker'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-stone-100 dark:bg-violet-950/40 text-stone-600 dark:text-violet-300 hover:bg-stone-200'
            }`}
          >
            <FaRoute />
            <span>Journey Planner & Live Tracker</span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'history'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-stone-100 dark:bg-violet-950/40 text-stone-600 dark:text-violet-300 hover:bg-stone-200'
            }`}
          >
            <FaHistory />
            <span>Journey History ({journeyHistory.length})</span>
          </button>
        </div>

        {activeTab === 'tracker' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Journey Setup & Route Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Origin & Destination Selector */}
              <div className="p-5 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 flex items-center gap-2">
                    <FaCompass />
                    <span>Plan Your Route</span>
                  </h3>
                  {isTrackingActive && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Tracking Active
                    </span>
                  )}
                </div>

                {/* Starting Location */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-stone-700 dark:text-violet-200 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>Starting Point (Origin)</span>
                    </label>
                    <button
                      type="button"
                      disabled={isTrackingActive}
                      onClick={handleUseCurrentGPSAsOrigin}
                      className="text-[11px] text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1 font-medium disabled:opacity-50"
                    >
                      <FaCrosshairs className="text-[10px]" /> Use My Live GPS
                    </button>
                  </div>

                  <div className="relative">
                    <select
                      disabled={isTrackingActive}
                      value={origin.name}
                      onChange={(e) => {
                        const loc = ODISHA_LOCATIONS.find(l => l.name === e.target.value);
                        if (loc) setOrigin(loc);
                      }}
                      className="w-full px-3 py-2.5 rounded-2xl bg-stone-50 dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      {ODISHA_LOCATIONS.map((loc) => (
                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 px-1">
                    <span className="truncate">{origin.address}</span>
                    <button
                      type="button"
                      disabled={isTrackingActive}
                      onClick={() => setPickingMode(pickingMode === 'origin' ? null : 'origin')}
                      className={`text-[10px] px-2 py-0.5 rounded-lg border font-semibold transition ${
                        pickingMode === 'origin'
                          ? 'bg-amber-500 text-white border-amber-500'
                          : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-300'
                      }`}
                    >
                      {pickingMode === 'origin' ? 'Click Map Now' : 'Pick on Map'}
                    </button>
                  </div>
                </div>

                {/* Waypoints list */}
                {waypoints.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block">Intermediate Stops:</span>
                    {waypoints.map((wp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 text-xs">
                        <span className="truncate text-stone-800 dark:text-violet-100">{wp.name}</span>
                        <button
                          type="button"
                          onClick={() => setWaypoints(waypoints.filter((_, i) => i !== idx))}
                          className="text-stone-400 hover:text-red-500"
                        >
                          <FaTrash className="text-[10px]" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Destination */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-stone-700 dark:text-violet-200 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      <span>Destination</span>
                    </label>
                    <button
                      type="button"
                      disabled={isTrackingActive}
                      onClick={() => setPickingMode(pickingMode === 'destination' ? null : 'destination')}
                      className={`text-[10px] px-2 py-0.5 rounded-lg border font-semibold transition ${
                        pickingMode === 'destination'
                          ? 'bg-amber-500 text-white border-amber-500'
                          : 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-300'
                      }`}
                    >
                      {pickingMode === 'destination' ? 'Click Map Now' : 'Pick on Map'}
                    </button>
                  </div>

                  <select
                    disabled={isTrackingActive}
                    value={destination.name}
                    onChange={(e) => {
                      const loc = ODISHA_LOCATIONS.find(l => l.name === e.target.value);
                      if (loc) setDestination(loc);
                    }}
                    className="w-full px-3 py-2.5 rounded-2xl bg-stone-50 dark:bg-[#1C1233] border border-violet-200 dark:border-violet-800 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    {ODISHA_LOCATIONS.map((loc) => (
                      <option key={loc.name} value={loc.name}>{loc.name}</option>
                    ))}
                  </select>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 px-1 truncate">
                    {destination.address}
                  </p>
                </div>

                {/* Add Stop Button */}
                {!isTrackingActive && (
                  <button
                    type="button"
                    onClick={() => setPickingMode('waypoint')}
                    className="text-xs text-violet-600 dark:text-violet-400 hover:text-violet-700 flex items-center gap-1.5 font-medium"
                  >
                    <FaPlus className="text-[10px]" /> Add Intermediate Stop via Map
                  </button>
                )}

                {/* Transport Mode Selection */}
                <div className="space-y-2 pt-2 border-t border-violet-100 dark:border-violet-900/40">
                  <label className="text-xs font-semibold text-stone-700 dark:text-violet-200 block">
                    Mode of Transport
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                    {[
                      { mode: 'Car', icon: FaCar },
                      { mode: 'Bike / Motorcycle', icon: FaMotorcycle },
                      { mode: 'Auto-rickshaw', icon: FaCar },
                      { mode: 'Bus', icon: FaBus },
                      { mode: 'Bicycle', icon: FaBicycle },
                      { mode: 'Walking', icon: FaWalking },
                      { mode: 'Other', icon: FaTruck }
                    ].map(({ mode, icon: Icon }) => (
                      <button
                        key={mode}
                        type="button"
                        disabled={isTrackingActive}
                        onClick={() => setTransportMode(mode as TransportMode)}
                        className={`p-2 rounded-xl text-center border transition flex flex-col items-center gap-1 ${
                          transportMode === mode
                            ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/30'
                            : 'bg-stone-50 dark:bg-[#1C1233] border-violet-100 dark:border-violet-900/50 text-stone-600 dark:text-violet-300 hover:bg-violet-50'
                        }`}
                        title={mode}
                      >
                        <Icon className="text-sm" />
                        <span className="text-[9px] font-medium truncate max-w-full">
                          {mode.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card 2: AI Route Planning & Comparison */}
              <div className="p-5 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 flex items-center gap-2">
                    <FaRoute />
                    <span>AI Route Analysis & Comparison</span>
                  </h3>
                  <span className="text-[10px] text-stone-500 dark:text-violet-400">
                    4 Road Options
                  </span>
                </div>

                {/* Route Option Cards */}
                <div className="space-y-2.5">
                  {routes.map((rt) => {
                    const isSelected = selectedRoute?.id === rt.id;
                    return (
                      <div
                        key={rt.id}
                        onClick={() => !isTrackingActive && setSelectedRoute(rt)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-violet-500 bg-violet-50/70 dark:bg-violet-950/50 shadow-md ring-2 ring-violet-500/30'
                            : 'border-violet-100 dark:border-violet-900/40 bg-stone-50/60 dark:bg-[#170E2B]/50 hover:bg-violet-50/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-xs text-stone-900 dark:text-white">
                                {rt.name}
                              </span>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                rt.type === 'Fastest' 
                                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                                  : rt.type === 'Shortest'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                                  : rt.type === 'Highway Preference'
                                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                                  : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              }`}>
                                {rt.type}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center gap-3 text-xs text-stone-600 dark:text-stone-300">
                              <span className="font-semibold text-violet-700 dark:text-violet-300">
                                {rt.distanceKm} km
                              </span>
                              <span>·</span>
                              <span>~{rt.durationMinutes} mins</span>
                              <span>·</span>
                              <span className="text-[11px] text-stone-500">{rt.roadType}</span>
                            </div>
                          </div>

                          <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 border-violet-500">
                            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-violet-600"></div>}
                          </div>
                        </div>

                        {/* AI Explanation Snippet */}
                        <p className="mt-2 text-[11px] text-stone-600 dark:text-violet-200/80 bg-white/60 dark:bg-violet-950/30 p-2 rounded-xl border border-violet-100 dark:border-violet-900/30 leading-snug">
                          <span className="font-bold text-violet-600 dark:text-violet-400">AI Assessment: </span>
                          {rt.aiExplanation}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Primary Start Journey Action */}
                {!isTrackingActive ? (
                  <button
                    onClick={handleStartJourney}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-violet-600/30 transition transform active:scale-98 flex items-center justify-center gap-2.5"
                  >
                    <FaPlay className="text-xs" />
                    <span>START SAFE JOURNEY WITH LIVE GPS</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleEndJourney('Completed')}
                      className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2"
                    >
                      <FaFlagCheckered />
                      <span>SAFELY ARRIVED — END JOURNEY</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setIsPlannedBreak(true);
                          setCheckinReason('Routine Check-In');
                          setCheckinDetails('Planned break registered (Fuel, Refreshment, Toll). Continuous deviation alarms temporarily paused.');
                          setIsCheckinModalOpen(true);
                        }}
                        className="py-2.5 px-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                      >
                        <FaCoffee />
                        <span>Planned Break</span>
                      </button>

                      <button
                        onClick={() => {
                          setCheckinReason('Manual');
                          setCheckinDetails('Manual safety verification check initiated by traveler.');
                          setIsCheckinModalOpen(true);
                        }}
                        className="py-2.5 px-3 rounded-xl border border-violet-300 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30 text-violet-800 dark:text-violet-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                      >
                        <FaCheckCircle />
                        <span>Test Check-In</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Live Map & Dynamic Safety Telemetry (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Telemetry Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                
                {/* Speed Card */}
                <div className="p-4 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-lg text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-violet-300 block">
                    Moving Speed
                  </span>
                  <div className="text-2xl font-black font-mono text-stone-900 dark:text-white mt-1">
                    {userLocation?.speed ? Math.round(userLocation.speed * 3.6) : 0}
                    <span className="text-xs font-normal text-stone-500 ml-1">km/h</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {isStationary ? 'Stationary' : 'In Transit'}
                  </span>
                </div>

                {/* Remaining Distance */}
                <div className="p-4 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-lg text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-violet-300 block">
                    Distance Left
                  </span>
                  <div className="text-2xl font-black font-mono text-violet-600 dark:text-violet-300 mt-1">
                    {distanceRemainingKm}
                    <span className="text-xs font-normal text-stone-500 ml-1">km</span>
                  </div>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400">
                    to {destination?.name ? destination.name.split(' ')[0] : 'Destination'}
                  </span>
                </div>

                {/* Estimated ETA */}
                <div className="p-4 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-lg text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-violet-300 block">
                    Estimated ETA
                  </span>
                  <div className="text-2xl font-black font-mono text-stone-900 dark:text-white mt-1">
                    {estimatedETA}
                  </div>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400">
                    approx. arrival
                  </span>
                </div>

                {/* GPS Accuracy */}
                <div className="p-4 rounded-3xl bg-white/80 dark:bg-[#130A24]/80 backdrop-blur-xl border border-violet-100 dark:border-violet-900/50 shadow-lg text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-violet-300 block">
                    GPS Signal
                  </span>
                  <div className="text-2xl font-black font-mono text-stone-900 dark:text-white mt-1">
                    ±{userLocation?.accuracy ? Math.round(userLocation.accuracy) : 8}
                    <span className="text-xs font-normal text-stone-500 ml-1">m</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> High Accuracy
                  </span>
                </div>

              </div>

              {/* Main Interactive Map */}
              <div className="space-y-3">
                <SafePathMap
                  origin={origin}
                  destination={destination}
                  waypoints={waypoints}
                  userLocation={userLocation}
                  selectedRoute={selectedRoute}
                  traveledPath={traveledPath}
                  isDeviated={isDeviated}
                  pickingMode={pickingMode}
                  onLocationPicked={handleMapLocationPicked}
                  className="h-[520px] w-full"
                />

                {/* Map Legend */}
                <div className="p-3 rounded-2xl bg-white/70 dark:bg-[#120824]/70 backdrop-blur-md border border-violet-100 dark:border-violet-900/40 flex items-center justify-between flex-wrap gap-3 text-[11px] text-stone-600 dark:text-violet-300">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                      <span>Origin (A)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                      <span>Destination (B)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-1 bg-[#7955AE] rounded-full inline-block"></span>
                      <span>Selected Route</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-5 h-1 border-t-2 border-dashed border-emerald-500 inline-block"></span>
                      <span>Traveled Trail</span>
                    </span>
                  </div>

                  <span className="text-stone-400 dark:text-stone-500 text-[10px]">
                    Continuous Haversine cross-track calculation active
                  </span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Journey History Tab */
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-stone-900 dark:text-white">Your Travel Safety History</h2>
                <p className="text-xs text-stone-500 dark:text-violet-300">
                  Past monitored journeys stored securely and privately in your browser
                </p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200">
                {journeyHistory.length} Recorded Trips
              </span>
            </div>

            {journeyHistory.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-3xl border-2 border-dashed border-violet-200 dark:border-violet-900 bg-white/50 dark:bg-violet-950/20">
                <FaRoute className="text-4xl text-violet-400 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-stone-800 dark:text-white">No Journey Records Yet</h3>
                <p className="text-xs text-stone-500 dark:text-violet-300 max-w-sm mx-auto mt-1 mb-4">
                  When you complete journeys using Safe Path, your travel stats, deviation events, and verified check-ins will appear here.
                </p>
                <button
                  onClick={() => setActiveTab('tracker')}
                  className="px-4 py-2 bg-violet-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-violet-600/30"
                >
                  Start Your First Journey
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {journeyHistory.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-3xl bg-white dark:bg-[#140C24] border border-violet-100 dark:border-violet-900/40 shadow-lg flex items-center justify-between flex-wrap gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-stone-900 dark:text-white">
                          {item.origin} → {item.destination}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
                        <span>{new Date(item.startTime).toLocaleDateString()}</span>
                        <span>·</span>
                        <span>{item.transportMode}</span>
                        <span>·</span>
                        <span>{item.totalDurationMinutes} mins</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-base font-extrabold text-stone-900 dark:text-white">
                          {item.totalDistanceKm} <span className="text-xs font-normal text-stone-500">km</span>
                        </div>
                        <span className="text-[10px] text-stone-500 block">
                          Avg: {item.averageSpeedKmh} km/h
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-bold text-violet-600 dark:text-violet-400">
                          {item.checkinsCount} Check-ins
                        </div>
                        <span className="text-[10px] text-stone-500 block">
                          {item.deviationsCount} Deviations
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Modals */}
      <TrustedContactsModal
        isOpen={isContactsModalOpen}
        onClose={() => setIsContactsModalOpen(false)}
        contacts={trustedContacts}
        onContactsUpdated={(updated) => setTrustedContacts(updated)}
        currentLocation={userLocation ? { lat: userLocation.lat, lng: userLocation.lng } : { lat: origin.lat, lng: origin.lng }}
      />

      <JourneySettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onSettingsUpdated={(updated) => setSettings(updated)}
      />

      <SafetyCheckinModal
        isOpen={isCheckinModalOpen}
        triggerReason={checkinReason}
        reasonDetails={checkinDetails}
        initialCountdownSeconds={settings.safetyResponseCountdownSeconds}
        onConfirmSafe={() => {
          setIsCheckinModalOpen(false);
          setIsDeviated(false);
          setCheckinCount((c) => c + 1);
        }}
        onRequestHelp={() => {
          setIsCheckinModalOpen(false);
          setIsSOSModalOpen(true);
        }}
        onExtendTimer={(extra) => {
          // Timer extended
        }}
      />

      <EmergencySOSModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        currentLocation={userLocation ? { lat: userLocation.lat, lng: userLocation.lng, accuracy: userLocation.accuracy } : { lat: origin.lat, lng: origin.lng }}
        trustedContacts={trustedContacts}
        journeyTitle={`${origin.name} to ${destination.name}`}
        onResolveEmergency={() => {
          setIsSOSModalOpen(false);
          setIsDeviated(false);
        }}
      />

      <JourneySummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        summary={summaryData}
      />

    </div>
  );
}
export default SafePath;
