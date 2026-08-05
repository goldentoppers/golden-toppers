import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useNutrition } from './useNutrition';
import type { Ingredient } from '../types/nutrition';

function TestHarness({ weightLbs, activity, ingredients }: { weightLbs: number; activity: 'low' | 'moderate' | 'high'; ingredients: Ingredient[] }) {
  const result = useNutrition(weightLbs, activity, ingredients);
  return <pre data-testid="result">{JSON.stringify(result)}</pre>;
}

describe('useNutrition', () => {
  it('returns macro buckets and no recipeItems when no ingredients selected', () => {
    render(<TestHarness weightLbs={44} activity="moderate" ingredients={[]} />);
    const raw = screen.getByTestId('result').textContent || '';
    const parsed = JSON.parse(raw);

    // Recompute expected values using same formula
    const validWeightLbs = 44;
    const weightKg = validWeightLbs / 2.20462;
    const rer = 70 * Math.pow(weightKg, 0.75);
    const multipliers: Record<string, number> = { low: 1.2, moderate: 1.6, high: 2.0 };
    const totalCalories = Math.round(rer * multipliers['moderate']);
    const operationalTargetKcal = Math.round(totalCalories * 0.1);

    expect(parsed.dailyCalorieTarget).toBe(operationalTargetKcal);
    expect(parsed.recipeItems).toEqual([]);
    const sum = parsed.macros.vegetables + parsed.macros.protein + parsed.macros.carbs;
    expect(sum).toBe(operationalTargetKcal);
  });

  it('applies maxGramsCap and sets grams to cap when an item is capped', () => {
    const protein: Ingredient = {
      id: 'p1',
      name: 'Test Protein',
      kcalPerGram: 1,
      category: 'meat',
      role: 'protein',
      icon: 'x',
      benefits: [],
      vitamins: [],
      maxGramsCap: 1,
    };

    render(<TestHarness weightLbs={200} activity="low" ingredients={[protein]} />);
    const raw = screen.getByTestId('result').textContent || '';
    const parsed = JSON.parse(raw);

    // Only one protein selected, so it should be capped at 1 gram
    expect(parsed.recipeItems.length).toBeGreaterThanOrEqual(1);
    const p = parsed.recipeItems.find((r: Record<string, unknown>) => String(r.id) === 'p1');
    expect(p).toBeTruthy();
    expect(p.grams).toBe(1);
    expect(p.kcalProvided).toBeGreaterThanOrEqual(0);
  });

  it('computes grams from allocated calories when uncapped', () => {
    const protein: Ingredient = {
      id: 'p2',
      name: 'Test Protein 2',
      kcalPerGram: 2,
      category: 'meat',
      role: 'protein',
      icon: 'x',
      benefits: [],
      vitamins: [],
    };

    render(<TestHarness weightLbs={100} activity="moderate" ingredients={[protein]} />);
    const raw = screen.getByTestId('result').textContent || '';
    const parsed = JSON.parse(raw);

    const p = parsed.recipeItems.find((r: Record<string, unknown>) => String(r.id) === 'p2');
    expect(p).toBeTruthy();
    expect(p.grams).toBeGreaterThan(0);
    expect(p.kcalProvided).toBeGreaterThan(0);
  });

  it('zeroes out items that are toxic or have non-positive kcalPerGram', () => {
    const bad: Ingredient = {
      id: 'bad',
      name: 'Toxic',
      kcalPerGram: 5,
      category: 'meat',
      role: 'protein',
      icon: 'a',
      benefits: [],
      vitamins: [],
      isToxic: true,
    };

    const zeroKcal: Ingredient = {
      id: 'z',
      name: 'Zero',
      kcalPerGram: 0,
      category: 'vegetable',
      role: 'vegetable',
      icon: 'b',
      benefits: [],
      vitamins: [],
    };

    render(<TestHarness weightLbs={100} activity="moderate" ingredients={[bad, zeroKcal]} />);
    const raw = screen.getByTestId('result').textContent || '';
    const parsed = JSON.parse(raw);

    const b = parsed.recipeItems.find((r: Record<string, unknown>) => String(r.id) === 'bad');
    const z = parsed.recipeItems.find((r: Record<string, unknown>) => String(r.id) === 'z');

    expect(b.grams).toBe(0);
    expect(b.kcalProvided).toBe(0);
    expect(z.grams).toBe(0);
    expect(z.kcalProvided).toBe(0);
  });
});
