import { fetchUser, sendEmail, logger } from './api';

// Mocking the entire fetch API
global.fetch = jest.fn();

describe('API Service', () => {
  
  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  describe('fetchUser', () => {
    test('fetches user successfully', async () => {
      // Mock implementation
      const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
      
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      });

      const user = await fetchUser(1);

      // Verify fetch was called correctly
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
      
      // Verify returned data
      expect(user).toEqual(mockUser);
    });

    test('throws error on failed fetch', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
      });

      await expect(fetchUser(1)).rejects.toThrow('Failed to fetch user');
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Mock Functions (jest.fn)', () => {
    test('creates and uses mock functions', () => {
      // Create a mock function
      const mockCallback = jest.fn(x => x * 2);

      // Use the mock
      [1, 2, 3].forEach(mockCallback);

      // Test how it was called
      expect(mockCallback).toHaveBeenCalledTimes(3);
      expect(mockCallback).toHaveBeenCalledWith(1);
      expect(mockCallback).toHaveBeenNthCalledWith(2, 2);
      expect(mockCallback).toHaveBeenLastCalledWith(3);

      // Check return values
      expect(mockCallback.mock.results[0].value).toBe(2);
      expect(mockCallback.mock.results[1].value).toBe(4);
    });

    test('mock function with different implementations', () => {
      const mockFn = jest.fn();

      // One-time return value
      mockFn.mockReturnValueOnce('first call')
            .mockReturnValueOnce('second call')
            .mockReturnValue('default');

      expect(mockFn()).toBe('first call');
      expect(mockFn()).toBe('second call');
      expect(mockFn()).toBe('default');
      expect(mockFn()).toBe('default');
    });

    test('mock function with async behavior', async () => {
      const mockAsyncFn = jest.fn();

      mockAsyncFn.mockResolvedValueOnce('success')
                 .mockRejectedValueOnce(new Error('failure'));

      await expect(mockAsyncFn()).resolves.toBe('success');
      await expect(mockAsyncFn()).rejects.toThrow('failure');
    });
  });

  describe('Spies (jest.spyOn)', () => {
    test('spies on console.log', () => {
      // Create spy on console.log
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

      sendEmail('test@example.com', 'Hello', 'Test message');

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Sending email to test@example.com: Hello'
      );

      // Restore original implementation
      consoleLogSpy.mockRestore();
    });

    test('spies on object methods', () => {
      const loggerInfoSpy = jest.spyOn(logger, 'info');
      const loggerErrorSpy = jest.spyOn(logger, 'error');

      logger.info('This is info');
      logger.error('This is error');

      expect(loggerInfoSpy).toHaveBeenCalledWith('This is info');
      expect(loggerErrorSpy).toHaveBeenCalledWith('This is error');

      loggerInfoSpy.mockRestore();
      loggerErrorSpy.mockRestore();
    });
  });
});