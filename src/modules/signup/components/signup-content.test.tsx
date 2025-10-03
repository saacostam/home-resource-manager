import { renderWithProviders, type MockRepositories } from "@/test";
import { screen } from "@testing-library/dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TCountryTimezone } from "@/modules/timezones";
import { SignupContent } from "./signup-content";
import userEvent from "@testing-library/user-event";
import type { IMutationSignUpIn } from "@/modules/repositories/app";

const countryTimezones: TCountryTimezone[] = [
  {
    country: { name: "USA", code: "US" },
    zones: [{ name: "GMT", comments: "" }],
  },
  {
    country: { name: "Colombia", code: "CO" },
    zones: [{ name: "COT", comments: "" }],
  },
];

describe("SignupContent", () => {
  let mockAuthRepo: MockRepositories["auth"];

  beforeEach(() => {
    mockAuthRepo = { signup: vi.fn().mockResolvedValue(undefined) };
  });

  it("renders the form", () => {
    renderWithProviders(
      <SignupContent
        defaultTimezone="GMT"
        timezones={{
          type: "available",
          data: countryTimezones,
        }}
      />,
      { repositories: { auth: mockAuthRepo } },
    );

    const firstNameInput = screen.getByRole("textbox", { name: "First Name" });
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveValue("");

    const lastNameInput = screen.getByRole("textbox", { name: "Last Name" });
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveValue("");

    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveValue("");

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveValue("");
    expect(passwordInput).toHaveProperty("type", "password");

    const selectInput = screen.getByRole("textbox", { name: "Timezone" });
    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveValue("USA - GMT");

    const submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("fills in the form, and submits", async () => {
    renderWithProviders(
      <SignupContent
        defaultTimezone="GMT"
        timezones={{
          type: "available",
          data: countryTimezones,
        }}
      />,
      { repositories: { auth: mockAuthRepo } },
    );

    // Text Fields
    const firstNameInput = screen.getByRole("textbox", { name: "First Name" });
    await userEvent.type(firstNameInput, "first-name");
    expect(firstNameInput).toHaveValue("first-name");

    const lastNameInput = screen.getByRole("textbox", { name: "Last Name" });
    await userEvent.type(lastNameInput, "last-name");
    expect(lastNameInput).toHaveValue("last-name");

    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    await userEvent.type(usernameInput, "username");
    expect(usernameInput).toHaveValue("username");

    const passwordInput = screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "password");
    expect(passwordInput).toHaveValue("password");

    // Select
    const selectInput = screen.getByRole("textbox", { name: "Timezone" });
    await userEvent.click(selectInput);

    const colombiaOption = await screen.findByText("Colombia - COT");
    await userEvent.click(colombiaOption);

    expect(selectInput).toHaveValue("Colombia - COT");

    // Submit
    const submitButton = screen.getByRole("button", { name: /sign up/i });
    await userEvent.click(submitButton);

    const expectedArgs: IMutationSignUpIn = {
      firstName: "first-name",
      lastName: "last-name",
      username: "username",
      password: "password",
      timezone: "COT",
    };
    expect(mockAuthRepo?.signup).toHaveBeenCalledWith(expectedArgs);
  });
});
