// Unit tests for basicMathUtils.js
// TechZone uses these functions to calculate prices at checkout.
import { add, subtract, multiply } from '../src/math/basicMathUtils.js';

// add(): used to add the cart total and the delivery cost
describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(100, 5)).toBe(105);
  });
});

// subtract(): used to take a discount off the price
describe('subtract', () => {
  test('subtracts a discount from a price', () => {
    expect(subtract(100, 10)).toBe(90);
  });
});

// multiply(): used to calculate the price of several items of the same product
describe('multiply', () => {
  test('multiplies a price by a quantity', () => {
    expect(multiply(25, 3)).toBe(75);
  });
});