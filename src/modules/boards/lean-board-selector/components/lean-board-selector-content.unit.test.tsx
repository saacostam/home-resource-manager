import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import type { TLeanBoard } from "@/modules/boards/manage-board";
import { renderWithProviders } from "@/test";
import { LeanBoardSelectorContent } from "./lean-board-selector-content";

// Mock dependencies
vi.mock("@/modules/boards/lean-board-editor", () => ({
  LeanBoardEditorLoader: ({ id }: { id: string }) => (
    <div data-testid="mock-editor" data-id={id} />
  ),
}));

vi.mock("@/modules/core.components", () => ({
  EmptyQuery: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-testid="mock-empty-query">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  ),
}));

// Helper mock data
const mockBoards: TLeanBoard[] = [
  { id: "1", name: "Board One" },
  { id: "2", name: "Board Two" },
];

describe("LeanBoardSelectorContent", () => {
  it("renders the select and empty query initially", () => {
    renderWithProviders(<LeanBoardSelectorContent boards={mockBoards} />);

    // Select should be rendered with placeholder
    expect(screen.getByPlaceholderText("Board")).toBeInTheDocument();

    // Initially shows EmptyQuery
    expect(screen.getByTestId("mock-empty-query")).toBeInTheDocument();

    // No editor yet
    expect(screen.queryByTestId("mock-editor")).not.toBeInTheDocument();
  });

  it("renders LeanBoardEditorLoader when a board is selected", async () => {
    renderWithProviders(<LeanBoardSelectorContent boards={mockBoards} />);

    const select = screen.getByPlaceholderText("Board");

    // Open dropdown by clicking
    fireEvent.click(select);

    // Select the first board
    const option = await screen.findByText("Board One");
    fireEvent.click(option);

    // The editor should now be visible
    expect(screen.getByTestId("mock-editor")).toBeInTheDocument();
    expect(screen.getByTestId("mock-editor")).toHaveAttribute("data-id", "1");

    // EmptyQuery should not be visible
    expect(screen.queryByTestId("mock-empty-query")).not.toBeInTheDocument();
  });

  it("renders 'Nothing found...' message if list is empty", async () => {
    renderWithProviders(<LeanBoardSelectorContent boards={[]} />);

    const select = screen.getByPlaceholderText("Board");
    fireEvent.click(select);

    expect(await screen.findByText("Nothing found...")).toBeInTheDocument();
  });

  it("clears the selection and shows EmptyQuery again", async () => {
    renderWithProviders(<LeanBoardSelectorContent boards={mockBoards} />);

    const select = screen.getByPlaceholderText("Board");
    fireEvent.click(select);

    const option = await screen.findByText("Board One");
    fireEvent.click(option);

    // Confirm editor is visible
    expect(screen.getByTestId("mock-editor")).toBeInTheDocument();

    // Clear selection
    fireEvent.click(option);

    // Should show EmptyQuery again
    expect(screen.getByTestId("mock-empty-query")).toBeInTheDocument();
  });
});
