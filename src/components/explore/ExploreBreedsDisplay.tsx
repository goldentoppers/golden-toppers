import React, { useState, useMemo } from "react";
import { SearchAndFilter } from "./SearchAndFilter";
import { ExploreOptionList, type ExploreOption } from "./ExploreOptionList";

export interface ExploreItem extends ExploreOption {
    group?: string;
    healthPredispositions?: Array<{
        condition?: string;
        description?: string;
        riskLevel?: string;
    }>;
    nutritionalFocus?: string[];
    benefits?: string[];
    vitamins?: string[];
    preparation?: string;
    preparationAlert?: string;
}

export interface ExploreDataDisplayProps<T extends ExploreItem> {
    dataSet: T[];
    heading: React.ReactNode;
    details?: React.ReactNode | ((currentData: T) => React.ReactNode);
    selectedId?: string;
    onSelect?: (item: T) => void;
    searchPlaceholder?: string;
    filterLabel?: string;
    itemLabel?: string;
}

export function ExploreDataDisplay<T extends ExploreItem>({
    dataSet,
    heading,
    details,
    selectedId,
    onSelect,
    searchPlaceholder,
    filterLabel,
    itemLabel,
}: ExploreDataDisplayProps<T>) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [uncontrolledActiveId, setUncontrolledActiveId] = useState(dataSet[0]?.id || "");

    const isControlled = selectedId !== undefined;
    const effectiveActiveId = isControlled ? selectedId : uncontrolledActiveId;

    const filteredData = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        return dataSet.filter((data) => {
            const groupValue = data.category || data.group;
            const matchesGroup = selectedCategory === "All" || groupValue === selectedCategory;
            if (!matchesGroup) return false;
            if (q === "") return true;

            const nameMatch = data.name.toLowerCase().includes(q);
            const predispositionsMatch = data.healthPredispositions?.some(
                (h) => h.condition?.toLowerCase().includes(q) || h.description?.toLowerCase().includes(q)
            );
            const focusMatch = data.nutritionalFocus?.some(
                (f) => f.toLowerCase().includes(q)
            );
            const benefitsMatch = data.benefits?.some(
                (b) => b.toLowerCase().includes(q)
            );
            const vitaminsMatch = data.vitamins?.some(
                (v) => v.toLowerCase().includes(q)
            );
            const prepMatch = data.preparation?.toLowerCase().includes(q);
            const alertMatch = data.preparationAlert?.toLowerCase().includes(q);

            return Boolean(nameMatch || predispositionsMatch || focusMatch || benefitsMatch || vitaminsMatch || prepMatch || alertMatch);
        });
    }, [dataSet, searchQuery, selectedCategory]);

    const currentData = useMemo(() => {
        const match = filteredData.find((b) => b.id === effectiveActiveId);
        return match ?? filteredData[0] ?? dataSet[0];
    }, [filteredData, effectiveActiveId, dataSet]);

    const handleSelectOption = (option: ExploreOption) => {
        if (!isControlled) {
            setUncontrolledActiveId(option.id);
        }
        const match = dataSet.find((b) => b.id === option.id);
        if (match && onSelect) {
            onSelect(match);
        }
    };

    const renderDetails = () => {
        if (!details || !currentData) return null;

        if (typeof details === "function") {
            return details(currentData);
        }

        if (React.isValidElement(details)) {
            return React.cloneElement(
                details as React.ReactElement<{ breed?: T; ingredient?: T; currentData?: T }>,
                {
                    breed: currentData,
                    ingredient: currentData,
                    currentData,
                }
            );
        }

        return details;
    };

    return (
        <main className="mx-auto w-full max-w-4xl pb-24" aria-labelledby="explore-title">
            <div
                className="flex flex-col gap-8 rounded-2xl border border-stone-900/10 bg-white/70 px-4 py-8
          shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-10"
            >
                {heading ? heading : null}
                <SearchAndFilter
                    dataSet={dataSet}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedGroup={selectedCategory}
                    setSelectedGroup={setSelectedCategory}
                    searchPlaceholder={searchPlaceholder}
                    filterLabel={filterLabel}
                />

                {/* Two-Column Explorer Layout */}
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-12 text-left" aria-label="Explore Grid">
                    <ExploreOptionList
                        dataSet={filteredData}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setSelectedGroup={setSelectedCategory}
                        selectedOptionId={currentData?.id || ""}
                        onOptionSlected={handleSelectOption}
                        itemLabel={itemLabel}
                    />

                    {renderDetails()}
                </section>
            </div>
        </main>
    );
}
