import Favourites from ".";
import { render, screen } from "@testing-library/react";
import useSetUpMock from "@/hooks/useSetUpMock";

jest.mock("../../Stores/useStore");
jest.mock("../../Stores/useLocalStore");

test("renders all art favourite pieces as a list", () => {
  useSetUpMock();
  render(<Favourites />);

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  expect(screen.getByText(/The Creation of Adam/)).toBeInTheDocument();
});

test("Each art piece's image, artist and name is displayed", () => {
  useSetUpMock();
  render(<Favourites />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  const artist = screen.getByText(/Michelangelo/);
  expect(artist).toBeInTheDocument();

  const name = screen.getByText(/The Creation of Adam/);
  expect(name).toBeInTheDocument();
});

test("a FavoriteButton component is rendered", () => {
  useSetUpMock();
  render(<Favourites />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
