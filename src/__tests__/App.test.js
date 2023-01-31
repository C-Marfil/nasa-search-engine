import { React, render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("Snapshot Test", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("tests that the image is rendered", () => {
    const { getByAltText } = render(<App />);
    const image = getByAltText("NASA logo");

    expect(image).toHaveAttribute(
      "src",
      "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    );
  });
});
