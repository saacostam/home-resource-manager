import { useForm, type FieldError } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import { renderHookWithProviders, renderWithProviders } from "@/test";
import {
  ManageBoardForm,
  type ManageBoardFormProps,
} from "./manage-board-form";

describe("ManageBoardForm", () => {
  const createForm = (args?: {
    name?: string;
    errors?: {
      root?: string;
    };
  }): ManageBoardFormProps["form"] => {
    const { result } = renderHookWithProviders(() =>
      useForm({
        defaultValues: { name: args?.name ?? "" },
        errors: args?.errors?.root
          ? {
              root: {
                type: "value",
                message: args.errors.root,
              } as FieldError,
            }
          : undefined,
      }),
    );

    return result.current;
  };

  it("renders root form message", async () => {
    const form = createForm({ errors: { root: "test-root-error" } });

    renderWithProviders(
      <ManageBoardForm
        form={form}
        isPending={false}
        action="Test"
        onSubmit={() => {
          /* do nothing */
        }}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText("test-root-error")).toBeDefined();
    });
  });

  it("renders action copy", () => {
    const form = createForm();

    renderWithProviders(
      <ManageBoardForm
        form={form}
        isPending={false}
        action="Test-Action"
        onSubmit={() => {
          /* do nothing */
        }}
      />,
    );

    const cta = screen.getByText("Test-Action Board");
    expect(cta).toBeDefined();
  });

  it("cta submits form", async () => {
    const form = createForm();
    const onSubmit = vi.fn();

    renderWithProviders(
      <ManageBoardForm
        form={form}
        isPending={false}
        action="Create"
        onSubmit={onSubmit}
      />,
    );

    const cta = screen.getByText("Create Board");
    act(() => {
      cta.click();
    });

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
