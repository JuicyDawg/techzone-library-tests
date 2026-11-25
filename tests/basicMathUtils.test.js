// Unit tests for basicMathUtils.js
// TechZone uses these functions to calculate prices at checkout.
import { add, subtract, multiply } from '../src/math/basicMathUtils.js';

// add(): used to add the cart total and the delivery cost
describe('add', () => {
  test('adds two positive whole numbers', () => {
    expect(add(100, 5)).toBe(105);
  });

  test('adds prices with decimals (cart total + delivery cost)', () => {
    expect(add(49.9, 4.9)).toBeCloseTo(54.8);
  });

  test('adding zero returns the same number (free delivery)', () => {
    expect(add(59.99, 0)).toBe(59.99);
  });

  test('the order of the numbers does not change the result', () => {
    expect(add(3, 7)).toBe(add(7, 3));
  });

  test('adds a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });
});

// subtract(): used to take a discount off the price
describe('subtract', () => {
  test('subtracts a discount from a price', () => {
    expect(subtract(100, 10)).toBe(90);
  });

  test('subtracts prices with decimals', () => {
    expect(subtract(19.99, 2)).toBeCloseTo(17.99);
  });

  test('subtracting zero returns the same number (no discount)', () => {
    expect(subtract(50, 0)).toBe(50);
  });

  test('subtracting the full price gives zero', () => {
    expect(subtract(25, 25)).toBe(0);
  });

  test('gives a negative result when the discount is bigger than the price', () => {
    expect(subtract(5, 8)).toBe(-3);
  });
});

// multiply(): used to calculate the price of several items of the same product
describe('multiply', () => {
  test('multiplies a price by a quantity', () => {
    expect(multiply(25, 3)).toBe(75);
  });

  test('multiplies a price with decimals by a quantity', () => {
    expect(multiply(19.99, 3)).toBeCloseTo(59.97);
  });

  test('a quantity of zero gives zero', () => {
    expect(multiply(499, 0)).toBe(0);
  });

  test('a quantity of one returns the same price', () => {
    expect(multiply(499, 1)).toBe(499);
  });

  test('calculates a percentage discount (price x 0.1)', () => {
    expect(multiply(200, 0.1)).toBeCloseTo(20);
  });
});