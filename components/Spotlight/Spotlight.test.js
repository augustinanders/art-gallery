import Spotlight from ".";
import { render, screen } from "@testing-library/react";
import useStore from "../../Stores/useStore";

jest.mock("../../useStore");

test("the art piece image and artist are displayed", () => {
  useStore.mockReturnValueOnce([
    {
      slug: "the-creation-of-adam",
      name: "The Creation of Adam",
      artist: "Michelangelo",
      imageSource: "/images/the-creation-of-adam.jpg",
    },
  ]);

  render(<Spotlight />);

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute(
    "alt",
    "The Creation of Adam"
  );
  expect(screen.getByText(/Michelangelo/)).toBeInTheDocument();
});
