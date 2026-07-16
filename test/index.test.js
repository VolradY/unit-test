import { getHealthStatus } from '../src/index.js';

test('should return healthy when health is more than 50', () => {
  const character = { name: 'Маг', health: 90 };
  const result = getHealthStatus(character);
  expect(result).toBe('healthy');
});

test('should return wounded when health is between 15 and 50', () => {
  const character = { name: 'Воин', health: 40 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return wounded on boundary value 50', () => {
  const character = { name: 'Лучник', health: 50 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return wounded on boundary value 15', () => {
  const character = { name: 'Лучник', health: 15 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return critical when health is less than 15', () => {
  const character = { name: 'Разбойник', health: 10 };
  const result = getHealthStatus(character);
  expect(result).toBe('critical');
});