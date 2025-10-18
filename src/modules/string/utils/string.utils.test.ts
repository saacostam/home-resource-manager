import { describe, it, expect } from "vitest";
import { StringUtils } from "./string.utils";

describe("StringUtils.prettifyKebabCase", () => {
  it("should capitalize and replace hyphens with spaces", () => {
    expect(StringUtils.prettifyKebabCase("hello-world")).toBe("Hello World");
  });

  it("should handle single-word strings", () => {
    expect(StringUtils.prettifyKebabCase("example")).toBe("Example");
  });

  it("should handle multiple hyphens correctly", () => {
    expect(StringUtils.prettifyKebabCase("this-is-a-test")).toBe(
      "This Is A Test",
    );
  });

  it("should return an empty string if input is empty", () => {
    expect(StringUtils.prettifyKebabCase("")).toBe("");
  });

  it("should handle trailing hyphens gracefully", () => {
    expect(StringUtils.prettifyKebabCase("trailing-")).toBe("Trailing ");
  });

  it("should handle leading hyphens gracefully", () => {
    expect(StringUtils.prettifyKebabCase("-leading")).toBe(" Leading");
  });

  it("should handle consecutive hyphens", () => {
    expect(StringUtils.prettifyKebabCase("multiple--hyphens")).toBe(
      "Multiple  Hyphens",
    );
  });
});
