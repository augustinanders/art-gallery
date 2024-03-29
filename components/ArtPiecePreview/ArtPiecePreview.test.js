import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("Each art piece's image, artist and name are displayed", () => {
  const piece = {
    slug: "the-creation-of-adam",
    name: "The Creation of Adam",
    artist: "Michelangelo",
    imageSource: "/images/the-creation-of-adam.jpg",
  };

  render(
    <ArtPiecePreview
      alt={piece.name}
      src={piece.imageSource}
      name={piece.name}
      artist={piece.artist}
    />
  );

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  const artist = screen.getByText(/Michelangelo/);
  expect(artist).toBeInTheDocument();

  const name = screen.getByText(/The Creation of Adam/);
  expect(name).toBeInTheDocument();
});

test("a FavoriteButton component is rendered", () => {
  const piece = {
    slug: "the-creation-of-adam",
    name: "The Creation of Adam",
    artist: "Michelangelo",
    imageSource: "/images/the-creation-of-adam.jpg",
  };

  render(
    <ArtPiecePreview
      alt={piece.name}
      src={piece.imageSource}
      name={piece.name}
      artist={piece.artist}
    />
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
});
