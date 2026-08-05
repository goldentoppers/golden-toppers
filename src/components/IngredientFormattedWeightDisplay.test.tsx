import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { IngredientFormattedWeightDisplay } from './IngredientFormattedWeightDisplay';
import { GlobalControlOptionsContext, type GlobalContextType } from '../contexts/GlobalControlOptionsContext';
import type { RecipeResultItem } from '../types/nutrition';

const makeIngredient = (overrides: Partial<RecipeResultItem> = {}): RecipeResultItem => ({
  id: 'i1',
  name: 'Test',
  grams: 30,
  icon: 'apple',
  category: 'dairy',
  density: 'base',
  role: 'topper',
  benefits: [],
  vitamins: [],
  preparation: undefined,
  preparationAlert: undefined,
  ...overrides,
} as RecipeResultItem);

const providerValue: Partial<GlobalContextType> = {
  currentChapter: 'proteins',
  setCurrentChapter: () => null,
  isReviewOpen: false,
  setIsReviewOpen: () => null,
  formData: { weight: 65, activity: 'low', servingSize: 1, dogName: '' },
  setFormData: () => null,
  selections: { proteins: [], heartyBases: [], freshColors: [], energyBoosts: [], toppers: [] },
  selectedIds: [],
  toggleIngredient: () => null,
  clearAllSelections: () => null,
  nutritionResults: { macros: { vegetables: 0, protein: 0, carbs: 0 }, recipeItems: [], dailyCalorieTarget: 0 },
} as Partial<GlobalContextType>;

describe('IngredientFormattedWeightDisplay', () => {
  it('renders primary metric from formatSmartWeight', () => {
    const ingredient = makeIngredient();
    render(
      <GlobalControlOptionsContext.Provider value={providerValue}>
        <IngredientFormattedWeightDisplay ingredient={ingredient} />
      </GlobalControlOptionsContext.Provider>,
    );

    // For 30g dairy, formatSmartWeight returns a tbsp primary
    const primary = screen.getByText(/tbsp|tsp|g/i);
    expect(primary).toBeTruthy();
  });
});
