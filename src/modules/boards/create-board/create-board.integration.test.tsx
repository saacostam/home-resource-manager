import { beforeEach, describe, expect, it, vi } from "vitest";
import { notifications } from "@mantine/notifications";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import type {
  IMutationCreateBoardIn,
  IMutationCreateBoardOut,
} from "@/modules/repositories/app";
import { renderWithProviders } from "@/test";
import { CreateBoard } from "./components";

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: vi.fn(),
  },
}));

const mutationCreateBoardOut: IMutationCreateBoardOut = {
  id: "test-id",
};

describe("CreateBoard", () => {
  const onClose = vi.fn();
  const setId = vi.fn();

  beforeEach(() => {
    onClose.mockReset();
    setId.mockReset();
    vi.resetAllMocks();
  });

  it("should create board on submit", async () => {
    const createBoard = vi.fn();

    renderWithProviders(<CreateBoard onClose={onClose} setId={setId} />, {
      repositories: {
        board: {
          createBoard,
        },
      },
    });

    const field = await screen.findByRole("textbox", { name: "Name" });
    act(() => {
      fireEvent.input(field, {
        target: {
          value: "name",
        },
      });
    });

    createBoard.mockResolvedValueOnce(mutationCreateBoardOut);

    const submitCta = await screen.findByRole("button");
    act(() => {
      fireEvent.click(submitCta);
    });

    await waitFor(() => {
      const expectedIn: IMutationCreateBoardIn = {
        name: "name",
      };

      expect(createBoard).toHaveBeenCalledOnce();
      expect(createBoard).toHaveBeenCalledWith(expectedIn);
    });

    expect(onClose).toHaveBeenCalledOnce();

    expect(setId).toHaveBeenCalledOnce();
    expect(setId).toHaveBeenCalledWith(mutationCreateBoardOut.id);

    expect(notifications.show).toHaveBeenCalledOnce();
  });

  it("should validate form values", async () => {
    const createBoard = vi.fn();

    renderWithProviders(<CreateBoard onClose={onClose} setId={setId} />, {
      repositories: {
        board: {
          createBoard,
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

    expect(createBoard).not.toHaveBeenCalledOnce();
    expect(onClose).not.toHaveBeenCalledOnce();
    expect(setId).not.toHaveBeenCalledOnce();
    expect(notifications.show).not.toHaveBeenCalledOnce();
  });

  it("should handle repository create errors", async () => {
    const createBoard = vi.fn();

    renderWithProviders(<CreateBoard onClose={onClose} setId={setId} />, {
      repositories: {
        board: {
          createBoard,
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
    createBoard.mockRejectedValueOnce(new Error());

    const submitCta = await screen.findByRole("button");
    act(() => {
      fireEvent.click(submitCta);
    });

    // Validate a generic error message was shown
    await waitFor(() => {
      expect(screen.findByText("Something went wrong!")).toBeDefined();
    });

    expect(createBoard).toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
    expect(setId).not.toHaveBeenCalledOnce();
    expect(notifications.show).not.toHaveBeenCalledOnce();
  });
});
