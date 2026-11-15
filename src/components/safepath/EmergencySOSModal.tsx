import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaExclamationTriangle, 
  FaShareAlt, 
  FaCopy, 
  FaCheck, 
  FaTimes, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaSms,
  FaBroadcastTower,
  FaHeartbeat
} from 'react-icons/fa';
import { TrustedContact } from '../../data/safePathTypes';
import { dispatchEmergencyNotificationToContacts, generateEmergencyMessage } from '../../data/safePathService';

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: { lat: number; lng: number; accuracy?: number } | null;
  trustedContacts: TrustedContact[];
  journeyTitle?: string;
  onResolveEmergency: () => void;
}

export function EmergencySOSModal({
  isOpen,
  onClose,
  currentLocation,
  trustedContacts,
  journeyTitle = 'Karma-Path Travel Route',
  onResolveEmergency
}: EmergencySOSModalProps) {
  const [copied, setCopied] = useState(false);
  const [dispatchedLogs, setDispatchedLogs] = useState<string[]>([]);

  if (!isOpen) return null;

  const lat = currentLocation?.lat || 20.2961;
  const lng = currentLocation?.lng || 85.8245;
  const googleMapsUrl = `https://maps.google.com/?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
  const emergencyMessage = generateEmergencyMessage({
    travellerName: 'Karma-Path Traveler',
    reason: 'Emergency Alert',
    lat,
    lng,
    accuracyMeters: currentLocation?.accuracy,
    destination: journeyTitle,
    timestamp: new Date().toLocaleTimeString()
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${emergencyMessage}\nLive Map: ${googleMapsUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDispatchToAll = async () => {
    if (trustedContacts.length === 0) {
      alert('No trusted contacts registered yet. Please add trusted contacts in Safe Path settings.');
      return;
    }
    const logs = await dispatchEmergencyNotificationToContacts(
      trustedContacts,
      'Emergency Alert',
      { lat, lng, accuracyMeters: currentLocation?.accuracy },
      journeyTitle
    );
    setDispatchedLogs(logs.map(l => `${l.contactName} (${l.contactPhone})`));
  };

  const openSms = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const smsUrl = `sms:+${cleanPhone}?body=${encodeURIComponent(emergencyMessage)}`;
    window.open(smsUrl, '_blank');
  };

  const openWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(emergencyMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[1400] bg-red-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#180A1C] rounded-3xl border-2 border-red-500 shadow-2xl w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden animate-scaleUp">
        
        {/* Urgent Header */}
        <div className="p-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl animate-pulse">
              <FaHeartbeat />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold">EMERGENCY SOS ACTIVE</span>
              </div>
              <h2 className="text-xl font-extrabold font-cinzel">Travel Safety Immediate Assistance</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/20 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* Main 112 Helpline Card */}
          <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-center space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 dark:text-red-300">
              India National Emergency Service
            </span>
            <div>
              <a
                href="tel:112"
                className="w-full py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg shadow-xl shadow-red-600/40 transition transform active:scale-98 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt className="text-xl animate-bounce" />
                <span>CALL 112 HELPLINE NOW</span>
              </a>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 max-w-md mx-auto">
              Dialing <strong>112</strong> connects directly to India's Emergency Response Support System (ERSS) for immediate Police, Ambulance, and Fire & Rescue response.
            </p>
          </div>

          {/* Current GPS Location Card */}
          <div className="p-4 rounded-2xl bg-violet-50/60 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-900 dark:text-violet-200">
                <FaMapMarkerAlt className="text-violet-600" />
                <span>Your Real-Time GPS Coordinates</span>
              </div>
              {currentLocation?.accuracy && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-200 dark:bg-violet-900/60 text-violet-800 dark:text-violet-200">
                  ±{Math.round(currentLocation.accuracy)}m accuracy
                </span>
              )}
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-[#120824] border border-violet-200 dark:border-violet-800 font-mono text-xs flex items-center justify-between">
              <span className="text-stone-800 dark:text-violet-100 select-all">
                {lat.toFixed(6)}, {lng.toFixed(6)}
              </span>
              <button
                onClick={handleCopyLink}
                className="px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-900/60 hover:bg-violet-200 text-violet-700 dark:text-violet-200 text-[11px] font-semibold flex items-center gap-1 transition"
              >
                {copied ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>

            <p className="text-[10px] text-stone-500 dark:text-violet-300/80">
              Share this exact link with emergency responders or local authorities for precise pinpointing.
            </p>
          </div>

          {/* Trusted Contacts Notification Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-violet-200 flex items-center gap-1.5">
                <FaShieldAlt className="text-violet-500" />
                <span>Alert Trusted Contacts ({trustedContacts.length})</span>
              </h3>
              {trustedContacts.length > 0 && (
                <button
                  onClick={handleDispatchToAll}
                  className="px-3 py-1 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold shadow-md shadow-violet-600/20 hover:scale-102 transition flex items-center gap-1"
                >
                  <FaShareAlt className="text-[10px]" />
                  <span>Send to All</span>
                </button>
              )}
            </div>

            {dispatchedLogs.length > 0 && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 space-y-1">
                <span className="font-bold flex items-center gap-1">
                  <FaCheck className="text-emerald-600" /> Alert dispatched to:
                </span>
                <p className="text-[11px] font-mono">{dispatchedLogs.join(', ')}</p>
              </div>
            )}

            {trustedContacts.length === 0 ? (
              <div className="p-4 rounded-xl border border-dashed border-stone-300 dark:border-violet-900 text-center text-xs text-stone-500 dark:text-violet-300">
                No trusted contacts have been configured. You can still call 112 or copy your GPS link above to send manually.
              </div>
            ) : (
              <div className="space-y-2">
                {trustedContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-violet-950/20 border border-stone-200 dark:border-violet-900/40 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-stone-900 dark:text-white truncate">
                          {contact.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300">
                          {contact.relationship}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400 mt-0.5">
                        {contact.phone}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${contact.phone.replace(/\D/g, '')}`}
                        className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs shadow-md transition"
                        title="Direct Call"
                      >
                        <FaPhoneAlt />
                      </a>
                      <button
                        onClick={() => openSms(contact.phone)}
                        className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs shadow-md transition"
                        title="Send SMS"
                      >
                        <FaSms />
                      </button>
                      <button
                        onClick={() => openWhatsApp(contact.phone)}
                        className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs shadow-md transition"
                        title="Send WhatsApp"
                      >
                        <FaWhatsapp />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Resolution Card */}
        <div className="p-4 border-t border-stone-200 dark:border-violet-900/60 bg-stone-50 dark:bg-violet-950/30 flex items-center justify-between">
          <p className="text-[11px] text-stone-500 dark:text-violet-300">
            Keep this screen open until help arrives or situation is safe.
          </p>
          <button
            onClick={() => {
              onResolveEmergency();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition flex items-center gap-1.5"
          >
            <FaCheck />
            <span>I Am Safe Now — Resolve SOS</span>
          </button>
        </div>

      </div>
    </div>
  );
}
