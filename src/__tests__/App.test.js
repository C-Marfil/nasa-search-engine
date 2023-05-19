import { React, render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  it("Snapshot Test", () => {
    const { asFragment } = render(<App />, { wrapper: Router });

    expect(asFragment()).toMatchSnapshot();
  });

  it("tests that elements are rendered", () => {
    act(() => {
      const { getByAltText } = render(<App />, { wrapper: Router });
      const image = getByAltText("nasa-logo");
    });
    expect(getByAltText("nasa-logo")).toHaveAttribute(
      "src",
      "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    );
  });
});
