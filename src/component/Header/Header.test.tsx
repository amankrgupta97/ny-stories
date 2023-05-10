import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("should render NY Stories title", () => {
    render(<Header />);
    const titleElement = screen.getByText(/ny stories/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render logo", () => {
    render(<Header />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  //   it('should display logout button if user is logged in', () => {
  //     const isLogin:boolean = true;
  //     render(<Header isLogin={isLogin} />);
  //     const logoutButtonElement = screen.getByRole('button', { name: /logout/i });
  //     expect(logoutButtonElement).toBeInTheDocument();
  //   });

  //   it('should not display logout button if user is not logged in', () => {
  //     const isLogin:boolean = false;
  //     render(<Header isLogin={isLogin} />);
  //     const logoutButtonElement = screen.queryByRole('button', { name: /logout/i });
  //     expect(logoutButtonElement).toBeNull();
  //   });
});
