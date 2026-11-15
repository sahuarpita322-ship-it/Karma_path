import React from 'react';
import { 
  FaCheckCircle, 
  FaRoad, 
  FaClock, 
  FaTachometerAlt, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';
import { JourneyHistoryRecord } from '../../data/safePathTypes';

interface JourneySummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary: JourneyHistoryRecord | null;
}

export function JourneySummaryModal({
  isOpen,
  onClose,
  summary
}: JourneySummaryModalProps) {
  if (!isOpen || !summary) return null;

  return (
    <div className="fixed inset-0 z-[1250] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#160C26] rounded-3xl border border-emerald-500/40 shadow-2xl w-full max-w-lg overflow-hidden animate-scaleUp">
        
        {/* Celebration Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-3xl mb-3 shadow-lg">
            <FaCheckCircle />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-200 block font-bold">
            Journey Completed Safely
          </span>
          <h2 className="text-xl font-extrabold font-cinzel mt-1">Arrival Confirmed</h2>
          <p className="text-xs text-white/90 mt-1 max-w-sm mx-auto">
            You have safely reached your destination. Safety tracking for this route has concluded.
          </p>
        </div>

        {/* Journey Stats Grid */}
        <div className="p-6 space-y-4">
          {/* Origin -> Destination Box */}
          <div className="p-4 rounded-2xl bg-violet-50/60 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/50">
            <span className="text-[10px] uppercase font-bold text-violet-600 dark:text-violet-400 block mb-1">
              Route Path
            </span>
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-white">
              <span className="truncate">{summary.origin}</span>
              <FaArrowRight className="text-violet-500 text-xs flex-shrink-0" />
              <span className="truncate">{summary.destination}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 font-medium">
                {summary.transportMode}
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400">
                {new Date(summary.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} – {new Date(summary.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* 4 Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-violet-950/20 border border-stone-200 dark:border-violet-900/40">
              <div className="flex items-center gap-2 text-violet-600 text-xs mb-1">
                <FaRoad />
                <span className="font-medium text-stone-600 dark:text-stone-300">Distance</span>
              </div>
              <div className="text-xl font-extrabold text-stone-900 dark:text-white">
                {summary.totalDistanceKm} <span className="text-xs font-normal text-stone-500">km</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-violet-950/20 border border-stone-200 dark:border-violet-900/40">
              <div className="flex items-center gap-2 text-teal-600 text-xs mb-1">
                <FaClock />
                <span className="font-medium text-stone-600 dark:text-stone-300">Travel Time</span>
              </div>
              <div className="text-xl font-extrabold text-stone-900 dark:text-white">
                {summary.totalDurationMinutes} <span className="text-xs font-normal text-stone-500">mins</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-violet-950/20 border border-stone-200 dark:border-violet-900/40">
              <div className="flex items-center gap-2 text-indigo-600 text-xs mb-1">
                <FaTachometerAlt />
                <span className="font-medium text-stone-600 dark:text-stone-300">Avg Speed</span>
              </div>
              <div className="text-xl font-extrabold text-stone-900 dark:text-white">
                {summary.averageSpeedKmh} <span className="text-xs font-normal text-stone-500">km/h</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-violet-950/20 border border-stone-200 dark:border-violet-900/40">
              <div className="flex items-center gap-2 text-amber-600 text-xs mb-1">
                <FaShieldAlt />
                <span className="font-medium text-stone-600 dark:text-stone-300">Safety Checks</span>
              </div>
              <div className="text-xl font-extrabold text-stone-900 dark:text-white">
                {summary.checkinsCount} <span className="text-xs font-normal text-stone-500">verified</span>
              </div>
            </div>
          </div>

          {summary.deviationsCount > 0 && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
              <FaExclamationTriangle className="flex-shrink-0" />
              <span>{summary.deviationsCount} route deviations were monitored and resolved during this trip.</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold text-xs shadow-xl shadow-violet-600/30 transition"
          >
            Return to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
