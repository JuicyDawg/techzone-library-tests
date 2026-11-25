// Unit tests for statisticsUtils.js
// TechZone uses sum() to add up all product prices in the cart.
import { sum } from '../src/math/statisticsUtils.js';

// sum(): used to calculate the total price of the cart
describe('sum', () => {
  test('adds all prices in the cart', () => {
    expect(sum([499, 29.9, 59])).toBeCloseTo(587.9);
  });

  test('returns the price when the cart has one product', () => {
    expect(sum([1299])).toBe(1299);
  });

  test('returns 0 for an empty cart', () => {
    expect(sum([])).toBe(0);
  });

  test('handles zero prices (free items)', () => {
    expect(sum([0, 10, 0])).toBe(10);
  });

  test('handles negative values (refund lines)', () => {
    expect(sum([100, -20])).toBe(80);
  });
});