import { createContext, useContext } from "react";
import { ALL_BREEDS, type BreedHealthProfile } from "../data/breeds";

export interface BreedContextType {
    selectedBreed: BreedHealthProfile | null;
    setSelectedBreed: (breed: BreedHealthProfile | null) => void;
    selectedBreedId: string;
    setSelectedBreedById: (id: string) => void;
    clearSelectedBreed: () => void;
}

export const BreedContext = createContext<BreedContextType>({
    selectedBreed: ALL_BREEDS[0] ?? null,
    setSelectedBreed: () => null,
    selectedBreedId: ALL_BREEDS[0]?.id ?? "",
    setSelectedBreedById: () => null,
    clearSelectedBreed: () => null,
});

export const useBreed = (): BreedContextType => {
    const context = useContext(BreedContext);
    if (!context) {
        throw new Error("useBreed must be used within a BreedProvider");
    }
    return context;
};

export const useSelectedBreed = useBreed;
