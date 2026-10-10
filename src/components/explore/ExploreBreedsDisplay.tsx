import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
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
    const [activeDataId, setActiveDataId] = useState(selectedId || dataSet[0]?.id || "");
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        const match = filteredData.find((b) => b.id === activeDataId);
        return match ?? filteredData[0] ?? dataSet[0];
    }, [filteredData, activeDataId, dataSet]);

    const handleSelectOption = (option: ExploreOption) => {
        setActiveDataId(option.id);
        const match = dataSet.find((b) => b.id === option.id);
        if (match && onSelect) {
            onSelect(match);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (!isModalOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen]);

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
        <main className="mx-auto w-full max-w-4xl sm:pb-24" aria-labelledby="explore-title">
            <div
                className="flex flex-col gap-8 sm:rounded-2xl sm:border border-stone-900/10 sm:bg-white/70 sm:px-4 sm:py-8
          sm:shadow-[0_8px_28px_rgba(28,25,23,0.08)] px-5 sm:px-10 sm:py-10"
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

                {/* Explore List */}
                <section className="w-full text-left" aria-label="Explore List">
                    <ExploreOptionList
                        dataSet={filteredData}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setSelectedGroup={setSelectedCategory}
                        selectedOptionId={isModalOpen ? (currentData?.id || "") : (selectedId || "")}
                        onOptionSlected={handleSelectOption}
                        itemLabel={itemLabel}
                    />
                </section>

                {/* Details Popup Modal (Mounted via portal to escape parent stacking contexts & backdrop-blur) */}
                {isModalOpen && currentData && typeof document !== "undefined"
                    ? createPortal(
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${currentData.name} details`}
                        >
                            {/* Backdrop overlay (separate layer so fading backdrop never makes the white modal card transparent) */}
                            <div
                                className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-150"
                                onClick={handleCloseModal}
                                aria-hidden="true"
                            />

                            {/* Modal Card (100% solid white background, high z-index, stops event propagation) */}
                            <div
                                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-stone-900/10 p-6 sm:p-8 text-left"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900 outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                                    aria-label="Close details popup"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>

                                {renderDetails()}
                            </div>
                        </div>,
                        document.body
                    )
                    : null}
            </div>
        </main>
    );
}
