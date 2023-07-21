import { render, screen } from "@testing-library/react";
import Heart from ".";

/* expect.extend({ toHaveStyleRule }); */

test("Heart Icon is rendered in the Button", () => {
  render(<Heart />);

  const heartIcon = screen.getByTestId("heart-icon");
  console.log(heartIcon);
  expect(heartIcon).toBeInTheDocument();
});

/* test("Heart Icon is filled when isFavourite is true", () => {
  render(<Heart isFavourite={true} />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toHaveStyleRule("color", "red");
}); */

/* test("Heart Icon is not filled when isFavourite is false", () => {
  render(<Heart isFavourite={false} />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toHaveAttribute("fill", "transparent");
}); */
