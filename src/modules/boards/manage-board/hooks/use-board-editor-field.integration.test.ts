import { describe, expect, it, vi } from "vitest";
import { notifications } from "@mantine/notifications";
import { waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import { renderHookWithProviders } from "@/test";
import { useBoardEditorField } from "./use-board-editor-field";

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: vi.fn(),
  },
}));

describe("useBoardEditorField", () => {
  it("should call onUpdate handler", async () => {
    const onUpdate = vi.fn();

    const { result } = renderHookWithProviders(() =>
      useBoardEditorField({ defaultContent: "", onUpdate: onUpdate }),
    );

    act(() => {
      result.current.editor.commands.insertContent("value");
    });

    await waitFor(() => {
      expect(onUpdate).toHaveBeenCalledOnce();
      expect(notifications.show).not.toHaveBeenCalled();
    });
  });

  it("should notify if 10_000 chars are exceeded", async () => {
    const onUpdate = vi.fn();

    const { result } = renderHookWithProviders(() =>
      useBoardEditorField({
        defaultContent: "original-content",
        onUpdate: onUpdate,
      }),
    );

    act(() => {
      result.current.editor.commands.insertContent("0".repeat(10_000 + 1));
    });

    await waitFor(() => {
      expect(onUpdate).toHaveBeenCalled();
      expect(notifications.show).toHaveBeenCalled();
    });
  });
});
