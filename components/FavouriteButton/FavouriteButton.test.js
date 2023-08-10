import { render, screen } from "@testing-library/react";
import FavouriteButton from ".";
import useSetUpMock from "@/hooks/useSetUpMock";

jest.mock("../../Stores/useLocalStore");

test("Heart Icon is rendered in the Button", () => {
  useSetUpMock();

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toBeInTheDocument();
});

test("SVG changes fill color on click", () => {
  useSetUpMock();

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const svgElement = screen.getByTestId("heart-path"); // Annahme, dass das SVG ein klickbares Element ist und eine Rolle hat

  expect(svgElement).toHaveStyle("fill: black");
});
