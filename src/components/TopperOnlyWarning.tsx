import React from "react";

export const TopperOnlyWarning: React.FC = () => (
  <section className="rounded-2xl bg-amber-50/50 p-4 shadow-sm" role="status" aria-live="polite">
    <div className="flex items-start gap-3">
      <span
        className="pointer-events-none mt-0.5 text-xs text-amber-600/80 select-none"
        aria-hidden="true"
      >
        ⚠️
      </span>

      <p
        className="m-0 text-left text-[12px] leading-relaxed font-medium tracking-wide
          text-stone-500 normal-case"
      >
        <span className="mr-1 text-[11px] font-black tracking-widest text-amber-800 uppercase">
          Topper Tool Only:
        </span>
        This 10% supplemental calculator does not replace complete daily meal plans. Please consult
        your primary care veterinarian before changing feeding regimens.
      </p>
    </div>
  </section>
);
