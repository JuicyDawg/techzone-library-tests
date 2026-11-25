// Unit tests for roundingUtils.js
// TechZone rounds every price to two decimal places before showing it.
import { roundTo } from '../src/math/roundingUtils.js';

// roundTo(): used to round the final price to two decimals
describe('roundTo', () => {
  test('rounds down when the third decimal is below 5', () => {
    expect(roundTo(19.994, 2)).toBe(19.99);
  });

  test('rounds up when the third decimal is above 5', () => {
    expect(roundTo(19.996, 2)).toBe(20);
  });

  test('rounds a half cent up (1.005 -> 1.01)', () => {
    expect(roundTo(1.005, 2)).toBe(1.01);
  });

  test('keeps a price that already has two decimals', () => {
    expect(roundTo(59.97, 2)).toBe(59.97);
  });

  test('rounds to zero decimals', () => {
    expect(roundTo(12.6, 0)).toBe(13);
  });

  test('fixes floating point results such as 0.1 + 0.2', () => {
    expect(roundTo(0.1 + 0.2, 2)).toBe(0.3);
  });
});