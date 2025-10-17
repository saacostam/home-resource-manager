import { describe, it, expect } from "vitest";
import { genRoute, TRouteType } from "./router.utils";

describe("genRoute", () => {
  const routes: Record<TRouteType, string> = {
    [TRouteType.DASHBOARD]: "/",
    [TRouteType.SIGNUP]: "/signup",
    [TRouteType.LOGIN]: "/login",
    [TRouteType.CATEGORIES]: "/manage-categories",
    [TRouteType.RESOURCES]: "/manage-resources",
    [TRouteType.BOARDS]: "/manage-boards",
    [TRouteType.TASKS]: "/manage-tasks",
    [TRouteType.SETTINGS]: "/settings",
  };

  it.each(Object.entries(routes))(
    "should return %s route correctly",
    (type, expected) => {
      expect(genRoute({ type: type as TRouteType })).toBe(expected);
    },
  );

  it("should return undefined for an invalid route type (defensive case)", () => {
    // @ts-expect-error - testing invalid input
    expect(genRoute({ type: "invalid" })).toBeUndefined();
  });
});
