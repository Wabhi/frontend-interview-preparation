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

>aaaaa>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

>bbbb>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

>cccc>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

>dddd>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Mocking Functions
Mocking replaces real implementations with controlled test versions. Critical for isolating units.
Why mock?

Don't call real APIs in tests (slow, unreliable, costs money)
Control external dependencies
Test error scenarios
Verify function calls

jest.fn() - Creating Mock Functions
Basic Example:
javascripttest('basic mock function', () => {
  const mockFn = jest.fn();
  
  mockFn('hello');
  mockFn('world');
  
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
  expect(mockFn).toHaveBeenCalledWith('hello');
  expect(mockFn).toHaveBeenLastCalledWith('world');
});
mockReturnValue() - Control Return Values
javascripttest('mockReturnValue example', () => {
  const mockGetUser = jest.fn();
  mockGetUser.mockReturnValue({ id: 1, name: 'John' });
  
  const user = mockGetUser();
  expect(user).toEqual({ id: 1, name: 'John' });
});

// Different returns for multiple calls
test('different returns', () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce('first')
    .mockReturnValueOnce('second')
    .mockReturnValue('default');
  
  expect(mockFn()).toBe('first');
  expect(mockFn()).toBe('second');
  expect(mockFn()).toBe('default');
  expect(mockFn()).toBe('default'); // Always returns 'default' now
});
mockResolvedValue() - Mocking Async Functions
javascript// Simulating an API call
test('mockResolvedValue for promises', async () => {
  const mockFetchUser = jest.fn();
  mockFetchUser.mockResolvedValue({ id: 1, name: 'John' });
  
  const user = await mockFetchUser();
  expect(user.name).toBe('John');
});

// Simulating errors
test('mockRejectedValue for errors', async () => {
  const mockFetchUser = jest.fn();
  mockFetchUser.mockRejectedValue(new Error('Network error'));
  
  await expect(mockFetchUser()).rejects.toThrow('Network error');
});
Real-World Example - Mocking API:
javascript// api.js
export async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}

// component.test.js
import { fetchUserData } from './api';

jest.mock('./api'); // Auto-mocks all exports

test('displays user data', async () => {
  // Control what the API returns
  fetchUserData.mockResolvedValue({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  });
  
  // Test component that uses fetchUserData
  // ... render component ...
  
  expect(fetchUserData).toHaveBeenCalledWith(1);
});

Spies - Watching Real Functions
Spies track calls to existing functions without replacing them.
javascript// calculator.js
export const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// calculator.test.js
test('spy on method', () => {
  const spy = jest.spyOn(calculator, 'add');
  
  const result = calculator.add(2, 3);
  
  expect(result).toBe(5); // Real function still works
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(2, 3);
  
  spy.mockRestore(); // Restore original implementation
});

// Spy and override implementation
test('spy with mock implementation', () => {
  const spy = jest.spyOn(calculator, 'add')
    .mockImplementation(() => 999);
  
  expect(calculator.add(1, 1)).toBe(999); // Our mock
  expect(spy).toHaveBeenCalled();
  
  spy.mockRestore();
  expect(calculator.add(1, 1)).toBe(2); // Back to normal
});
Interview Scenario: "When would you use a spy vs a mock?"
Answer: "Use spies when you want to verify a method was called but still want its real behavior. Use mocks when you need to control the output or avoid side effects like API calls."

Setup and Teardown
These hooks run before/after tests to prepare and clean up.
Four Hook Functions:
javascriptbeforeAll(() => {
  // Runs ONCE before all tests in this file
  // Use for: database connections, expensive setup
});

beforeEach(() => {
  // Runs BEFORE each individual test
  // Use for: resetting state, creating fresh instances
});

afterEach(() => {
  // Runs AFTER each individual test
  // Use for: cleanup, resetting mocks
});

afterAll(() => {
  // Runs ONCE after all tests in this file
  // Use for: closing connections, final cleanup
});

