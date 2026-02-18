import { renderHook, waitFor } from "@testing-library/react";
import { useUsers } from "./useUsers";

describe("Testing Custom Hook useUser Component", () => {
  // Mock data
  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  //// INITIAL STATE TESTS
  describe("1-Initial State of custom hook component", () => {
    test("should have correct initial state", () => {
      // Mock fetch to never resolve (keeps in loading state)
      global.fetch.mockImplementation(() => new Promise(() => {}));
      const { result } = renderHook(() => useUsers());
      expect(result.current.users).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBe(null);
    });

    test("Should call fetch on component mount", () => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: async () => mockUsers,
      });
      //Think of renderHook as a mini-laboratory for testing logic that doesn't have a UI.
      //In React, you normally can't call a Hook (like useState or useEffect) inside a regular JavaScript function or a test file.
      //Hooks must be called inside a Functional Component. renderHook is a utility from @testing-library/react that creates a "fake" hidden component just to run your hook for you.
      renderHook(() => useUsers());
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users",

        expect.objectContaining({
          signal: expect.any(AbortSignal),
        }),
      );
    });
  });
  //// SUCCESSFUL FETCH TESTS
  describe("2-Successful api fetching data when component mount", () => {
    test("Should fetch user data successfully", async () => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: async () => mockUsers,
      });
      const { result } = renderHook(() => useUsers());
      // Initially loading
      expect(result.current.loading).toBe(true);
      expect(result.current.users).toEqual([]);
      // Wait for fetch to complete
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });
      // Check final state
      expect(result.current.users).toEqual(mockUsers);
      expect(result.current.error).toBe(null);
    });

    test("Should set loading to false after successful fetch", async () => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: async () => mockUsers,
      });
      const { result } = renderHook(() => useUsers());
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });
    });
    test("Should handle empty user array", async () => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: async () => [],
      });
      const { result } = renderHook(() => useUsers());
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });
      expect(result.current.users).toEqual([]);
      expect(result.current.error).toBe(null);
    });

    test("Should preserve all user properties", async () => {
      const detailedUsers = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          website: "john.com",
        },
      ];
      global.fetch.mockResolvedValue({
        ok: true,
        json: async () => detailedUsers,
      });
      const { result } = renderHook(() => useUsers());
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });
      expect(result.current.users[0]).toEqual(detailedUsers[0]);
    });
  });

  //// ERROR HANDLING TESTS
  

});
