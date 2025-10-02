import { describe, it, beforeEach, vi, expect } from "vitest";
import { renderWithProviders, type MockRepositories } from "@/test/utils";
import { SettingsContent } from "./settings-content";
import type { TCountryTimezone } from "@/modules/timezones";
import type { TSettings } from "../types";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

const settings: TSettings = {
  timezone: "GMT",
};

describe("SettingsContent", () => {
  let mockUserRepo: MockRepositories["user"];

  beforeEach(() => {
    mockUserRepo = { updateSettings: vi.fn().mockResolvedValue(undefined) };
  });

  it("renders the form with the correct default timezone", () => {
    renderWithProviders(
      <SettingsContent
        countryTimezones={countryTimezones}
        settings={settings}
      />,
      { repositories: {} },
    );

    const selectInput = screen.getByRole("textbox", { name: "Timezone" });
    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveValue("USA - GMT");

    const button = screen.getByRole("button", { name: /update/i });
    expect(button).toBeInTheDocument();
  });

  it("changes timezone and submits the form", async () => {
    renderWithProviders(
      <SettingsContent
        countryTimezones={countryTimezones}
        settings={settings}
      />,
      { repositories: { user: mockUserRepo } },
    );

    const selectInput = screen.getByRole("textbox", { name: "Timezone" });
    await userEvent.click(selectInput);

    const colombiaOption = await screen.findByText("Colombia - COT");
    await userEvent.click(colombiaOption);

    expect(selectInput).toHaveValue("Colombia - COT");

    const button = screen.getByRole("button", { name: /update/i });
    await userEvent.click(button);

    expect(mockUserRepo?.updateSettings).toHaveBeenCalledWith({
      timezone: "COT",
    });
  });
});
