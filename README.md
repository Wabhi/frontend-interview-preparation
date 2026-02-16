# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


REACT+JEST+RTL:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1.Project Setup & Jest Fundamentals - Create React Project from Scratch

# Create new React app with Vite (modern, faster alternative to CRA)
npm create vite@latest testing-mastery -- --template react
cd testing-mastery

# Install dependencies
npm install

# Install testing libraries
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

# Install additional helpful packages
npm install -D @testing-library/react @testing-library/jest-dom eslint-plugin-testing-library eslint-plugin-jest-dom

2.Configure jest - jest.config.js
3.SetupTests.js - src/setupTests.js
4.Config babel - babel.config.js
5.install babel - npm install -D @babel/preset-env @babel/preset-react babel-jest
6.update the package.json - 
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
7.started with small math.js test
src/utils/math.js
src/utils/math.test.js

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Days 1-2: React Testing Foundation & Core Concepts
Let me guide you through a comprehensive, interview-focused journey into React testing. I'll explain everything from scratch to expert level.

Part 1: Understanding Testing (Conceptual Foundation)
What is Testing?
Testing is the process of verifying that your code works as expected. In software development, it means writing additional code that automatically checks if your application code behaves correctly.
Real-world analogy: Think of it like a car manufacturer testing every car before it leaves the factory. They don't wait for customers to discover problems—they catch issues early.
Why We Use Testing

Confidence in changes: You can refactor or add features without fear of breaking existing functionality
Documentation: Tests serve as living documentation of how your code should behave
Catch bugs early: Finding bugs during development is 10-100x cheaper than finding them in production
Better design: Writing testable code forces you to write better, more modular code
Interview readiness: Product companies expect you to write tests

Advantages of Having Tests
For companies:

Reduced production bugs (fewer customer complaints)
Faster deployment cycles (CI/CD confidence)
Lower maintenance costs
Easier onboarding (tests explain behavior)

For developers:

Sleep better at night (no 3 AM bug calls)
Refactor fearlessly
Faster debugging (tests pinpoint issues)
Career growth (testing is a senior skill)

Types of Testing
        Testing Pyramid
           /\
          /E2E\          ← Few, slow, expensive (Cypress, Playwright)
         /------\
        /Integration\    ← Some, medium speed (RTL with API calls)
       /------------\
      /    Unit      \   ← Many, fast, cheap (Jest + RTL)
     /----------------\
1. Unit Testing (70% of tests)

Tests individual functions/components in isolation
Fast, focused, easy to debug
Example: Testing a Button component

2. Integration Testing (20% of tests)

Tests how multiple units work together
Example: Form with validation + API call

3. End-to-End Testing (10% of tests)

Tests entire user flows through real browser
Example: Complete checkout process
Tools: Cypress, Playwright

Interview Tip: Companies ask "Where would you draw the line between unit and integration tests?" Answer: "I focus on user-facing behavior. If testing multiple components together gives more confidence without significantly slowing tests down, I prefer integration tests."
How Testing is Used in Product Companies
Real-world workflow at companies like Meta, Google, Netflix:

Pre-commit hooks: Tests run before you can commit code
CI/CD pipeline:

Pull request created → All tests run automatically
Tests fail → Code review blocked
Tests pass → Can merge


Code coverage requirements: Many teams require 80%+ coverage
Test-Driven Development (TDD): Write test first, then implementation
Regular test maintenance: Flaky tests are treated as bugs

Example from a real product team:
Developer: "I want to add a 'Remember Me' checkbox to login"
Process:
1. Write failing test for checkbox behavior
2. Implement the feature
3. Test passes
4. Push code → CI runs 5,000+ tests
5. All pass → Deploys to production
6. Feature monitored with error tracking

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Part 2: Jest Fundamentals
Jest is a JavaScript testing framework. Think of it as the engine that runs your tests.
test() - The Basic Building Block
The test() function defines a single test case.
Syntax:
javascripttest('description of what you're testing', () => {
  // Your test code
});
Basic Example:
javascript// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js
import { add } from './math';

test('adds 1 + 2 to equal 3', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
Advanced Example - Testing Edge Cases:
javascripttest('handles negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('handles decimal numbers', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3); // Use toBeCloseTo for decimals
});

test('handles string numbers by converting them', () => {
  // This would fail if add doesn't handle strings
  expect(add('1', '2')).toBe(3);
});
Alternative syntax: it()
javascript// These are identical
test('adds numbers', () => { /* ... */ });
it('adds numbers', () => { /* ... */ });
Interview Question: "What's the difference between test() and it()?"
Answer: "They're aliases—completely interchangeable. it() reads more naturally in BDD (Behavior-Driven Development) style: 'it should add numbers'. Use whichever your team prefers."

describe() - Organizing Test Suites
describe() groups related tests together. It creates a test suite.
Why use it?

Organizes tests logically
Shares setup/teardown code
Makes test output readable
Helps with debugging

