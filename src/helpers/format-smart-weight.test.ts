import { describe, it, expect } from 'vitest';
import { formatSmartWeight } from './format-smart-weight';

describe('formatSmartWeight', () => {
  it('returns 0g for non-positive grams', () => {
    expect(
      formatSmartWeight({ grams: 0, category: 'grain', servingSize: 1 })
    ).toEqual({ primary: '0g' });
  });

  it('formats eggs specially when ingredientId is egg-whole', () => {
    const res = formatSmartWeight({
      grams: 50,
      category: 'egg',
      ingredientId: 'egg-whole',
      servingSize: 1,
    });

    expect(res.primary).toBe('1.0 Egg');
    expect(res.subtext).toBe('50g • 1.8 oz');
  });

  it('uses pounds for heavy meats >= 0.5 lb', () => {
    const res = formatSmartWeight({ grams: 500, category: 'meat', servingSize: 1 });
    expect(res).toEqual({ primary: '1.1 lb' });
  });

  it('returns grams + oz for smaller mass items', () => {
    const res = formatSmartWeight({ grams: 100, category: 'meat', servingSize: 1 });
    expect(res.primary).toBe('100g');
    expect(res.subtext).toBe('3.5 oz');
  });

  it('uses tablespoons for dense microportions like dairy when >= 1 tbsp', () => {
    const res = formatSmartWeight({ grams: 30, category: 'dairy', servingSize: 1 });
    expect(res).toEqual({ primary: '2.0 tbsp' });
  });

  it('falls back to teaspoon fractions for very small amounts', () => {
    const res = formatSmartWeight({ grams: 1, category: 'topper', role: 'topper', servingSize: 1 });
    // 1g -> tbsp = 1/8.5 = 0.1176 -> tsp = 0.3528 -> should map to 1/2 tsp
    expect(res).toEqual({ primary: '1/2 tsp' });
  });

  it('rounds to whole teaspoons when > 0.65 tsp', () => {
    const res = formatSmartWeight({ grams: 3, category: 'topper', servingSize: 1 });
    // 3g -> tbsp = 0.3529 -> tsp = 1.0587 -> rounds to 1 tsp
    expect(res).toEqual({ primary: '1 tsp' });
  });
});