Practical Example:
javascriptdescribe('Database tests', () => {
  let database;
  
  beforeAll(async () => {
    // Connect to test database (once)
    database = await connectToDatabase('test');
  });
  
  beforeEach(async () => {
    // Clear all data before each test
    await database.clear();
  });
  
  afterEach(() => {
    // Reset all mocks after each test
    jest.clearAllMocks();
  });
  
  afterAll(async () => {
    // Close database connection (once)
    await database.close();
  });
  
  test('creates user', async () => {
    await database.createUser({ name: 'John' });
    const users = await database.getUsers();
    expect(users).toHaveLength(1);
  });
  
  test('starts with empty database', async () => {
    // This passes because beforeEach cleared data
    const users = await database.getUsers();
    expect(users).toHaveLength(0);
  });
});
React Testing Example:
javascriptdescribe('Counter component', () => {
  let container;
  
  beforeEach(() => {
    // Create fresh DOM element for each test
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // Clean up DOM after each test
    document.body.removeChild(container);
    container = null;
  });
  
  test('increments counter', () => {
    // Test code using container
  });
});

Part 3: React Testing Library (RTL) Fundamentals
RTL Philosophy: Test User Behavior, Not Implementation
❌ Bad (Testing Implementation):
javascript// Testing internal state
expect(component.state.isOpen).toBe(true);
expect(component.find('.modal').prop('className')).toContain('visible');
✅ Good (Testing User Behavior):
javascript// Testing what user sees
expect(screen.getByRole('dialog')).toBeInTheDocument();
expect(screen.getByText('Welcome!')).toBeVisible();
Key Principle: "If a user can't see or interact with it, don't test it."

render() - Mounting Components
Renders a React component into a test environment.
Basic Example:
javascriptimport { render } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  // Component is now in the test DOM
});
With Props:
javascripttest('renders with different props', () => {
  const { rerender } = render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John')).toBeInTheDocument();
  
  // Re-render with different props
  rerender(<Greeting name="Jane" />);
  expect(screen.getByText('Hello, Jane')).toBeInTheDocument();
});
With Providers (Context, Router, etc.):
javascriptimport { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

test('renders with providers', () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <MyComponent />
      </ThemeProvider>
    </BrowserRouter>
  );
});

// Better: Create a custom render helper
const customRender = (ui, options) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    ),
    ...options
  });
};

// Now use it
test('with custom render', () => {
  customRender(<MyComponent />);
});

screen - Query the DOM
screen is an object with query methods. It searches the entire document.
Why use screen?

Cleaner than destructuring from render
Better error messages
Recommended by RTL team

javascriptimport { render, screen } from '@testing-library/react';

test('using screen', () => {
  render(<Button>Submit</Button>);
  
  // Good - using screen
  const button = screen.getByText('Submit');
  
  // Old way (still works but not preferred)
  // const { getByText } = render(<Button>Submit</Button>);
  // const button = getByText('Submit');
});
```

---

### **Query Methods: `getBy`, `queryBy`, `findBy`**

RTL has three types of queries, each with different behavior.

#### **Query Priority (RTL Recommendation Order)**
```
1. getByRole         ← BEST (most accessible)
2. getByLabelText    ← Good for forms
3. getByPlaceholderText
4. getByText         ← Good for non-interactive content
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId       ← LAST RESORT
The Three Query Types:
1. getBy* - Element Must Exist

Throws error if not found
Throws error if multiple matches
Use for elements you expect to be there

javascripttest('getBy examples', () => {
  render(<button>Submit</button>);
  
  const button = screen.getByText('Submit'); // ✅ Found
  expect(button).toBeInTheDocument();
  
  // This throws an error immediately
  screen.getByText('Nonexistent'); // ❌ Error: Unable to find element
});
When to use: Default choice for elements that should be present.
2. queryBy* - Element May Not Exist

Returns null if not found (no error)
Throws error if multiple matches
Use for asserting something is NOT there

javascripttest('queryBy examples', () => {
  render(<div>Hello</div>);
  
  const element = screen.queryByText('Hello'); // Found
  expect(element).toBeInTheDocument();
  
  const missing = screen.queryByText('Goodbye'); // Returns null
  expect(missing).not.toBeInTheDocument(); // ✅ Passes
});
Real Example - Conditional Rendering:
javascriptfunction Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
}

test('shows different messages based on auth', () => {
  const { rerender } = render(<Greeting isLoggedIn={false} />);
  
  expect(screen.getByText('Please log in')).toBeInTheDocument();
  expect(screen.queryByText('Welcome back!')).not.toBeInTheDocument(); // Use queryBy
  
  rerender(<Greeting isLoggedIn={true} />);
  
  expect(screen.getByText('Welcome back!')).toBeInTheDocument();
  expect(screen.queryByText('Please log in')).not.toBeInTheDocument();
});
3. findBy* - Element Will Appear (Async)

