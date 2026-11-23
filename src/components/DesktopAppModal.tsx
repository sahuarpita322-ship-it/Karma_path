import React from 'react';
import { FaTimes, FaDesktop, FaCheckCircle, FaHdd, FaBolt, FaShieldAlt, FaDownload, FaLaptopCode } from 'react-icons/fa';

interface DesktopAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall?: () => void;
  isInstallable?: boolean;
  isInstalled?: boolean;
  isLocalhost?: boolean;
}

export function DesktopAppModal({ 
  isOpen, 
  onClose,
  onInstall,
  isInstallable = true,
  isInstalled = false,
  isLocalhost = false
}: DesktopAppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#1E0E34] border border-[#7955AE]/30 dark:border-[#B9A5DF]/30 shadow-2xl p-6 sm:p-8 space-y-6 text-[#180B2B] dark:text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition"
        >
          <FaTimes size={16} />
        </button>

        {/* Header with App Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-400/50 flex-shrink-0 bg-[#7955AE]" style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px' }}>
            <img src="/icon.svg.jpeg" alt="Karma-Path Logo" className="w-full h-full object-cover" width="56" height="56" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{isLocalhost ? 'Localhost & Offline Ready' : '100% Offline Mode Active'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white mt-1">
              Karma-Path Desktop & Localhost
            </h3>
          </div>
        </div>

        {/* One-Click Install CTA Button */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-[#7955AE]/15 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <FaLaptopCode />
              <span>{isInstalled ? 'App Already Installed!' : 'Install as Desktop App'}</span>
            </div>
            <div className="text-[11px] text-stone-600 dark:text-stone-300">
              {isInstalled 
                ? 'Karma-Path is currently running as an installed desktop app.' 
                : 'Click below to install directly to your Windows desktop & taskbar.'}
            </div>
          </div>

          {!isInstalled && onInstall && (
            <button
              onClick={() => {
                onInstall();
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-[#7955AE] text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 flex-shrink-0 border border-amber-300/40"
            >
              <img src="/icon.svg.jpeg" alt="Logo" className="w-5 h-5 rounded-md object-cover ring-1 ring-white/60 shadow-sm" width="20" height="20" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', objectFit: 'cover' }} />
              <span>Install to Desktop</span>
              <FaDownload size={11} className="animate-bounce ml-0.5 text-amber-300" />
            </button>
          )}
        </div>

        <p className="text-sm text-[#503C6B] dark:text-[#E8E3F0] leading-relaxed">
          Karma-Path runs seamlessly offline on <code className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-xs">localhost:5173</code> and as a standalone Windows desktop app. All 170+ heritage images, culture stories, master craft marketplaces, and SafePath navigation maps work without internet access.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/20 dark:border-white/10 space-y-1">
            <div className="flex items-center gap-2 font-bold text-[#7955AE] dark:text-[#D9CCF2]">
              <FaHdd /> 100% Local Storage
            </div>
            <p className="text-stone-600 dark:text-stone-300">
              All 172 authentic Odisha images stored locally. Zero external CDN latency.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/20 dark:border-white/10 space-y-1">
            <div className="flex items-center gap-2 font-bold text-[#7955AE] dark:text-[#D9CCF2]">
              <FaShieldAlt /> Offline SafePath
            </div>
            <p className="text-stone-600 dark:text-stone-300">
              Real GPS tracking, deviation alerts, and offline cartography radar tiles.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/20 dark:border-white/10 space-y-1">
            <div className="flex items-center gap-2 font-bold text-[#7955AE] dark:text-[#D9CCF2]">
              <FaBolt /> Instant Offline Speed
            </div>
            <p className="text-stone-600 dark:text-stone-300">
              PWA Service Worker precaches 183 assets (33 MB) for sub-second offline loads.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/20 dark:border-white/10 space-y-1">
            <div className="flex items-center gap-2 font-bold text-[#7955AE] dark:text-[#D9CCF2]">
              <FaDesktop /> Standalone Window
            </div>
            <p className="text-stone-600 dark:text-stone-300">
              Runs borderless and clean without browser toolbars or tabs.
            </p>
          </div>
        </div>

        {/* How to Launch / Install Steps */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2 text-xs">
          <div className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2">
            <FaCheckCircle /> Installation & Launch Instructions:
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 dark:text-stone-200">
            <li>
              <strong>Browser One-Click Install:</strong> Click the <strong>Install to Desktop</strong> button above, or click the install icon (⊕ or ⬇) in your browser address bar.
            </li>
            <li>
              <strong>Windows Desktop Launcher:</strong> Double-click <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">Karma-Path.bat</code> on your Windows Desktop.
            </li>
            <li>
              <strong>Localhost Dev Server:</strong> Run <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">npm run dev</code> or <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">npm run desktop</code>.
            </li>
          </ol>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7955AE] to-[#503C6B] text-white font-bold text-xs shadow-lg hover:scale-105 transition"
          >
            Got it, Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
}
