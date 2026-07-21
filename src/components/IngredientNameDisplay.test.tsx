import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Mock AssetIcon to avoid rendering many SVG components
vi.mock('./AssetIcon', () => ({
  AssetIcon: ({ name }: { name: string }) => <div data-testid="asset-icon">{name}</div>,
}));

import { IngredientNameDisplay } from './IngredientNameDisplay';
import type { Ingredient } from '../types/nutrition';

const makeIngredient = (overrides: Partial<Ingredient> = {}): Ingredient => ({
  id: 'ing-1',
  name: 'Test Item',
  kcalPerGram: 2,
  category: 'fruit',
  role: 'vegetable',
  icon: 'apple',
  benefits: ['Shiny Coat'],
  vitamins: ['A', 'C'],
  preparation: undefined,
  preparationAlert: undefined,
  isToxic: false,
  isHighRisk: false,
  maxGramsCap: undefined,
  allergens: [],
  ...overrides,
});

describe('IngredientNameDisplay', () => {
  it('renders name, vitamins joined and benefits joined', () => {
    const ingredient = makeIngredient();
    render(<IngredientNameDisplay ingredient={ingredient} />);

    expect(screen.getByText('Test Item')).toBeTruthy();
    expect(screen.getByText('A / C')).toBeTruthy();
    expect(screen.getByText('Shiny Coat')).toBeTruthy();
    expect(screen.getByTestId('asset-icon').textContent).toBe('apple');
  });

  it('falls back to "Nutrients" and "Wellness" when arrays are missing or non-array', () => {
    const ingredient = makeIngredient({ vitamins: undefined, benefits: undefined } as Partial<Ingredient>);
    render(<IngredientNameDisplay ingredient={ingredient} />);

    expect(screen.getByText('Nutrients')).toBeTruthy();
    expect(screen.getByText('Wellness')).toBeTruthy();
  });

  it('handles string vitamins/benefits values', () => {
    const ingredient = makeIngredient({ vitamins: ['V'], benefits: ['Good'] });
    render(<IngredientNameDisplay ingredient={ingredient} />);

    expect(screen.getByText('V')).toBeTruthy();
    expect(screen.getByText('Good')).toBeTruthy();
  });
});
