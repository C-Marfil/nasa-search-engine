import { React, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

describe("Home", () => {
  it("Snapshot Test", () => {
    const { asFragment } = render(<Home />, { wrapper: Router });

    expect(asFragment()).toMatchSnapshot();
  });

  it("tests that elements are rendered", () => {
    const { getByText } = render(<Home />, { wrapper: Router });
    const movingImage = getByText(
      "Welcome, use the Search Bar above to find any pictures held in the public NASA archives."
    );

    expect(movingImage).toHaveAttribute("type", "pulse");
  });
});
