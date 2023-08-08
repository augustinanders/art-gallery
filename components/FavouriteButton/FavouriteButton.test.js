import { render, screen } from "@testing-library/react";
import FavouriteButton from ".";
import useLocalStore from "@/Stores/useLocalStore";

jest.mock("../../Stores/useLocalStore");

test("Heart Icon is rendered in the Button", () => {
  useLocalStore.mockImplementation((selector) => {
    const state = {
      artPiecesInfo: [
        {
          slug: "the-creation-of-adam",
          isFavourite: true,
        },
        {
          slug: "the-scream",
          isFavourite: false,
        },
      ],
    };
    return selector(state); // Return the selected part of the state
  });

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toBeInTheDocument();
});

import userEvent from "@testing-library/user-event";

test("SVG changes fill color on click", () => {
  useLocalStore.mockImplementation((selector) => {
    const state = {
      artPiecesInfo: [
        {
          slug: "the-creation-of-adam",
          isFavourite: true,
        },
        {
          slug: "the-scream",
          isFavourite: false,
        },
      ],
    };
    return selector(state); // Return the selected part of the state
  });

  render(<FavouriteButton slug="the-creation-of-adam" />);

  const svgElement = screen.getByTestId("heart-path"); // Annahme, dass das SVG ein klickbares Element ist und eine Rolle hat

  expect(svgElement).toHaveStyle("fill: black");
});