Returns a Promise
Waits up to 1000ms (configurable)
Use for elements that appear after async operations

javascripttest('findBy for async content', async () => {
  render(<AsyncComponent />);
  
  // Element appears after data fetch
  const heading = await screen.findByText('Data loaded!');
  expect(heading).toBeInTheDocument();
});
Real Example - Data Fetching:
javascriptfunction UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}

test('loads and displays user', async () => {
  // Mock the API
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => ({ name: 'John Doe' })
  });
  
  render(<UserProfile userId={1} />);
  
  // Initial loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for async data - use findBy
  const heading = await screen.findByText('John Doe');
  expect(heading).toBeInTheDocument();
  
  // Loading message is gone - use queryBy
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
Comparison Table:
Query TypeNo MatchMultiple MatchesReturn TypeUse CasegetBy❌ Throws error❌ Throws errorElementElement should existqueryBy✅ Returns null❌ Throws errorElement or nullCheck absencefindBy❌ Throws error (after timeout)❌ Throws errorPromise<Element>Async appearance

Specific Query Methods Deep Dive
getByRole - The Best Query (Accessibility-First)
Queries by ARIA role. Promotes accessible components.
javascripttest('getByRole examples', () => {
  render(
    <div>
      <button>Submit</button>
      <input type="text" />
      <input type="checkbox" />
      <a href="/home">Home</a>
      <h1>Title</h1>
    </div>
  );
  
  screen.getByRole('button'); // button element
  screen.getByRole('textbox'); // input type="text"
  screen.getByRole('checkbox'); // input type="checkbox"
  screen.getByRole('link'); // <a> element
  screen.getByRole('heading', { level: 1 }); // <h1>
});
With Options:
javascripttest('getByRole with options', () => {
  render(
    <>
      <button>Cancel</button>
      <button>Submit</button>
      <h1>Main Title</h1>
      <h2>Subtitle</h2>
    </>
  );
  
  // Find specific button by accessible name
  screen.getByRole('button', { name: 'Submit' });
  screen.getByRole('button', { name: /submit/i }); // Case-insensitive regex
  
  // Find specific heading level
  screen.getByRole('heading', { level: 1 });
  screen.getByRole('heading', { name: 'Main Title' });
});
Common Roles:
javascript// Interactive elements
button, link, textbox, checkbox, radio, combobox, listbox, slider

// Structural
navigation, main, banner, contentinfo, complementary

// Headings
heading (with level option)

// Lists
list, listitem

// Other
dialog, alert, status, progressbar, tab, tabpanel
getByText - Finding Text Content
javascripttest('getByText examples', () => {
  render(
    <div>
      <p>Hello World</p>
      <span>Partial match here</span>
    </div>
  );
  
  // Exact string match
  screen.getByText('Hello World');
  
  // Regex (case-insensitive)
  screen.getByText(/hello world/i);
  
  // Partial match function
  screen.getByText((content, element) => {
    return content.includes('Partial');
  });
  
  // With options
  screen.getByText('hello', { exact: false }); // Matches "Hello World"
});
Interview Tip: "I prefer getByRole over getByText because it encourages accessible markup. But getByText is great for non-interactive content like paragraphs and labels."

>eeee>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
fireEvent vs userEvent - Simulating Interactions
fireEvent - Low-Level DOM Events
Fires a single DOM event.
javascriptimport { render, screen, fireEvent } from '@testing-library/react';

test('fireEvent example', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Click me</button>);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
Problem with fireEvent:

Only fires one event
Doesn't simulate real user behavior
Missing intermediate events (hover, focus, etc.)

