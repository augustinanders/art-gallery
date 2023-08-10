import Navigation from ".";
import { render, screen } from "@testing-library/react";

render(<Navigation />);

const spotlightLink = screen.getByRole("link", {
  name: /Spotlight/i,
});

const artPiecesLink = screen.getByRole("link", {
  name: /Pieces/i,
});

const favouritesLink = screen.getByRole("link", {
  name: /Favourites/i,
});

test("renders all links, Spotlight as well as ArtPieces and Favourites in the navbar", () => {
  expect(screen.getAllByRole("link")).toHaveLength(3);
  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
  expect(favouritesLink).toBeInTheDocument();
});

test("all links in the navbar point to the correct pages", () => {
  expect(spotlightLink).toHaveAttribute("href", "/");
  expect(artPiecesLink).toHaveAttribute("href", "/pieces");
  expect(favouritesLink).toHaveAttribute("href", "/favourites");
});
