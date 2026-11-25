// Unit tests for guardUtils.js
// TechZone uses isDefined() to check that important customer details are not missing.
import { isDefined } from '../src/logic/guardUtils.js';

// isDefined(): used to check that a value exists before it is used
describe('isDefined', () => {
  test('returns true for a filled-in text value', () => {
    expect(isDefined('Lahti')).toBe(true);
  });

  test('returns true for the number 0 (a real value)', () => {
    expect(isDefined(0)).toBe(true);
  });

  test('returns true for an empty string (the field exists)', () => {
    expect(isDefined('')).toBe(true);
  });

  test('returns true for an object such as an order', () => {
    expect(isDefined({ id: 'A1' })).toBe(true);
  });

  test('returns false for null', () => {
    expect(isDefined(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isDefined(undefined)).toBe(false);
  });
});