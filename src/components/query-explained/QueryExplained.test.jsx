import { render, screen } from "@testing-library/react";
import QueryExplained from "./QueryExplained";

describe("Testing the Query Explained Component", () => {
  describe("Understanding getBy vs queryBy vs findBy", () => {
    //'getBy - for elements that MUST exist'
    test("Data Loading Is Started!...", () => {
      render(<QueryExplained />);
      const loadingElement = screen.getByText("Data Loading Is Started!");
      expect(loadingElement).toBeInTheDocument();
    });
    // This would THROW an error , unable to find the text
    // test("Data Loading Is FInished!...", () => {
    //   render(<QueryExplained />);
    //   const loadingElement = screen.getByText("Data Loading Is Finished!");
    //   expect(loadingElement).toBeInTheDocument();
    // });

    test("queryBy - for elements that might NOT exist", () => {
      render(<QueryExplained />);
      const loadingElement = screen.queryByText("Data Loading Is Started!");
      expect(loadingElement).toBeInTheDocument();
      const dataElement = screen.queryByText("Data Loading Is Finished!");
      expect(dataElement).not.toBeInTheDocument(); // null
    });

    //findBy - ASYNC - waits for element
    test("findBy - for elements that appear LATER", async () => {
      render(<QueryExplained />);
      expect(screen.getByText("Data Loading Is Started!")).toBeInTheDocument();
      const dataElement = await screen.findByText("Data Loading Is Started!");
      expect(dataElement).toBeInTheDocument();
    //   expect(screen.queryByText("Data Loading Is Started!")).not.toBeInTheDocument();
    });
  });
});
