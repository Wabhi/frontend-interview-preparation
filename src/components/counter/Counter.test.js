import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../counter/Counter";

describe("Testing my counter component", () => {
  test("initial render count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("increment count when increment button click", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementBtn);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("decrements count when decrement button clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementBtn);
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  test("resets count to 0 when reset button clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    // Increment a few times
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(screen.getByText("Count: 3")).toBeInTheDocument();
    // Reset
    const resetBtn = screen.getByRole("button", { name: "Reset" });
    await user.click(resetBtn);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("handles multiple operations correctly", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(incBtn); // 1
    await user.click(incBtn); // 2
    await user.click(decBtn); // 1
    await user.click(incBtn); // 2
    expect(screen.getByText("Count: 2")).toBeInTheDocument();
  });
});
