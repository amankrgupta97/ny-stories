import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Logout from "./Logout";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Logout component", () => {
  it("should navigate to login page on logout", () => {
    render(<Logout />);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login");
  });
});
