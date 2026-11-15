import React, { useState } from 'react';
import { 
  FaSlidersH, 
  FaTimes, 
  FaCheck, 
  FaRoute, 
  FaClock, 
  FaHourglassHalf, 
  FaRoad, 
  FaVial,
  FaShieldAlt
} from 'react-icons/fa';
import { JourneySettings } from '../../data/safePathTypes';
import { saveJourneySettings } from '../../data/safePathService';

interface JourneySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: JourneySettings;
  onSettingsUpdated: (settings: JourneySettings) => void;
}

export function JourneySettingsModal({
  isOpen,
  onClose,
  settings,
  onSettingsUpdated
}: JourneySettingsModalProps) {
  const [localSettings, setLocalSettings] = useState<JourneySettings>(settings);

  if (!isOpen) return null;

  const handleSave = () => {
    saveJourneySettings(localSettings);
    onSettingsUpdated(localSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#140C24] rounded-3xl border border-violet-200 dark:border-violet-800 shadow-2xl w-full max-w-lg overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="p-5 border-b border-violet-100 dark:border-violet-900/40 flex items-center justify-between bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-950/40 dark:to-purple-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
              <FaSlidersH />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">Safety & Tracking Settings</h2>
              <p className="text-xs text-stone-500 dark:text-violet-300">
                Configure GPS deviation tolerances and automatic alert thresholds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-white rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/40 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Setting 1: Deviation Tolerance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-800 dark:text-violet-200 flex items-center gap-1.5">
                <FaRoute className="text-violet-500" />
                <span>Route Deviation Tolerance</span>
              </label>
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-300">
                {localSettings.deviationToleranceMeters} meters
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Trigger safety check-in only when your GPS position persistently deviates farther than this threshold from the chosen road.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[150, 300, 500].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setLocalSettings({ ...localSettings, deviationToleranceMeters: val })}
                  className={`py-2 rounded-xl text-xs font-semibold border transition ${
                    localSettings.deviationToleranceMeters === val
                      ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/30'
                      : 'border-violet-200 dark:border-violet-900/60 bg-white dark:bg-violet-950/20 text-stone-700 dark:text-violet-200 hover:bg-violet-50'
                  }`}
                >
                  {val}m {val === 300 && '(Recommended)'}
                </button>
              ))}
            </div>
          </div>

          {/* Setting 2: Stationary Threshold */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-800 dark:text-violet-200 flex items-center gap-1.5">
                <FaClock className="text-violet-500" />
                <span>Unexpected Stop Detection</span>
              </label>
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-300">
                {localSettings.stationaryThresholdMinutes} mins
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Detects stationary status (&lt; 1 km/h) for longer than this duration without a declared planned break.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[3, 5, 10].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setLocalSettings({ ...localSettings, stationaryThresholdMinutes: val })}
                  className={`py-2 rounded-xl text-xs font-semibold border transition ${
                    localSettings.stationaryThresholdMinutes === val
                      ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/30'
                      : 'border-violet-200 dark:border-violet-900/60 bg-white dark:bg-violet-950/20 text-stone-700 dark:text-violet-200 hover:bg-violet-50'
                  }`}
                >
                  {val} mins {val === 5 && '(Recommended)'}
                </button>
              ))}
            </div>
          </div>

          {/* Setting 3: Safety Response Countdown */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-800 dark:text-violet-200 flex items-center gap-1.5">
                <FaHourglassHalf className="text-violet-500" />
                <span>Safety Check-In Response Window</span>
              </label>
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-300">
                {Math.round(localSettings.safetyResponseCountdownSeconds / 60)} mins ({localSettings.safetyResponseCountdownSeconds}s)
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Time allocated to tap "YES, I'M SAFE" before automatic SOS escalation contacts your family.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[300, 600, 900].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setLocalSettings({ ...localSettings, safetyResponseCountdownSeconds: val })}
                  className={`py-2 rounded-xl text-xs font-semibold border transition ${
                    localSettings.safetyResponseCountdownSeconds === val
                      ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/30'
                      : 'border-violet-200 dark:border-violet-900/60 bg-white dark:bg-violet-950/20 text-stone-700 dark:text-violet-200 hover:bg-violet-50'
                  }`}
                >
                  {Math.round(val / 60)} mins {val === 600 && '(Default)'}
                </button>
              ))}
            </div>
          </div>

          {/* Setting 4: Toggles */}
          <div className="space-y-3 pt-2 border-t border-violet-100 dark:border-violet-900/50">
            <label className="flex items-center justify-between cursor-pointer p-3 rounded-2xl bg-violet-50/40 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
              <div>
                <span className="text-xs font-bold text-stone-900 dark:text-white block">
                  Prefer Major National Highways
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  Prioritize NH-16, NH-316 and wide expressways over isolated rural lanes
                </span>
              </div>
              <input
                type="checkbox"
                checked={localSettings.preferHighways}
                onChange={(e) => setLocalSettings({ ...localSettings, preferHighways: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-3 rounded-2xl bg-violet-50/40 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40">
              <div>
                <span className="text-xs font-bold text-stone-900 dark:text-white block">
                  Auto-Share Live GPS on SOS Trigger
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  Include Google Maps coordinate link in emergency messages dispatched to contacts
                </span>
              </div>
              <input
                type="checkbox"
                checked={localSettings.autoShareLocationOnSOS}
                onChange={(e) => setLocalSettings({ ...localSettings, autoShareLocationOnSOS: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500"
              />
            </label>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-violet-100 dark:border-violet-900/40 bg-violet-50/50 dark:bg-violet-950/20 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-stone-200 dark:border-violet-800 text-stone-600 dark:text-violet-300 text-xs font-semibold hover:bg-stone-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-lg shadow-violet-600/30 transition flex items-center gap-1.5"
          >
            <FaCheck />
            <span>Apply Settings</span>
          </button>
        </div>

      </div>
    </div>
  );
}
