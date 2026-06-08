import React from "react";

export const NoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="pointer-events-none h-5 w-5 text-stone-400/10 transition-transform duration-300
      select-none group-hover/item:rotate-90"
    aria-hidden="true"
    {...props}
  >
    {/* Clean outer vector ring path */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />

    {/* Symmetrical diagonal 45-degree slash line path */}
    <line
      x1="5.64"
      y1="5.64"
      x2="18.36"
      y2="18.36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
