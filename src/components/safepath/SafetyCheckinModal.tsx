import React, { useEffect, useState } from 'react';
import { 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaHourglassHalf, 
  FaPhoneAlt, 
  FaPlusCircle,
  FaMapMarkerAlt
} from 'react-icons/fa';

interface SafetyCheckinModalProps {
  isOpen: boolean;
  triggerReason: 'Deviation' | 'Unexpected Stop' | 'Routine Check-In' | 'Manual';
  reasonDetails?: string;
  initialCountdownSeconds?: number; // Default 600s (10 mins)
  onConfirmSafe: () => void;
  onRequestHelp: () => void;
  onExtendTimer: (extraSeconds: number) => void;
}

export function SafetyCheckinModal({
  isOpen,
  triggerReason,
  reasonDetails,
  initialCountdownSeconds = 600,
  onConfirmSafe,
  onRequestHelp,
  onExtendTimer
}: SafetyCheckinModalProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialCountdownSeconds);

  useEffect(() => {
    if (isOpen) {
      setSecondsLeft(initialCountdownSeconds);
    }
  }, [isOpen, initialCountdownSeconds]);

  // Live countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Timeout reached: automatic emergency escalation
          onRequestHelp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, onRequestHelp]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

  const isUrgent = secondsLeft < 120; // Last 2 minutes

  const getReasonTitle = () => {
    switch (triggerReason) {
      case 'Deviation':
        return 'Unexpected Route Deviation Detected';
      case 'Unexpected Stop':
        return 'Prolonged Stationary Stop Detected';
      case 'Routine Check-In':
        return 'Scheduled Safety Verification';
      default:
        return 'Safety Check-In Required';
    }
  };

  return (
    <div className="fixed inset-0 z-[1300] bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#160B29] rounded-3xl border-2 border-amber-500/70 dark:border-amber-500/60 shadow-2xl w-full max-w-md overflow-hidden text-center animate-scaleUp">
        
        {/* Pulsing Warning Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-4 text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-3xl mb-2 animate-bounce">
            <FaExclamationTriangle />
          </div>
          <h2 className="text-xl font-bold font-cinzel tracking-tight">Are You Safe?</h2>
          <p className="text-xs text-white/90 font-medium mt-0.5">{getReasonTitle()}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {reasonDetails ? (
            <p className="text-xs text-stone-600 dark:text-violet-200 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-2xl border border-amber-200 dark:border-amber-800">
              {reasonDetails}
            </p>
          ) : (
            <p className="text-xs text-stone-600 dark:text-violet-200">
              Karma-Path detected an event requiring your confirmation. Please confirm you are safe before the countdown expires.
            </p>
          )}

          {/* Countdown Clock */}
          <div className={`p-4 rounded-3xl border ${
            isUrgent 
              ? 'bg-red-50 dark:bg-red-950/40 border-red-400 text-red-600 dark:text-red-300 animate-pulse' 
              : 'bg-violet-50/50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-900 dark:text-violet-100'
          }`}>
            <span className="text-[11px] uppercase font-bold tracking-wider opacity-75 block">
              Time Remaining Before Automatic Emergency Escalation
            </span>
            <div className="text-4xl font-extrabold font-mono tracking-wider my-1">
              {formattedTime}
            </div>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">
              If you don't respond, SOS alert will automatically be dispatched to your trusted contacts and 112 helpline details will open.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {/* Primary Safe Button */}
            <button
              onClick={onConfirmSafe}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition transform active:scale-98 flex items-center justify-center gap-2"
            >
              <FaCheckCircle className="text-base" />
              <span>YES, I'M SAFE</span>
            </button>

            {/* Extend Timer Button */}
            <button
              onClick={() => {
                onExtendTimer(300);
                setSecondsLeft((prev) => prev + 300);
              }}
              className="w-full py-2.5 px-4 rounded-2xl bg-violet-100 dark:bg-violet-900/50 hover:bg-violet-200 dark:hover:bg-violet-900 text-violet-800 dark:text-violet-200 font-semibold text-xs transition flex items-center justify-center gap-2"
            >
              <FaPlusCircle />
              <span>EXTEND TIMER (+5 MINS / PLANNED STOP)</span>
            </button>

            {/* Emergency Help Button */}
            <button
              onClick={onRequestHelp}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs shadow-lg shadow-red-600/25 transition flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              <span>I NEED HELP — TRIGGER EMERGENCY SOS</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
