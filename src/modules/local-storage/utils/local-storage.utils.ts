import type { LocalStorageKey } from "../types";

export const LocalStorageUtils = {
  setString(key: LocalStorageKey, value: string) {
    localStorage.setItem(key, value);
  },

  safelyGetString(key: LocalStorageKey): string | null {
    const rawValue = localStorage.getItem(key);

    if (rawValue === null) return null;

    try {
      if (!(typeof rawValue === "string")) return null;
      return rawValue;
    } catch {
      return null;
    }
  },

  remove(key: LocalStorageKey) {
    localStorage.removeItem(key);
  },
};
