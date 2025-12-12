import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { DateUtils } from "./date.utils";

const TEST_CASES = [
  { year: 2000, month: 0, day: 1 },
  { year: 3000, month: 6, day: 15 },
  { year: 2001, month: 11, day: 31 },
];

describe("DateUtils", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("today", () => {
    it.each(TEST_CASES)(
      "should format current date correctly for %o",
      ({ year, month, day }) => {
        const date = new Date(year, month, day);
        vi.setSystemTime(date);

        expect(DateUtils.today()).toBe(
          `${String(year)}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        );
      },
    );
  });
});
