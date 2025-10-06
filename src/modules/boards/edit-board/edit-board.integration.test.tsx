import { beforeEach, describe, expect, it, vi } from "vitest";
import { notifications } from "@mantine/notifications";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import type {
  IMutationUpdateBoardByIdIn,
  IQueryBoardByIdOut,
} from "@/modules/repositories/app";
import { renderWithProviders } from "@/test";
import { EditBoard } from "./components";

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: vi.fn(),
  },
}));

const mockQueryBoardByIdOut: IQueryBoardByIdOut = {
  id: "test-id",
  name: "test-name",
  content: "test-content",
};

describe("EditBoard", () => {
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockReset();
    vi.resetAllMocks();
  });

  it("should call update if content is updated", async () => {
    const updateBoardById = vi.fn();

    renderWithProviders(<EditBoard id="test-id" onClose={onClose} />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryBoardById: async () => mockQueryBoardByIdOut,
          updateBoardById,
        },
      },
    });

    const field = await screen.findByRole("textbox", { name: "Name" });
    act(() => {
      fireEvent.input(field, {
        target: {
          value: "new-name",
        },
      });
    });

    const submitCta = await screen.findByRole("button");
    act(() => {
      fireEvent.click(submitCta);
    });

    await waitFor(() => {
      const expectedIn: IMutationUpdateBoardByIdIn = {
        id: "test-id",
        name: "new-name",
      };

      expect(updateBoardById).toHaveBeenCalledOnce();
      expect(updateBoardById).toHaveBeenCalledWith(expectedIn);
    });

    expect(onClose).toHaveBeenCalledOnce();

    expect(notifications.show).toHaveBeenCalledOnce();
  });

  it("should validate form values", async () => {
    const updateBoardById = vi.fn();

    renderWithProviders(<EditBoard id="test-id" onClose={onClose} />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryBoardById: async () => mockQueryBoardByIdOut,
          updateBoardById,
        },
      },
    });

    // Write INVALID value into name input field
    const field = await screen.findByRole("textbox", { name: "Name" });
    act(() => {
      fireEvent.input(field, {
        target: {
          value: "0".repeat(100),
        },
      });
    });

    const submitCta = await screen.findByRole("button");
    act(() => {
      fireEvent.click(submitCta);
    });

    await waitFor(() => {
      expect(
        screen.findByText("String must contain at most 24 character(s)"),
      ).toBeDefined();
    });

    expect(updateBoardById).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should handle repository update errors", async () => {
    const updateBoardById = vi.fn();

    renderWithProviders(<EditBoard id="test-id" onClose={onClose} />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryBoardById: async () => mockQueryBoardByIdOut,
          updateBoardById,
        },
      },
    });

    const field = await screen.findByRole("textbox", { name: "Name" });
    act(() => {
      fireEvent.input(field, {
        target: {
          value: "new-name",
        },
      });
    });

    // Throw
    updateBoardById.mockRejectedValueOnce(new Error());

    const submitCta = await screen.findByRole("button");
    act(() => {
      fireEvent.click(submitCta);
    });

    // Valida the generic error message was shown
    await waitFor(() => {
      expect(screen.findByText("Something went wrong!")).toBeDefined();
    });

    expect(updateBoardById).toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });
});
