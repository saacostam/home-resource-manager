import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsLoader } from "./stats-loader";
import { useStatsLoader } from "../hooks";

// Components
vi.mock("./stats-content", () => ({
  StatsContent: () => <div data-testid="mock-stats-content" />,
}));

vi.mock("./stats-skeleton", () => ({
  StatsSkeleton: () => <div data-testid="mock-stats-skeleton" />,
}));

vi.mock("@/modules/core.components", () => ({
  QueryError: () => <div data-testid="mock-query-error" />,
}));

// Mock the hook
vi.mock("../hooks", () => ({
  useStatsLoader: vi.fn(),
}));

describe("StatsLoader", () => {
  const mockUseStatsLoader = vi.mocked(useStatsLoader);

  it("renders skeleton when loading", () => {
    mockUseStatsLoader.mockReturnValue({
      status: "loading",
    });

    render(<StatsLoader />);
    expect(screen.getByTestId("mock-stats-skeleton")).toBeInTheDocument();
  });

  it("renders error when query fails", () => {
    mockUseStatsLoader.mockReturnValue({
      status: "error",
    } as ReturnType<typeof useStatsLoader>);

    render(<StatsLoader />);
    expect(screen.getByTestId("mock-query-error")).toBeInTheDocument();
  });

  it("renders content when data is available", () => {
    mockUseStatsLoader.mockReturnValue({
      status: "success",
    } as ReturnType<typeof useStatsLoader>);

    render(<StatsLoader />);
    expect(screen.getByTestId("mock-stats-content")).toBeInTheDocument();
  });
});
