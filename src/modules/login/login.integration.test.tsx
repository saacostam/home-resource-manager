import { renderWithProviders } from "@/test";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { Login } from "./components";
import { ErrorResponse } from "../error";
import type { IMutationLoginIn, IMutationLoginOut } from "../repositories/app";
import { genRoute, TRouteType } from "../routing";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const submitLoginForm = async (username: string, password: string) => {
  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  await userEvent.type(usernameInput, username);

  const passwordInput = screen.getByPlaceholderText("Password");
  await userEvent.type(passwordInput, password);

  const submitButton = screen.getByRole("button", { name: /login/i });
  await userEvent.click(submitButton);
};

describe("Login [Integration]", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it("should login and navigate the user on success", async () => {
    const mockLoginResponse: IMutationLoginOut = {
      token: "hello",
    };
    const mockLogin = vi.fn();
    mockLogin.mockResolvedValueOnce(mockLoginResponse);

    renderWithProviders(<Login />, {
      repositories: {
        auth: {
          login: mockLogin,
        },
      },
    });

    await submitLoginForm("username", "password");

    const expectedArgs: IMutationLoginIn = {
      username: "username",
      password: "password",
    };
    expect(mockLogin).toHaveBeenCalledWith(expectedArgs);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        genRoute({ type: TRouteType.DASHBOARD }),
      );
    });
  });

  it("should show loading state while submitting", async () => {
    const mockLogin = vi.fn();

    renderWithProviders(<Login />, {
      repositories: {
        auth: {
          login: mockLogin,
        },
      },
    });

    mockLogin.mockImplementation(
      () =>
        new Promise(() => {
          // do nothing
        }),
    );
    await submitLoginForm("user", "pass");

    await waitFor(() => {
      const btn = screen.getByRole("button", { name: /login/i });
      expect(btn).toBeDisabled();
    });
  });

  it("should show generic error", async () => {
    const mockLogin = vi.fn();
    mockLogin.mockRejectedValueOnce(new Error());

    renderWithProviders(<Login />, {
      repositories: {
        auth: {
          login: mockLogin,
        },
      },
    });

    await submitLoginForm("user", "pass");

    await waitFor(() => {
      expect(screen.getByText("Something went wrong!"));
    });
  });

  it("should show form error state", async () => {
    const mockLogin = vi.fn();
    mockLogin.mockRejectedValueOnce(
      new ErrorResponse("error", 400, [
        { field: "username", message: "error-username" },
        { field: "password", message: "error-password" },
      ]).mockAxiosError(),
    );

    renderWithProviders(<Login />, {
      repositories: {
        auth: {
          login: mockLogin,
        },
      },
    });

    await submitLoginForm("user", "pass");

    await waitFor(() => {
      expect(screen.getByText("error-username"));
      expect(screen.getByText("error-password"));
    });
  });
});
