import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Login from "./Login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login Component", () => {
  it("should render the component properly", () => {
    render(<Login />);
    const lockIcon = screen.getByTestId("LockOutlinedIcon");
    expect(lockIcon).toBeInTheDocument();
    const headingElement = screen.getByRole("heading", { name: /sign in/i });
    expect(headingElement).toBeInTheDocument();
    const emailLabelText = screen.getByLabelText(/email/i);
    expect(emailLabelText).toBeInTheDocument();
    const passwordLabeltext = screen.getByLabelText(/password/i);
    expect(passwordLabeltext).toBeInTheDocument();
    const signInButton = screen.getByRole("button", { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();
    const switchButton = screen.getByRole("button", {
      name: /do not have an account\? sign up/i,
    });
    expect(switchButton).toBeInTheDocument();
  });

  it("should display error message if email and password are invalid", async () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
    expect(
      await screen.findByText(/please enter your email/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/please enter your password/i)
    ).toBeInTheDocument();
  });

  it("should toggle between sign in and sign up", () => {
    render(<Login />);
    fireEvent.click(
      screen.getByRole("button", {
        name: /do not have an account\? sign up/i,
      })
    );
    expect(
      screen.getByRole("heading", { name: /sign up/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /already have an account\? sign in/i })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /already have an account\? sign in/i })
    );
    expect(
      screen.getByRole("heading", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /do not have an account\? sign up/i,
      })
    ).toBeInTheDocument();
  });
});
