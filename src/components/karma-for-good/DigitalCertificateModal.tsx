import React, { useRef } from 'react';
import { FaTimes, FaPrint, FaShareAlt, FaCheckCircle, FaAward, FaQrcode } from 'react-icons/fa';

export interface CertificateData {
  certificateId: string;
  userName: string;
  activityTitle: string;
  category: string;
  date: string;
  points: number;
  organization?: string;
  location?: string;
}

interface DigitalCertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export function DigitalCertificateModal({ certificate, onClose }: DigitalCertificateModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Karma-Path Social Impact Certificate: ${certificate.activityTitle}`,
        text: `${certificate.userName} earned ${certificate.points} Karma Points for "${certificate.activityTitle}" on Karma-Path!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `Karma-Path Verified Social Impact Certificate #${certificate.certificateId}\nRecipient: ${certificate.userName}\nActivity: ${certificate.activityTitle} (${certificate.points} KP)\nVerified on Karma-Path.`
      );
      alert('Certificate verification details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl my-6 bg-white dark:bg-[#1A0E2E] rounded-3xl shadow-2xl border border-[#7955AE]/40 overflow-hidden text-[#180B2B] dark:text-white">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden flex items-center justify-between p-4 px-6 border-b border-[#7955AE]/20 bg-[#FAF7FD] dark:bg-[#130724]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2]">
              <FaAward size={18} />
            </span>
            <div>
              <h4 className="font-cinzel font-black text-sm tracking-wide">Verified Digital Certificate</h4>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">Official Karma-Path Social Impact Contribution Credential</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition"
              title="Print or Save as PDF"
            >
              <FaPrint size={12} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 dark:bg-white/10 hover:bg-stone-200 dark:hover:bg-white/20 transition"
              title="Share Certificate"
            >
              <FaShareAlt size={12} />
              <span>Share</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-white transition"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Certificate Printable Area */}
        <div ref={printRef} className="p-6 sm:p-10 bg-gradient-to-br from-[#FFFFFF] via-[#FAF6FE] to-[#F2EBF9] dark:from-[#170B28] dark:via-[#1D0E34] dark:to-[#120722] text-[#180B2B] dark:text-[#FFFFFF] relative overflow-hidden">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 w-16 h-16 border-t-2 border-l-2 border-[#7955AE] rounded-tl-xl pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-[#7955AE] rounded-tr-xl pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-16 h-16 border-b-2 border-l-2 border-[#7955AE] rounded-bl-xl pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-16 h-16 border-b-2 border-r-2 border-[#7955AE] rounded-br-xl pointer-events-none"></div>

          {/* Watermark Seal in Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <span className="font-cinzel text-[240px] font-black">KP</span>
          </div>

          <div className="relative z-10 border-2 border-dashed border-[#7955AE]/30 p-6 sm:p-8 rounded-2xl text-center space-y-6">
            
            {/* Header: Logo and Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2] border border-[#7955AE]/30">
                <FaCheckCircle className="text-emerald-500" />
                <span>Karma-Path Verified Contribution</span>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7955AE] to-[#451F7D] text-white flex items-center justify-center font-cinzel font-black text-lg shadow-md">
                  KP
                </div>
                <div className="text-left">
                  <div className="font-cinzel font-black text-xl tracking-wider text-[#7955AE] dark:text-[#D9CCF2]">
                    KARMA FOR GOOD
                  </div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-stone-500 dark:text-stone-400">
                    Odisha Social Impact Network
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white pt-2">
                CERTIFICATE OF SOCIAL IMPACT
              </h1>
              <p className="text-xs sm:text-sm font-serif italic text-stone-600 dark:text-stone-300 max-w-lg mx-auto">
                “Every Good Deed Creates a Better World.”
              </p>
            </div>

            {/* Recipient Block */}
            <div className="space-y-3 py-2">
              <p className="text-xs font-serif uppercase tracking-widest text-stone-500 dark:text-stone-400">
                This certificate recognizes the meaningful contribution of
              </p>
              <div className="text-2xl sm:text-3xl font-cinzel font-black text-[#7955AE] dark:text-amber-300 border-b-2 border-[#7955AE]/30 pb-2 inline-block px-8">
                {certificate.userName}
              </div>
              <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-200 max-w-xl mx-auto leading-relaxed pt-1">
                towards creating a positive social impact through{' '}
                <strong className="text-[#180B2B] dark:text-white font-bold">
                  “{certificate.activityTitle}”
                </strong>
                {certificate.location ? ` in ${certificate.location}` : ''}.
              </p>
            </div>

            {/* Impact Metric & Points Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <div className="px-4 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-bold flex items-center gap-1.5">
                <FaAward className="text-amber-500" />
                <span>{certificate.points} Karma Points Awarded</span>
              </div>
              <div className="px-4 py-1.5 rounded-xl bg-[#7955AE]/10 border border-[#7955AE]/30 text-[#7955AE] dark:text-[#D9CCF2] text-xs font-bold">
                Category: {certificate.category}
              </div>
            </div>

            {/* Footer Signatures, QR and Verification ID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 pt-6 border-t border-[#7955AE]/20 text-xs">
              
              {/* Date & ID */}
              <div className="text-center sm:text-left space-y-0.5">
                <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-bold">
                  Date of Completion
                </div>
                <div className="font-bold text-[#180B2B] dark:text-white">{certificate.date}</div>
                <div className="text-[10px] text-stone-400 dark:text-stone-400 font-mono pt-1">
                  ID: {certificate.certificateId}
                </div>
              </div>

              {/* QR Code Verification Preview */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 p-1.5 rounded-lg bg-white border border-[#7955AE]/30 shadow-inner flex items-center justify-center text-stone-900">
                  <FaQrcode size={44} className="text-[#7955AE]" />
                </div>
                <span className="text-[9px] text-stone-500 dark:text-stone-400 pt-1 font-mono">
                  Scan to Verify
                </span>
              </div>

              {/* Authorized Seal */}
              <div className="text-center sm:text-right space-y-1">
                <div className="inline-block border-b border-[#7955AE]/40 px-4 pb-1">
                  <span className="font-serif italic font-bold text-[#7955AE] dark:text-amber-300 text-sm">
                    {certificate.organization || 'Karma-Path Impact Council'}
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider font-bold">
                  Authorized Verification Authority
                </div>
              </div>

            </div>

            {/* Disclaimer Footer Note */}
            <div className="pt-2 text-[9px] text-stone-400 dark:text-stone-500 text-center font-serif italic">
              This certificate verifies social contribution and ethical citizen engagement on the Karma-Path platform. It is an independent recognition of voluntary effort and not an official government credential.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
