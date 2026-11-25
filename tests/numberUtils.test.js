// Unit tests for numberUtils.js
// TechZone uses isNegative() to block negative prices and quantities.
import { isNegative } from '../src/math/numberUtils.js';

// isNegative(): used to stop negative prices and quantities
describe('isNegative', () => {
  test('returns true for a negative number', () => {
    expect(isNegative(-5)).toBe(true);
  });

  test('returns true for a small negative decimal', () => {
    expect(isNegative(-0.01)).toBe(true);
  });

  test('returns false for a positive number', () => {
    expect(isNegative(5)).toBe(false);
  });

  test('returns false for zero', () => {
    expect(isNegative(0)).toBe(false);
  });

  test('returns false for NaN (not a number)', () => {
    expect(isNegative(NaN)).toBe(false);
  });
});