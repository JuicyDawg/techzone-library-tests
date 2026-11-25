// Unit tests for idUtils.js
// TechZone gives every order its own ID with generateId().
import { generateId } from '../src/misc/idUtils.js';

// generateId(): used to create order numbers
describe('generateId', () => {
  test('returns a string', () => {
    expect(typeof generateId()).toBe('string');
  });

  test('returns a non-empty ID', () => {
    expect(generateId().length).toBeGreaterThan(0);
  });

  test('returns a different ID on each call', () => {
    expect(generateId()).not.toBe(generateId());
  });

  test('creates 1000 unique IDs in a row', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(generateId());
    }
    expect(ids.size).toBe(1000);
  });
});