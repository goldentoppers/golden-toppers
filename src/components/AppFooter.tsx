import React from "react";
import { AssetIcon } from "./AssetIcon";

interface AppFooterProps {
  backgroundImage: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({ backgroundImage }) => (
  <footer className="relative mt-12 w-full overflow-hidden p-6 select-none sm:p-8 print:hidden">
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <img
        src={backgroundImage}
        alt=""
        className="h-full w-full object-cover object-bottom mix-blend-multiply saturate-[0.8]
          filter"
      />

      <div
        className="absolute inset-0 h-full w-full bg-linear-to-b from-[#f5f2eb] via-[#f5f2eb]/60
          to-transparent"
        aria-hidden="true"
      />
    </div>

    <div
      className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center pb-24
        text-center md:pb-4"
    >
      <div className="flex items-center justify-center gap-1 text-stone-900">
        <AssetIcon name="laying-down-head-up-side-profile" className="h-16 w-16" />
        <span className="text-[11px] font-black tracking-[0.25em] text-stone-900 uppercase">
          Golden Toppers
        </span>
      </div>

      <p className="text-[10px] leading-none font-black tracking-[0.18em] text-stone-600 uppercase">
        Built with care for my Goldens Sunny & Charlie
      </p>

      <p
        className="w-full pt-4 text-[10px] leading-none font-medium tracking-wider text-stone-500/80
          uppercase select-text"
      >
        &copy; {new Date().getFullYear()} Golden Toppers. All Rights Reserved.
      </p>
    </div>
  </footer>
);
