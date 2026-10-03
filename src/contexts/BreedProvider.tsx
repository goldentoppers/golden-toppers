import React, { useState, useMemo, useCallback } from "react";
import { ALL_BREEDS, type BreedHealthProfile } from "../data/breeds";
import { BreedContext } from "./BreedContext";

export const BreedProvider: React.FC<{
    children: React.ReactNode;
    initialBreed?: BreedHealthProfile | null;
}> = ({ children, initialBreed = ALL_BREEDS[0] ?? null }) => {
    const [selectedBreed, setSelectedBreed] = useState<BreedHealthProfile | null>(initialBreed);

    const setSelectedBreedById = useCallback((id: string) => {
        const found = ALL_BREEDS.find((b) => b.id === id) ?? null;
        setSelectedBreed(found);
    }, []);

    const clearSelectedBreed = useCallback(() => {
        setSelectedBreed(null);
    }, []);

    const value = useMemo(
        () => ({
            selectedBreed,
            setSelectedBreed,
            selectedBreedId: selectedBreed?.id ?? "",
            setSelectedBreedById,
            clearSelectedBreed,
        }),
        [selectedBreed, setSelectedBreedById, clearSelectedBreed]
    );

    return <BreedContext.Provider value={value}>{children}</BreedContext.Provider>;
};
