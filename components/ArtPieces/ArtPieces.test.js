import ArtPieces from ".";
import { render, screen } from "@testing-library/react";
import useStore from "@/Stores/useStore";

jest.mock("../../Stores/useStore");

test("renders all art pieces as a list", () => {
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

  render(<ArtPieces />);

  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  expect(screen.getByText(/The Creation of Adam/)).toBeInTheDocument();
});
