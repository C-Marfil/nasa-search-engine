import { React, render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results component", () => {
  const validProps = {
    results: ["http//1", "http//2"],
    length: 2,
  };
  it("Snapshot test", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders elements correctly", () => {
    render(<SearchResults results={validProps.results} />);

    expect(screen.getByText("Search Results")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});
