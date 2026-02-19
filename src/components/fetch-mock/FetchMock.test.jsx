import { getByText, render, screen } from "@testing-library/react";
import FetchMock from "./FetchMock";

describe("Mocking Fetch API to fetch User Details by id", () => {
  // Setup: Mock fetch globally
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Test case 1: Successful fetch
  test("displays user data after successful fetch", async () => {
    const mockUser = {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      username: "Bret",
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });
    render(<FetchMock userId={1} />);
    expect(screen.getByText("Loading user...")).toBeInTheDocument();
    // Use lowercase 'name' for the option key
    const heading = await screen.findByRole("heading", {
      name: /Leanne Graham/i,
    });
    // Using a regex or exact string that matches the rendered output
    expect(heading).toHaveTextContent("Name: Leanne Graham");
    // This will now pass because user.username is "Bret"
    expect(await screen.findByText("User: Bret")).toBeInTheDocument();
    expect(screen.queryByText("Loading user...")).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    // Match the actual URL in the component
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1",
    );
  });

  // Test Case 2: Failed API Call (Network Error)
  test("displays error message when fetch fails", async () => {
    // Arrange: Mock fetch to fail
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });
    // Act
    render(<FetchMock userId={999} />);
    // Assert: Check loading first
    expect(screen.getByText("Loading user...")).toBeInTheDocument();
    // Assert: Wait for error
    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("Error: Failed to fetch");
    // Assert: No user data shown
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  // Test Case 3: Network Rejection
  test("displays error message when network error occurs", async () => {
    // Arrange: Mock network failure
    global.fetch.mockRejectedValueOnce(new Error("Network error"));
    // Act
    render(<FetchMock userId={1} />);
    // Assert
    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("Error: Network error");
  });

  //Test Case 4: Multiple Sequential Fetches
  test("handles changing userId prop", async () => {
    const mockUser1 = {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      username: "Bret",
    };
    const mockUser2 = {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      username: "Antonette",
    };

    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser1,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser2,
      });

    const { rerender } = render(<FetchMock userId={1} />);
    // First user loads
    expect(await screen.findByText("Name: Leanne Graham")).toBeInTheDocument();
    // Change userId
    rerender(<FetchMock userId={2} />);
    // Second user loads
    expect(await screen.findByText("Name: Ervin Howell")).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});
