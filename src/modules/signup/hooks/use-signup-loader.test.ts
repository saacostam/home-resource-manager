import { renderHookWithProviders, type MockRepositories } from "@/test";
import { waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { TCountryTimezone } from "@/modules/timezones";
import { useSignupLoader } from "./use-signup-loader";

const mockTimezoneRepository = (
  timezones: TCountryTimezone[],
): MockRepositories["timezone"] => {
  return {
    // eslint-disable-next-line @typescript-eslint/require-await
    async getAllCountryTimezones() {
      return timezones;
    },
  };
};

const mockTimezones: TCountryTimezone[] = [
  { country: { name: "Colombia", code: "CO" }, zones: [] },
];

describe("useSignupLoader", () => {
  it("should return loading initially", () => {
    const { result } = renderHookWithProviders(() => useSignupLoader(), {
      repositories: {
        timezone: mockTimezoneRepository(mockTimezones),
      },
    });

    // The first state is always loading
    expect(result.current.status).toBe("loading");
  });

  it("should return success if queries are successful", async () => {
    const { result } = renderHookWithProviders(() => useSignupLoader(), {
      repositories: {
        timezone: mockTimezoneRepository(mockTimezones),
      },
    });

    await waitFor(() => {
      expect(result.current.status).toBe("success");
    });

    expect(result.current.data).toEqual(mockTimezones);
  });

  it("should return error if repository rejects", async () => {
    const { result } = renderHookWithProviders(() => useSignupLoader(), {
      repositories: {
        timezone: {
          // eslint-disable-next-line @typescript-eslint/require-await
          async getAllCountryTimezones() {
            throw new Error("fail");
          },
        },
      },
    });

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });
  });
});
