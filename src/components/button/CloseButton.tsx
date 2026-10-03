import React from "react";

interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  ariaLabel: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center justify-center opacity-60 transition-opacity duration-200 hover:opacity-100"
      aria-label={ariaLabel}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-none"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
};
