import { renderHook, act } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { useBreed } from "./BreedContext";
import { BreedProvider } from "./BreedProvider";
import { ALL_BREEDS } from "../data/breeds";

describe("BreedContext", () => {
    it("provides default selected breed as the first breed in ALL_BREEDS", () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <BreedProvider>{children}</BreedProvider>
        );

        const { result } = renderHook(() => useBreed(), { wrapper });

        expect(result.current.selectedBreed).toEqual(ALL_BREEDS[0]);
        expect(result.current.selectedBreedId).toBe(ALL_BREEDS[0].id);
    });

    it("updates selected breed by object", () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <BreedProvider>{children}</BreedProvider>
        );

        const { result } = renderHook(() => useBreed(), { wrapper });

        const targetBreed = ALL_BREEDS[1];
        act(() => {
            result.current.setSelectedBreed(targetBreed);
        });

        expect(result.current.selectedBreed).toEqual(targetBreed);
        expect(result.current.selectedBreedId).toBe(targetBreed.id);
    });

    it("updates selected breed by id", () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <BreedProvider>{children}</BreedProvider>
        );

        const { result } = renderHook(() => useBreed(), { wrapper });

        const targetBreed = ALL_BREEDS[2];
        act(() => {
            result.current.setSelectedBreedById(targetBreed.id);
        });

        expect(result.current.selectedBreed).toEqual(targetBreed);
        expect(result.current.selectedBreedId).toBe(targetBreed.id);
    });

    it("clears selected breed", () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <BreedProvider>{children}</BreedProvider>
        );

        const { result } = renderHook(() => useBreed(), { wrapper });

        act(() => {
            result.current.clearSelectedBreed();
        });

        expect(result.current.selectedBreed).toBeNull();
        expect(result.current.selectedBreedId).toBe("");
    });
});