Basic Example:
javascriptdescribe('Calculator', () => {
  test('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
Advanced Example - Nested Describes:
javascriptdescribe('UserProfile Component', () => {
  
  describe('when user is logged in', () => {
    test('displays username', () => { /* ... */ });
    test('shows logout button', () => { /* ... */ });
    test('allows editing profile', () => { /* ... */ });
  });

  describe('when user is logged out', () => {
    test('shows login button', () => { /* ... */ });
    test('hides profile settings', () => { /* ... */ });
  });

  describe('error states', () => {
    test('displays error when API fails', () => { /* ... */ });
    test('shows retry button on network error', () => { /* ... */ });
  });
});
Real-World Pattern:
javascriptdescribe('LoginForm', () => {
  describe('Rendering', () => {
    test('renders email input', () => { /* ... */ });
    test('renders password input', () => { /* ... */ });
    test('renders submit button', () => { /* ... */ });
  });

  describe('Validation', () => {
    test('shows error for invalid email', () => { /* ... */ });
    test('shows error for short password', () => { /* ... */ });
  });

  describe('Submission', () => {
    test('calls API with correct credentials', () => { /* ... */ });
    test('redirects on success', () => { /* ... */ });
    test('shows error on failure', () => { /* ... */ });
  });
});
```

**Output looks like:**
```
LoginForm
  Rendering
    ✓ renders email input
    ✓ renders password input
  Validation
    ✓ shows error for invalid email
  Submission
    ✓ calls API with correct credentials

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
expect() and Matchers
expect() is how you make assertions. Matchers are the methods you chain to check conditions.
Basic Structure:
javascriptexpect(actualValue).matcher(expectedValue);
Common Matchers Deep Dive
1. toBe() - Strict Equality (===)
Uses Object.is() for comparison. Best for primitives.
javascripttest('toBe examples', () => {
  expect(2 + 2).toBe(4);
  expect('hello').toBe('hello');
  expect(true).toBe(true);
  expect(null).toBe(null);
  expect(undefined).toBe(undefined);
});

// GOTCHA - This FAILS for objects/arrays
test('toBe fails for objects', () => {
  expect({ name: 'John' }).toBe({ name: 'John' }); // ❌ FAILS
  // Different memory references
});
2. toEqual() - Deep Equality
Recursively checks every field. Use for objects and arrays.
javascripttest('toEqual examples', () => {
  // Objects
  expect({ name: 'John', age: 30 }).toEqual({ name: 'John', age: 30 }); // ✅
  
  // Arrays
  expect([1, 2, 3]).toEqual([1, 2, 3]); // ✅
  
  // Nested structures
  expect({
    user: { name: 'John' },
    posts: [{ id: 1 }]
  }).toEqual({
    user: { name: 'John' },
    posts: [{ id: 1 }]
  }); // ✅
});
Interview Question: "When do you use toBe() vs toEqual()?"
Answer:
javascript// Primitives → toBe (faster)
expect(count).toBe(5);
expect(isLoading).toBe(true);

// Objects/Arrays → toEqual (checks content)
expect(user).toEqual({ id: 1, name: 'John' });
expect(items).toEqual([1, 2, 3]);
3. Truthiness Matchers
javascripttest('truthiness', () => {
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect('hello').toBeDefined();
  
  // Truthy/Falsy
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect('text').toBeTruthy();
});
4. Number Matchers
javascripttest('number matchers', () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(5);
  expect(5).toBeGreaterThanOrEqual(5);
  expect(3).toBeLessThanOrEqual(3);
  
  // Floating point - USE toBeCloseTo
  expect(0.1 + 0.2).toBeCloseTo(0.3); // ✅
  expect(0.1 + 0.2).toBe(0.3); // ❌ Fails due to floating point precision
});
5. String Matchers
javascripttest('string matchers', () => {
  expect('Hello World').toMatch(/World/);
  expect('hello@example.com').toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  expect('error message').toContain('error');
});
6. Array/Iterable Matchers
javascripttest('array matchers', () => {
  const fruits = ['apple', 'banana', 'orange'];
  
  expect(fruits).toContain('banana');
  expect(fruits).toHaveLength(3);
  expect(fruits).toEqual(expect.arrayContaining(['apple', 'orange']));
});
7. Object Matchers
javascripttest('object matchers', () => {
  const user = { id: 1, name: 'John', email: 'john@test.com' };
  
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('name', 'John');
  expect(user).toMatchObject({ name: 'John' }); // Partial match
  
  // Check if object has specific structure
  expect(user).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      id: expect.any(Number)
    })
  );
});
8. Exception Matchers
javascriptfunction throwError() {
  throw new Error('Something went wrong');
}

test('exception matchers', () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow('Something went wrong');
  expect(() => throwError()).toThrow(/went wrong/);
  expect(() => throwError()).toThrow(Error);
});