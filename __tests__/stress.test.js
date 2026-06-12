import { getText } from '../lib';

// Batch 1: 0-9999 (10,000 tests)
describe('Stress test: 0-9999', () => {
  for (let i = 0; i <= 9999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 2: 10000-99999 (90,000 tests)
describe('Stress test: 10000-99999', () => {
  for (let i = 10000; i <= 99999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 3: 100000-999999 (900,000 tests)
describe('Stress test: 100000-999999', () => {
  for (let i = 100000; i <= 999999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 4: 1000000-9999999 (9,000,000 tests)
describe('Stress test: 1000000-9999999', () => {
  for (let i = 1000000; i <= 9999999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 5: 10000000-99999999 (90,000,000 tests)
describe('Stress test: 10000000-99999999', () => {
  for (let i = 10000000; i <= 99999999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 6: 100000000-999999999 (900,000,000 tests)
describe('Stress test: 100000000-999999999', () => {
  for (let i = 100000000; i <= 999999999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 7: 1000000000-9999999999 (9,000,000,000 tests)
describe('Stress test: 1000000000-9999999999', () => {
  for (let i = 1000000000; i <= 9999999999; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});

// Batch 8: Negative numbers -9999999999 to -1
describe('Stress test: negative -9999999999 to -1', () => {
  for (let i = -9999999999; i <= -1; i++) {
    test(`${i}`, () => {
      const result = getText(i);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
      expect(result).toMatch(/^âm /);
      expect(result).not.toMatch(/\s$/);
      expect(result).not.toMatch(/  /);
    });
  }
});
