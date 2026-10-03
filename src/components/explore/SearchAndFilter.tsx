import React, { useMemo } from "react";
import {
    MagnifyingGlassIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

interface SearchAndFilterProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    selectedGroup: string;
    setSelectedGroup: React.Dispatch<React.SetStateAction<string>>;
    dataSet: Array<{ category?: string; group?: string }>;
    searchPlaceholder?: string;
    filterLabel?: string;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchQuery,
    setSearchQuery,
    selectedGroup,
    setSelectedGroup,
    dataSet,
    searchPlaceholder = "Search by name, medical condition, or nutritional goal...",
    filterLabel = "Group:",
}) => {
    const groups = useMemo(() => {
        const list = new Set<string>();
        dataSet.forEach((b) => {
            const val = b.category || b.group;
            if (val) list.add(val);
        });
        return ["All", ...Array.from(list)];
    }, [dataSet]);

    return (
        <section aria-label="Search and Filters" className="flex flex-col gap-4">
            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full rounded-xl border border-stone-300/80 bg-white/80 py-3.5 pr-10 pl-11
                text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:border-amber-700
                focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20 shadow-2xs"
                />
                {searchQuery && (
                    <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600 cursor-pointer"
                        aria-label="Clear search"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Group Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 mr-1">
                    {filterLabel}
                </span>
                {groups.map((group) => {
                    const active = selectedGroup === group;
                    return (
                        <button
                            key={group}
                            type="button"
                            onClick={() => setSelectedGroup(group)}
                            className={`rounded-lg px-3 py-1.5 text-[10px] font-black tracking-wider uppercase transition-all duration-150 outline-none cursor-pointer
                    ${active
                                    ? "bg-amber-700 text-white shadow-xs"
                                    : "bg-stone-900/5 text-stone-600 hover:bg-stone-900/10 hover:text-stone-900"
                                }`}
                        >
                            {group}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};
