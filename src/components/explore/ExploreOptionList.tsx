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
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between border-b border-stone-200 px-1 pb-1">
        <span className="text-[10px] font-black tracking-wider text-stone-500 uppercase">
          {itemLabel} ({dataSet.length})
        </span>
        <span className="text-[10px] font-bold text-stone-400">Select to inspect</span>
      </div>

      {dataSet.length === 0 ? (
        <div
          className="rounded-xl border border-stone-200 bg-stone-50/50 p-8 text-center
            text-stone-500"
        >
          <p className="font-serif text-sm italic">No items matched "{searchQuery}"</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedGroup("All");
            }}
            className="mt-3 cursor-pointer text-[10px] font-black tracking-widest text-amber-700
              uppercase underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dataSet.map((data) => {
            const isSelected = data.id === selectedOptionId;
            const isBreedItem = Boolean(data.svgKey) || Boolean(data.weightRange);

            return (
              <button
                key={data.id}
                type="button"
                onClick={() => onOptionSlected(data)}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5
                  text-left transition-all duration-150 outline-none hover:shadow-xs ${
                    isSelected
                      ? "border-amber-700/60 bg-amber-50/70 shadow-xs ring-1 ring-amber-700/20"
                      : "border-stone-900/8 bg-white/60 hover:border-stone-300 hover:bg-white"
                  }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg p-1
                      transition-colors`}
                  >
                    {isBreedItem ? (
                      <BreedIcon
                        svgKey={data.svgKey || data.name}
                        breedName={data.name}
                        fallbackIcon={data.icon}
                        className="h-16 w-16"
                        color={isSelected ? "#b45309" : "#57534e"}
                      />
                    ) : (
                      <AssetIcon name={data.icon} className="h-16 w-16 object-contain" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-serif text-sm font-black text-stone-900">
                      {data.name}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="text-[9px] font-bold tracking-wider text-amber-800 uppercase">
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
                        <span
                          className="rounded bg-red-100 px-1 text-[8px] font-black text-red-800
                            uppercase"
                        >
                          Not Safe
                        </span>
                      ) : data.isHighRisk ? (
                        <span
                          className="rounded bg-amber-100 px-1 text-[8px] font-black text-amber-800
                            uppercase"
                        >
                          Caution
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <ArrowRightIcon
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    isSelected ? "translate-x-0.5 text-amber-700" : "text-stone-300"
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
