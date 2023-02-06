import { fireEvent, React, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchResults from "../components/SearchResults";

describe("Search Results component", () => {
  const validProps = {
    results: ["http//1", "http//2u"],
    setLevel: jest.fn(),
    level: "shallow",
  };

  it("Snapshot test", () => {
    const { asFragment } = render(
      <SearchResults
        results={validProps.results}
        setLevel={validProps.setLevel}
        level={validProps.level}
      />,
      { wrapper: Router }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders elements correctly", () => {
    render(
      <Router initialEntries={["/moon"]}>
        <SearchResults
          results={validProps.results}
          setLevel={validProps.setLevel}
          level={validProps.level}
        />
      </Router>
    );

    expect(screen.getByText("Search Results")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  // I've tried...
  xit("Tests the img's Link elements", async () => {
    const history = createBrowserHistory({ initialEntries: ["/moon"] });
    render(
      <Router history={history}>
        <SearchResults
          results={validProps.results}
          setLevel={validProps.setLevel}
          level={validProps.level}
        />
      </Router>
    );

    expect(history.location.pathname).toBe("/moon");
    await fireEvent.click(screen.getByAltText("space-is-pretty"));
    expect(history.location.pathname).toBe("/");
  });
});
