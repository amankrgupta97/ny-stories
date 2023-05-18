import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Header from "./Header";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Header component", () => {
  it("should render NY Stories title", () => {
    const loggedIn: boolean = true;
    render(<Header isLogged={loggedIn} />);
    const titleElement = screen.getByText(/ny stories/i);
    expect(titleElement).toBeInTheDocument();
  });
  it("should render logo", () => {
    const loggedIn: boolean = true;
    render(<Header isLogged={loggedIn} />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("should display logout button if user is logged in", () => {
    const loggedIn: boolean = true;
    render(<Header isLogged={loggedIn} />);
    const logoutButtonElement = screen.getByRole("button", { name: /logout/i });
    expect(logoutButtonElement).toBeInTheDocument();
  });
  it("should not display logout button if user is not logged in", () => {
    const loggedIn: boolean = false;
    render(<Header isLogged={loggedIn} />);
    const logoutButtonElement = screen.queryByRole("button", {
      name: /logout/i,
    });
    expect(logoutButtonElement).toBeNull();
  });
});
