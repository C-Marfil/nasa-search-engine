import { React, render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("Snapshot Test", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Checks that elements render properly", () => {
    const { getByText, getByRole } = render(<Search />);

    expect(getByText("GO")).toBeInstanceOf(HTMLButtonElement);
    expect(getByRole("textbox")).toHaveAttribute("class", "search-box");
  });
});
