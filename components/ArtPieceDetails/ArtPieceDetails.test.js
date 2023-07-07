import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";
import useStore from "../../Stores/useStore";

jest.mock("../../Stores/useStore");

test("Each art piece's image, artist, year, genre and title are displayed", () => {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      year: "1508-1512",
      genre: "Fresco",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
  ]);

  render(<ArtPieceDetails slug={"the-creation-of-adam"} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  const artist = screen.getByText(/Michelangelo/);
  expect(artist).toBeInTheDocument();

  const name = screen.getByText(/The Creation of Adam/);
  expect(name).toBeInTheDocument();

  const year = screen.getByText(/1508-1512/);
  expect(year).toBeInTheDocument();

  const genre = screen.getByText(/Fresco/);
  expect(genre).toBeInTheDocument();
});

test("a back link is displayed", () => {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      year: "1508-1512",
      genre: "Fresco",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
  ]);

  render(<ArtPieceDetails slug={"the-creation-of-adam"} />);

  const backLink = screen.getByRole("link", { name: /back/i });
  expect(backLink).toBeInTheDocument();
});

test("a FavoriteButton component is rendered", () => {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      year: "1508-1512",
      genre: "Fresco",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
  ]);

  render(<ArtPieceDetails slug={"the-creation-of-adam"} />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
