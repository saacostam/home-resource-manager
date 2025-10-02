import { describe, it, expect, beforeEach, vi } from "vitest";
import { LocalStorageUtils } from "./local-storage.utils";
import { LocalStorageKey } from "../types";

describe("LocalStorageUtils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("setString", () => {
    it("should store a string in localStorage", () => {
      LocalStorageUtils.setString(LocalStorageKey.AUTH, "testValue");
      expect(localStorage.getItem(LocalStorageKey.AUTH)).toBe("testValue");
    });
  });

  describe("safelyGetString", () => {
    it("should return the string if it exists", () => {
      localStorage.setItem(LocalStorageKey.AUTH, "hello");
      const result = LocalStorageUtils.safelyGetString(LocalStorageKey.AUTH);
      expect(result).toBe("hello");
    });

    it("should return null if key does not exist", () => {
      const result = LocalStorageUtils.safelyGetString(LocalStorageKey.AUTH);
      expect(result).toBeNull();
    });

    it("should return null if value is not a string (edge case)", () => {
      // JSDOM localStorage only stores strings, but we simulate the case by directly mocking localStorage.getItem.
      const spy = vi
        .spyOn(localStorage, "getItem")
        .mockReturnValueOnce({ random: "" } as unknown as string);
      const result = LocalStorageUtils.safelyGetString(LocalStorageKey.AUTH);
      expect(result).toBeNull();
      spy.mockRestore();
    });

    it("should return null if accessing localStorage throws", () => {
      const spy = vi
        .spyOn(localStorage, "getItem")
        .mockImplementationOnce(() => {
          throw new Error("boom");
        });
      const result = LocalStorageUtils.safelyGetString(LocalStorageKey.AUTH);
      expect(result).toBeNull();
      spy.mockRestore();
    });
  });

  describe("remove", () => {
    it("should remove a stored value", () => {
      localStorage.setItem(LocalStorageKey.AUTH, "value");
      LocalStorageUtils.remove(LocalStorageKey.AUTH);
      expect(localStorage.getItem(LocalStorageKey.AUTH)).toBeNull();
    });
  });
});
