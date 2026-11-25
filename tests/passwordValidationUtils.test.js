// Unit tests for passwordValidationUtils.js
// TechZone requires a minimum password length when customers create an account.
import { hasMinimumLength } from '../src/validation/passwordValidationUtils.js';

// hasMinimumLength(): used to check that a password is long enough
describe('hasMinimumLength', () => {
  test('accepts a password longer than the minimum', () => {
    expect(hasMinimumLength('TechZone2026', 8)).toBe(true);
  });

  test('accepts a password exactly at the minimum length', () => {
    expect(hasMinimumLength('abcd1234', 8)).toBe(true);
  });

  test('rejects a password one character too short', () => {
    expect(hasMinimumLength('abc1234', 8)).toBe(false);
  });

  test('rejects an empty password', () => {
    expect(hasMinimumLength('', 8)).toBe(false);
  });

  test('accepts any password when the minimum is zero', () => {
    expect(hasMinimumLength('', 0)).toBe(true);
  });
});