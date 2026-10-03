import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldExclamationIcon,
    SparklesIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { BreedIcon } from "../../icon/BreedIcon";
import type { BreedHealthProfile } from "../../../data/breeds";
import { useBreed } from "../../../contexts/BreedContext";

interface ExploreBreedsSelectedDetailsProps {
    breed?: BreedHealthProfile | null;
}

export const ExploreBreedsSelectedDetails: React.FC<ExploreBreedsSelectedDetailsProps> = ({ breed: propBreed }) => {
    const { selectedBreed: contextBreed } = useBreed();
    const breed = propBreed ?? contextBreed;

    return (
        <div className="lg:col-span-7">
            {breed ? (
                <article
                    className="flex flex-col gap-6 rounded-2xl border border-stone-900/10 bg-white p-6 sm:p-8 shadow-xs"
                    aria-label={`${breed.name} Medical Patterns`}
                >
                    {/* Header */}
                    <header className="flex flex-col gap-3 border-b border-stone-200 pb-5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl p-2">
                                    <BreedIcon
                                        svgKey={breed.svgKey || breed.name}
                                        breedName={breed.name}
                                        fallbackIcon={breed.icon}
                                        className="h-24 w-24"
                                        color="#b45309"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-serif text-2xl font-black text-stone-900">
                                        {breed.name}
                                    </h2>
                                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">
                                        {breed.category} Group
                                    </span>
                                </div>
                            </div>
                            {/* 
                            <Link
                                to="/"
                                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-amber-700 px-3.5 py-2 text-[10px] font-black tracking-widest text-white uppercase shadow-2xs hover:bg-amber-800 transition-colors"
                            >
                                Build Recipe
                                <ArrowRightIcon className="h-3 w-3" />
                            </Link> */}
                        </div>

                        <p className="text-xs leading-relaxed text-stone-600 font-medium">
                            {breed.overview}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-bold text-stone-600">
                            <div className="flex items-center gap-1.5">
                                <span className="text-stone-400 font-normal">Typical Weight:</span>
                                <span className="text-stone-800">{breed.weightRange}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-stone-400 font-normal">Average Lifespan:</span>
                                <span className="text-stone-800">{breed.lifespan}</span>
                            </div>
                        </div>
                    </header>

                    {/* Health & Medical Predispositions */}
                    <section aria-labelledby="predispositions-heading" className="space-y-3">
                        <div className="flex items-center gap-2">
                            <ShieldExclamationIcon className="h-4 w-4 text-amber-700" aria-hidden="true" />
                            <h3
                                id="predispositions-heading"
                                className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                            >
                                Clinical & Health Predispositions
                            </h3>
                        </div>

                        <div className="space-y-2.5">
                            {breed.healthPredispositions.map((item) => {
                                const riskBadge =
                                    item.riskLevel === "High"
                                        ? "bg-red-50 text-red-900 border-red-200"
                                        : item.riskLevel === "Moderate"
                                            ? "bg-amber-50 text-amber-900 border-amber-200"
                                            : "bg-stone-100 text-stone-800 border-stone-200";

                                return (
                                    <div
                                        key={item.condition}
                                        className="rounded-xl border border-stone-900/5 bg-stone-50/50 p-3.5 space-y-1.5"
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <h4 className="text-xs font-black text-stone-900">
                                                {item.condition}
                                            </h4>
                                            <span
                                                className={`rounded-md border px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${riskBadge}`}
                                            >
                                                {item.riskLevel} Risk
                                            </span>
                                        </div>
                                        <p className="text-[11px] leading-relaxed text-stone-600">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Recommended Fresh Toppers */}
                    <section aria-labelledby="toppers-heading" className="space-y-2.5 border-t border-stone-200 pt-5">
                        <div className="flex items-center gap-2">
                            <SparklesIcon className="h-4 w-4 text-amber-700" aria-hidden="true" />
                            <h3
                                id="toppers-heading"
                                className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                            >
                                Top Recommended Whole-Food Toppers
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {breed.recommendedToppers.map((topper) => (
                                <span
                                    key={topper}
                                    className="inline-flex items-center rounded-lg border border-amber-700/20 bg-amber-50/70 px-2.5 py-1 text-[11px] font-bold text-amber-900"
                                >
                                    {topper}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Action button for mobile view */}
                    <div className="sm:hidden pt-2">
                        <Link
                            to="/"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 py-3 text-xs font-black tracking-widest text-white uppercase shadow-xs"
                        >
                            Build Custom Bowl For This Breed
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </article>
            ) : null}
        </div>
    );
};
