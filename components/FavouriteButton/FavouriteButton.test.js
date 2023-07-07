import { render, screen } from "@testing-library/react";
import FavouriteButton from ".";

test("Heart Icon is rendered in the Button", () => {
  render(<FavouriteButton />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toBeInTheDocument();
});
