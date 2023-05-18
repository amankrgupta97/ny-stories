import { screen, render } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

test("render text loading", () => {
  render(<PageNotFound />);
  const pageNotFoundTextElement = screen.getByText("PageNotFound");
  expect(pageNotFoundTextElement).toBeInTheDocument();
});
