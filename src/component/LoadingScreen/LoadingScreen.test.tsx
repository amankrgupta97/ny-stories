import { screen, render } from "@testing-library/react";
import LoadingScreen from "./LoadingScreen";

test("render text loading", () => {
  render(<LoadingScreen />);
  const loadingtextElement = screen.getByText("Loading.....");
  expect(loadingtextElement).toBeInTheDocument();
});
