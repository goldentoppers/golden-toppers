import { renderHook, act } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { useBreedRecipeBuilder } from "./useRecipeBuilder";
import { GlobalControlOptionsProvider } from "../contexts/GlobalControlOptionsProvider";
import { GlobalControlOptionsContext, type GlobalContextType } from "../contexts/GlobalControlOptionsContext";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import { ALL_BREEDS } from "../data/breeds";

describe("useBreedRecipeBuilder", () => {
    it("preselects recommended toppers and routes to review mode", () => {
        let contextValue: GlobalContextType | null = null;

        const Consumer = () => {
            contextValue = React.useContext(GlobalControlOptionsContext);
            return null;
        };

        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MemoryRouter initialEntries={["/explore"]}>
                <GlobalControlOptionsProvider allIngredients={INGREDIENT_LIBRARY}>
                    <Consumer />
                    {children}
                </GlobalControlOptionsProvider>
            </MemoryRouter>
        );

        const { result } = renderHook(() => useBreedRecipeBuilder(), { wrapper });

        const goldenRetriever = ALL_BREEDS.find((b) => b.id === "golden-retriever")!;
        expect(goldenRetriever).toBeDefined();

        act(() => {
            result.current(goldenRetriever);
        });

        expect(contextValue).not.toBeNull();
        const ctx = contextValue as unknown as GlobalContextType;

        expect(ctx.isReviewOpen).toBe(true);
        expect(ctx.selectedIds.length).toBeGreaterThan(0);
        // Golden retriever recommended toppers: Fresh Blueberries, Wild Salmon Fillets, Steamed Broccoli, Pureed Sweet Potato
        expect(ctx.selectedIds).toContain("blueberries");
        expect(ctx.selectedIds).toContain("salmon-fillet");
        expect(ctx.selectedIds).toContain("broccoli");
        expect(ctx.selectedIds).toContain("sweet-potato");
        expect(ctx.formData.dogName).toBe("");
    });
});
