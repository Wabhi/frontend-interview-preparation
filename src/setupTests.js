import '@testing-library/jest-dom';

// Mock fetch globally for all tests
global.fetch = jest.fn();

// Reset fetch mock before each test
beforeEach(() => {
  fetch.mockClear();
});

// Global test setup
beforeAll(() => {
  // Runs once before all tests
  console.log('Starting test suite');
});

afterAll(() => {
  // Runs once after all tests
  console.log('Test suite completed');
});