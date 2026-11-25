// Unit tests for emailValidationUtils.js
// TechZone checks the customer's email address at login and checkout.
import { isEmail } from '../src/validation/emailValidationUtils.js';

// isEmail(): used to check that the customer's email address is valid
describe('isEmail', () => {
  test('accepts a normal email address', () => {
    expect(isEmail('nicolae@techzone.fi')).toBe(true);
  });

  test('accepts an email with a dot and a subdomain', () => {
    expect(isEmail('first.last@student.lab.fi')).toBe(true);
  });

  test('rejects text without an @ symbol', () => {
    expect(isEmail('nicolae.techzone.fi')).toBe(false);
  });

  test('rejects an email without a domain', () => {
    expect(isEmail('nicolae@')).toBe(false);
  });

  test('rejects an email without a name before the @', () => {
    expect(isEmail('@techzone.fi')).toBe(false);
  });

  test('rejects an empty string', () => {
    expect(isEmail('')).toBe(false);
  });
});