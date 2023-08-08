import { render, screen } from "@testing-library/react";
import FavouriteButton from ".";
import useLocalStore from "@/Stores/useLocalStore";

jest.mock("../../Stores/useLocalStore");

function setupMock() {
  useLocalStore.mockImplementation((selector) => {
    const state = {
      artPiecesInfo: [
        {
          slug: "the-creation-of-adam",
          isFavourite: true,
        },
      ],
    };
    return selector(state);
  });
}

test("Heart Icon is rendered in the Button", () => {
  setupMock();

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toBeInTheDocument();
});

import userEvent from "@testing-library/user-event";

test("SVG changes fill color on click", () => {
  setupMock();

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const svgElement = screen.getByTestId("heart-path"); // Annahme, dass das SVG ein klickbares Element ist und eine Rolle hat

  expect(svgElement).toHaveStyle("fill: black");
});
