import React, { ReactNode } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface AndroidFrameProps {
  enabled: boolean;
  children: ReactNode;
}

export const AndroidFrame: React.FC<AndroidFrameProps> = ({ enabled, children }) => {
  if (!enabled) {
    return <div className="min-h-screen bg-slate-100 flex flex-col">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 py-6 px-4 flex items-center justify-center">
      {/* Android Device Outer Casing */}
      <div className="relative w-full max-w-[420px] h-[860px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700/80 ring-1 ring-white/10 flex flex-col overflow-hidden">
        {/* Device Top Status Bar */}
        <div className="w-full bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between text-xs font-semibold z-40 select-none rounded-t-[32px]">
          <span className="tracking-tight text-[11px] text-slate-200">9:41 AM</span>
          {/* Punch-hole camera */}
          <div className="w-3.5 h-3.5 bg-black rounded-full ring-2 ring-slate-800 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Screen Viewport with internal scrolling */}
        <div className="flex-1 bg-slate-100 overflow-y-auto relative flex flex-col rounded-b-[24px]">
          {children}
        </div>

        {/* Android Soft Pill Navigation Bar */}
        <div className="w-full h-5 bg-slate-950 flex items-center justify-center select-none pt-1">
          <div className="w-28 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};
