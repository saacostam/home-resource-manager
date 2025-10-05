import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatsItem } from "./stats-item";
import { renderWithProviders } from "@/test";

describe("StatsItem", () => {
  it("should render content, icon and titles", () => {
    renderWithProviders(
      <StatsItem
        bg="blue"
        content="test-content"
        icon="test-icon"
        title="test-title"
      />,
    );

    expect(screen.findAllByText("test-content")).toBeDefined();
    expect(screen.findAllByText("test-icon")).toBeDefined();
    expect(screen.findAllByText("test-title")).toBeDefined();
  });
});