userEvent - High-Level User Interactions (PREFERRED)
Simulates complete user interactions with all related events.
javascriptimport { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('userEvent example', async () => {
  const user = userEvent.setup(); // Always call setup()
  
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Click me</button>);
  
  const button = screen.getByRole('button');
  await user.click(button); // Note: async!
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
Comparison:
javascript// fireEvent.click triggers:
// - click event

// userEvent.click triggers (in order):
// - hover
// - mouseMove
// - mouseDown
// - focus
// - mouseUp
// - click
Complete userEvent Examples:
javascriptimport userEvent from '@testing-library/user-event';

describe('userEvent interactions', () => {
  
  test('typing in input', async () => {
    const user = userEvent.setup();
    render(<input placeholder="Enter name" />);
    
    const input = screen.getByPlaceholderText('Enter name');
    await user.type(input, 'John Doe');
    
    expect(input).toHaveValue('John Doe');
  });
  
  test('clearing input', async () => {
    const user = userEvent.setup();
    render(<input defaultValue="Initial" />);
    
    const input = screen.getByDisplayValue('Initial');
    await user.clear(input);
    
    expect(input).toHaveValue('');
  });
  
  test('selecting from dropdown', async () => {
    const user = userEvent.setup();
    render(
      <select>
        <option value="">Select</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </select>
    );
    
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'banana');
    
    expect(select).toHaveValue('banana');
  });
  
  test('checking checkbox', async () => {
    const user = userEvent.setup();
    render(<input type="checkbox" />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(checkbox).toBeChecked();
  });
  
  test('uploading file', async () => {
    const user = userEvent.setup();
    render(<input type="file" />);
    
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByRole('textbox'); // File inputs have role textbox
    
    await user.upload(input, file);
    
    expect(input.files[0]).toBe(file);
    expect(input.files).toHaveLength(1);
  });
  
  test('keyboard interactions', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();
    
    render(
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" />
        <button>Submit</button>
      </form>
    );
    
    const input = screen.getByPlaceholderText('Name');
    await user.type(input, 'John{Enter}'); // Types "John" then presses Enter
    
    expect(handleSubmit).toHaveBeenCalled();
  });
  
  test('special keys', async () => {
    const user = userEvent.setup();
    render(<textarea />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Line 1{Enter}Line 2{Tab}Tabbed');
    
    expect(textarea).toHaveValue('Line 1\nLine 2\tTabbed');
  });
});
Real-World Login Form Test:
javascriptfunction LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

test('submits login form', async () => {
  const user = userEvent.setup();
  const mockSubmit = jest.fn();
  
  render(<LoginForm onSubmit={mockSubmit} />);
  
  // Type in both inputs
  await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
  await user.type(screen.getByPlaceholderText('Password'), 'securepass123');
  
  // Submit form
  await user.click(screen.getByRole('button', { name: 'Log In' }));
  
  // Verify submission
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'john@example.com',
    password: 'securepass123'
  });
});
Interview Question: "Why should we use userEvent instead of fireEvent?"
Answer: "userEvent simulates real user interactions more accurately. For example, userEvent.click() fires hover, mouseDown, focus, mouseUp, and click events in sequence—just like a real user. This catches bugs that fireEvent might miss, like missing focus handlers or hover states affecting behavior."

Part 4: Advanced Matchers for RTL
toBeInTheDocument()
Checks if element exists in DOM.
javascriptexpect(screen.getByText('Hello')).toBeInTheDocument();
expect(screen.queryByText('Missing')).not.toBeInTheDocument();
toBeVisible()
Checks if element is visible (not hidden via CSS).
javascripttest('visibility', () => {
  render(
    <>
      <p>Visible</p>
      <p style={{ display: 'none' }}>Hidden</p>
    </>
  );
  
  expect(screen.getByText('Visible')).toBeVisible();
  expect(screen.getByText('Hidden')).not.toBeVisible();
});
toBeDisabled() / toBeEnabled()
javascripttest('button states', () => {
  render(
    <>
      <button>Enabled</button>
      <button disabled>Disabled</button>
    </>
  );
  
  expect(screen.getByText('Enabled')).toBeEnabled();
  expect(screen.getByText('Disabled')).toBeDisabled();
});
toHaveValue()
For form inputs.
javascripttest('input value', () => {
  render(<input defaultValue="Hello" />);
  expect(screen.getByDisplayValue('Hello')).toHaveValue('Hello');
});
toBeChecked()
For checkboxes and radio buttons.
javascripttest('checkbox state', () => {
  render(<input type="checkbox" defaultChecked />);
  expect(screen.getByRole('checkbox')).toBeChecked();
});
toHaveClass()
javascripttest('CSS classes', () => {
  render(<button className="btn btn-primary">Click</button>);
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn');
  expect(button).toHaveClass('btn-primary');
  expect(button).toHaveClass('btn', 'btn-primary'); // Both
});

