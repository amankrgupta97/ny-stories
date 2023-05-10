import { render, fireEvent } from "@testing-library/react";
import Logout from "./Logout"; // assuming the component is exported as named export

describe("Logout component", () => {
  it("should clear local storage and navigate to login page on logout", () => {
    const mockNavigate = jest.fn();
    Object.defineProperty(window, "localStorage", {
      value: {
        clear: jest.fn(),
      },
    });
    const { getByRole } = render(<Logout navigate={mockNavigate} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const logoutButton = getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);
    expect(window.localStorage.clear).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
