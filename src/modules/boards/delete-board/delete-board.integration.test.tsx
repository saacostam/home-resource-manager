import { beforeEach, describe, expect, it, vi } from "vitest";
import { notifications } from "@mantine/notifications";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import { renderWithProviders } from "@/test";
import type { IMutationDeleteBoardByIdIn } from "@/modules/repositories/app";
import { DeleteBoard } from "./components";

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: vi.fn(),
  },
}));

describe("DeleteBoard", () => {
  const onClose = vi.fn();
  const setId = vi.fn();

  beforeEach(() => {
    onClose.mockReset();
    setId.mockReset();
    vi.resetAllMocks();
  });

  it("shouls call delete on confirm", async () => {
    const deleteBoardById = vi.fn();

    renderWithProviders(
      <DeleteBoard id="test-id" onClose={onClose} setId={setId} />,
      {
        repositories: {
          board: {
            deleteBoardById,
          },
        },
      },
    );

    const confirmCta = await screen.findByRole("button", { name: "Delete" });
    act(() => {
      fireEvent.click(confirmCta);
    });

    await waitFor(() => {
      const expectedIn: IMutationDeleteBoardByIdIn = {
        id: "test-id",
      };

      expect(deleteBoardById).toHaveBeenCalledOnce();
      expect(deleteBoardById).toHaveBeenCalledWith(expectedIn);
    });

    expect(onClose).toHaveBeenCalledOnce();

    expect(setId).toHaveBeenCalledOnce();
    expect(setId).toHaveBeenCalledWith(null);

    expect(notifications.show).toHaveBeenCalledOnce();
  });

  it("shouls handle errors", async () => {
    const deleteBoardById = vi.fn();

    renderWithProviders(
      <DeleteBoard id="test-id" onClose={onClose} setId={setId} />,
      {
        repositories: {
          board: {
            deleteBoardById,
          },
        },
      },
    );

    deleteBoardById.mockRejectedValueOnce(new Error());

    const confirmCta = await screen.findByRole("button", { name: "Delete" });
    act(() => {
      fireEvent.click(confirmCta);
    });

    await waitFor(() => {
      expect(deleteBoardById).toHaveBeenCalledOnce();
    });

    // Close
    expect(onClose).toHaveBeenCalledOnce();

    // But keep the current id
    expect(setId).not.toHaveBeenCalledOnce();

    // And show message
    expect(notifications.show).toHaveBeenCalledOnce();
  });
});
