import type { LocalStorageKey } from "../types";

export const LocalStorageUtils = {
  setString(key: LocalStorageKey, value: string) {
    localStorage.setItem(key, value);
  },

  safelyGetString(key: LocalStorageKey): string | null {
    const rawValue = localStorage.getItem(key);

    if (rawValue === null) return null;

    try {
      const val: unknown = JSON.parse(rawValue);
      if (!(typeof val === "string")) return null;
      return val;
    } catch {
      return null;
    }
  },
};