Part 5: Real-World Complete Examples
Example 1: Counter Component (State Management)
javascript// Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
javascript// Counter.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when increment button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    await user.click(incrementBtn);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
  
  test('decrements count when decrement button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' });
    await user.click(decrementBtn);
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });
  
  test('resets count to 0', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    // Increment a few times
    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
    
    // Reset
    const resetBtn = screen.getByRole('button', { name: 'Reset' });
    await user.click(resetBtn);
    
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('handles multiple operations correctly', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incBtn = screen.getByRole('button', { name: 'Increment' });
    const decBtn = screen.getByRole('button', { name: 'Decrement' });
    
    await user.click(incBtn); // 1
    await user.click(incBtn); // 2
    await user.click(decBtn); // 1
    await user.click(incBtn); // 2
    
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});

Example 2: Search Component (Async + Mocking)
javascript// SearchUsers.jsx
import { useState } from 'react';
import { searchUsers } from './api';

function SearchUsers() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {loading && <p>Loading...</p>}
      {error && <p role="alert">{error}</p>}
      
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
javascript// SearchUsers.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchUsers from './SearchUsers';
import { searchUsers } from './api';

// Mock the API module
jest.mock('./api');

describe('SearchUsers Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });
  
  test('renders search input and button', () => {
    render(<SearchUsers />);
    
    expect(screen.getByPlaceholderText('Search users...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
  
  test('updates input value as user types', async () => {
    const user = userEvent.setup();
    render(<SearchUsers />);
    
    const input = screen.getByPlaceholderText('Search users...');
    await user.type(input, 'John');
    
    expect(input).toHaveValue('John');
  });
  
  test('displays loading state while fetching', async () => {
    const user = userEvent.setup();
    
    // Mock API to delay response
    searchUsers.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve([]), 100))
    );
    
    render(<SearchUsers />);
    
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    await user.click(searchBtn);
    
    // Should show loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  
  test('displays search results', async () => {
    const user = userEvent.setup();
    
    // Mock successful API response
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    searchUsers.mockResolvedValue(mockUsers);
    
    render(<SearchUsers />);
    
    const input = screen.getByPlaceholderText('Search users...');
    await user.type(input, 'John');
    
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    await user.click(searchBtn);
    
    // Wait for results to appear
    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    
    // Verify API was called with correct query
    expect(searchUsers).toHaveBeenCalledWith('John');
    expect(searchUsers).toHaveBeenCalledTimes(1);
  });
  
  test('displays error message on API failure', async () => {
    const user = userEvent.setup();
    
    // Mock API error
    searchUsers.mockRejectedValue(new Error('Network error'));
    
    render(<SearchUsers />);
    
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    await user.click(searchBtn);
    
    // Wait for error message
    const errorMsg = await screen.findByRole('alert');
    expect(errorMsg).toHaveTextContent('Failed to fetch users');
    
    // Should not show loading anymore
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
  test('clears previous results on new search', async () => {
    const user = userEvent.setup();
    
    // First search
    searchUsers.mockResolvedValueOnce([{ id: 1, name: 'John' }]);
    render(<SearchUsers />);
    
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    await user.click(searchBtn);
    expect(await screen.findByText('John')).toBeInTheDocument();
    
    // Second search
    searchUsers.mockResolvedValueOnce([{ id: 2, name: 'Jane' }]);
    await user.click(searchBtn);
    
    expect(await screen.findByText('Jane')).toBeInTheDocument();
    expect(screen.queryByText('John')).not.toBeInTheDocument();
  });
});

Interview Preparation Tips
Common Interview Questions & Answers
Q: What's the difference between getBy, queryBy, and findBy?
A: "getBy throws if not found (use for present elements), queryBy returns null (use for checking absence), findBy is async and waits (use for elements appearing after async operations)."
Q: Why use React Testing Library instead of Enzyme?
A: "RTL tests user behavior, not implementation. Enzyme tests internal state and props, which leads to brittle tests. RTL aligns with how users interact with our app, catching real bugs."
Q: How do you test async code?
A: "I use findBy queries which return promises and wait for elements, or waitFor for more complex scenarios. I mock API calls with jest.fn().mockResolvedValue() to control responses."
Q: What's your testing strategy?
A: "I follow the testing pyramid: mostly unit/integration tests (fast, isolated), some E2E tests for critical flows. I focus on user behavior, not implementation. I aim for 80% coverage but prioritize critical paths."
Q: How do you handle testing components with context/providers?
A: "I create a custom render function that wraps components with necessary providers. This avoids duplication and keeps tests clean."