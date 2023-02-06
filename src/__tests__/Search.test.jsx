import { fireEvent, React, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("Snapshot Test", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />,
      { wrapper: Router }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Checks that elements render properly", () => {
    const { getByText, getByRole } = render(
      <Search setSearchResults={validProps.setSearchResults} />,
      { wrapper: Router }
    );

    expect(getByText("GO")).toBeInstanceOf(HTMLButtonElement);
    expect(getByRole("textbox")).toHaveAttribute("class", "search-box");
  });

  it("Tests the button's behaviour on click", async () => {
    render(<Search setSearchResults={validProps.setSearchResults} />, {
      wrapper: Router,
    });

    await fireEvent.click(screen.getByRole("button"));

    expect(validProps.setSearchResults).toHaveBeenCalled();
  });
});
