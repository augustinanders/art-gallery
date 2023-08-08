import { render, screen } from "@testing-library/react";
import Heart from ".";
import "@testing-library/jest-dom/extend-expect"; // optional für erweiterte matchers

test("Heart Icon is rendered in the Button", () => {
  render(<Heart />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toBeInTheDocument();
});

/* test("Heart Icon is filled when isFilled is true", () => {
  render(<Heart isFilled={true} />);

  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toHaveAttribute("isFilled");
}); */
