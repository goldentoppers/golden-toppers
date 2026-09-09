import React from "react";

type SectionDividerProps = {
    className?: string;
    lineClassName?: string;
    markerClassName?: string;
};

export const SectionDivider: React.FC<SectionDividerProps> = ({
    className = "",
    lineClassName = "bg-amber-700/10",
    markerClassName = "h-1.5 w-1.5 rotate-45 border border-amber-700/50",
}) => (
    <div className={['flex items-center gap-3 px-3', className].filter(Boolean).join(' ')} aria-hidden="true">
        <span className={['h-px flex-1', lineClassName].filter(Boolean).join(' ')} />
        <span className={markerClassName} />
        <span className={['h-px flex-1', lineClassName].filter(Boolean).join(' ')} />
    </div>
);
