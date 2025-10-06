import { describe, expect, it, vi } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import type {
  IMutationUpdateBoardByIdIn,
  IQueryBoardByIdOut,
} from "@/modules/repositories/app";
import { renderWithProviders } from "@/test";
import { LeanBoardEditorLoader } from "./components";

const boardById: IQueryBoardByIdOut = {
  id: "test-id",
  name: "test-name",
  content: "test-content",
};

describe("LeanBoardEditorLoader", () => {
  it("should call update if content is updated", async () => {
    const updateBoardById = vi.fn();

    renderWithProviders(<LeanBoardEditorLoader id="test-id" />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryBoardById: async () => boardById,
          updateBoardById,
        },
      },
    });

    const field = await screen.findByRole("textbox");

    act(() => {
      fireEvent.input(field, {
        target: { innerHTML: "<p>Test typing</p>" },
      });
    });

    await waitFor(
      () => {
        const expectedIn: IMutationUpdateBoardByIdIn = {
          content: "<p>Test typing</p>",
          id: "test-id",
        };

        expect(updateBoardById).toHaveBeenCalled();
        expect(updateBoardById).toHaveBeenCalledWith(expectedIn);
      },
      { timeout: 1_000 },
    );
  });
});
