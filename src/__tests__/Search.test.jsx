import { React, render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("Snapshot Test", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Checks that elements render properly", () => {
    const { getByText, getByRole } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(getByText("GO")).toBeInstanceOf(HTMLButtonElement);
    expect(getByRole("textbox")).toHaveAttribute("class", "search-box");
  });
});
