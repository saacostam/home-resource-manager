import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Clean up DOM after each test
afterEach(() => {
  cleanup();
});

// Polyfill matchMedia for Mantine / libraries relying on it
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: () => {
      /* empty */
    },
    removeListener: () => {
      /* empty */
    },
    addEventListener: () => {
      /* empty */
    },
    removeEventListener: () => {
      /* empty */
    },
    dispatchEvent: () => false,
  });
}
