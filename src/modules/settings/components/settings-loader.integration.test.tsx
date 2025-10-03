import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, type MockRepositories } from "@/test/utils";
import type { TUser } from "@/modules/user";
import type { TCountryTimezone } from "@/modules/timezones";
import { SettingsLoader } from "./settings-loader";

vi.mock("./settings-content", () => ({
  SettingsContent: () => <div data-testid="mock-settings-content" />,
}));

vi.mock("./settings-skeleton", () => ({
  SettingsSkeleton: () => <div data-testid="mock-settings-skeleton" />,
}));

vi.mock("@/modules/core.components", () => ({
  QueryError: () => <div data-testid="mock-query-error" />,
}));

describe("SettingsLoader", () => {
  const user: TUser = {
    firstName: "firstname",
    lastName: "lastname",
    username: "username",
    timezone: "timezone",
  };

  const timezones: TCountryTimezone[] = [
    {
      country: { name: "country-name", code: "CC" },
      zones: [{ name: "zone-1", comments: "comments" }],
    },
  ];

  function makeRepos(
    userOk: boolean,
    tzOk: boolean,
  ): Pick<MockRepositories, "user" | "timezone"> {
    const unresolvedPromise = new Promise(() => {
      // intentionally never resolves
    });

    return {
      user: {
        getMe: userOk
          ? vi.fn().mockResolvedValue(user)
          : vi.fn().mockReturnValue(unresolvedPromise),
      },
      timezone: {
        getAllCountryTimezones: tzOk
          ? vi.fn().mockResolvedValue(timezones)
          : vi.fn().mockReturnValue(unresolvedPromise),
      },
    };
  }

  it("renders skeleton while loading", async () => {
    renderWithProviders(<SettingsLoader />, {
      repositories: makeRepos(false, false),
    });
    expect(
      await screen.findByTestId("mock-settings-skeleton"),
    ).toBeInTheDocument();
  });

  it("renderes success if both repos resolved", async () => {
    renderWithProviders(<SettingsLoader />, {
      repositories: makeRepos(true, true),
    });
    expect(
      await screen.findByTestId("mock-settings-content"),
    ).toBeInTheDocument();
  });

  it("renders QueryError when user repo fails", async () => {
    renderWithProviders(<SettingsLoader />, {
      repositories: {
        user: { getMe: vi.fn().mockRejectedValue(new Error("fail")) },
        timezone: {
          getAllCountryTimezones: vi.fn().mockResolvedValue(timezones),
        },
      },
    });

    expect(await screen.findByTestId("mock-query-error")).toBeInTheDocument();
  });

  it("renders QueryError when timezone repo fails", async () => {
    renderWithProviders(<SettingsLoader />, {
      repositories: {
        user: { getMe: vi.fn().mockResolvedValue(user) },
        timezone: {
          getAllCountryTimezones: vi.fn().mockRejectedValue(new Error("fail")),
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId("mock-query-error")).toBeInTheDocument();
    });
  });
});
