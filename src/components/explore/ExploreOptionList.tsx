import { ArrowRightIcon } from "lucide-react";
import { BreedIcon } from "../icon/BreedIcon";
import { AssetIcon } from "../icon/AssetIcon";

export interface ExploreOption {
    id: string;
    name: string;
    icon: string;
    category: string;
    svgKey?: string;
    weightRange?: string;
    role?: string;
    isToxic?: boolean;
    isHighRisk?: boolean;
    maxGramsCap?: number;
}

interface ExploreOptionListProps {
    dataSet: ExploreOption[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setSelectedGroup: (group: string) => void;
    selectedOptionId: string;
    onOptionSlected: (option: ExploreOption) => void;
    itemLabel?: string;
}

export const ExploreOptionList: React.FC<ExploreOptionListProps> = ({
    dataSet,
    searchQuery,
    setSearchQuery,
    setSelectedGroup,
    selectedOptionId,
    onOptionSlected,
    itemLabel = "Items",
}) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between pb-1 px-1 border-b border-stone-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                    {itemLabel} ({dataSet.length})
                </span>
                <span className="text-[10px] font-bold text-stone-400">Select to inspect</span>
            </div>

            {dataSet.length === 0 ? (
                <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-8 text-center text-stone-500">
                    <p className="font-serif text-sm italic">No items matched "{searchQuery}"</p>
                    <button
                        type="button"
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedGroup("All");
                        }}
                        className="mt-3 text-[10px] font-black uppercase tracking-widest text-amber-700 underline cursor-pointer"
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dataSet.map((data) => {
                        const isSelected = data.id === selectedOptionId;
                        const isBreedItem = Boolean(data.svgKey) || Boolean(data.weightRange);

                        return (
                            <button
                                key={data.id}
                                type="button"
                                onClick={() => onOptionSlected(data)}
                                className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-150 cursor-pointer outline-none hover:shadow-xs
                      ${isSelected
                                        ? "border-amber-700/60 bg-amber-50/70 shadow-xs ring-1 ring-amber-700/20"
                                        : "border-stone-900/8 bg-white/60 hover:bg-white hover:border-stone-300"
                                    }`}
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors p-1
                          ${isSelected ? "bg-amber-700/15" : "bg-stone-100"}`}
                                    >
                                        {isBreedItem ? (
                                            <BreedIcon
                                                svgKey={data.svgKey || data.name}
                                                breedName={data.name}
                                                fallbackIcon={data.icon}
                                                className="h-8 w-8"
                                                color={isSelected ? "#b45309" : "#57534e"}
                                            />
                                        ) : (
                                            <AssetIcon
                                                name={data.icon}
                                                className="h-8 w-8 object-contain"
                                            />
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-serif text-sm font-black text-stone-900 truncate">
                                            {data.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-800">
                                                {data.category}
                                            </span>
                                            {data.weightRange && (
                                                <>
                                                    <span className="text-stone-300">•</span>
                                                    <span className="text-[9px] font-medium text-stone-500">
                                                        {data.weightRange}
                                                    </span>
                                                </>
                                            )}
                                            {Boolean(data.isToxic) || data.maxGramsCap === 0 ? (
                                                <span className="rounded bg-red-100 px-1 text-[8px] font-black uppercase text-red-800">
                                                    Not Safe
                                                </span>
                                            ) : data.isHighRisk ? (
                                                <span className="rounded bg-amber-100 px-1 text-[8px] font-black uppercase text-amber-800">
                                                    Caution
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <ArrowRightIcon
                                    className={`h-4 w-4 shrink-0 transition-transform ${isSelected ? "text-amber-700 translate-x-0.5" : "text-stone-300"
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};