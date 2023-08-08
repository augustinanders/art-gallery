import Favourites from ".";
import { render, screen } from "@testing-library/react";
import useStore from "@/Stores/useStore";
import useLocalStore from "@/Stores/useLocalStore";

jest.mock("../../Stores/useStore");
jest.mock("../../Stores/useLocalStore");

test("renders all art favourite pieces as a list", () => {
  renderFavourites();

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  expect(screen.getByText(/The Creation of Adam/)).toBeInTheDocument();
});

test("Each art piece's image, artist and name is displayed", () => {
  renderFavourites();

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  const artist = screen.getByText(/Michelangelo/);
  expect(artist).toBeInTheDocument();

  const name = screen.getByText(/The Creation of Adam/);
  expect(name).toBeInTheDocument();
});

test("a FavoriteButton component is rendered", () => {
  renderFavourites();

  expect(screen.getByRole("button")).toBeInTheDocument();
});

function renderFavourites() {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
    {
      slug: "the-scream",
      name: "The Scream",
      artist: "Edvard Munch",
      imageSource: "/images/the-scream.jpg",
    },
  ]);

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

  render(<Favourites />);
}
