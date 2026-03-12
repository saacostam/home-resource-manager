import {
  render,
  renderHook,
  type RenderHookOptions,
} from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { TestProviders } from "./test-providers";
import {
  MockProvider,
  type MockAdapters,
  type MockRepositories,
} from "./mock-repository-provider";

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper"> & {
    initialEntries?: string[];
    repositories?: MockRepositories;
    adapters?: MockAdapters;
  },
) {
  const { initialEntries, repositories, adapters, ...renderOptions } =
    options ?? {};

  return render(ui, {
    wrapper: ({ children }) => (
      <TestProviders initialEntries={initialEntries}>
        <MockProvider mockRepositories={repositories} mockAdapters={adapters}>
          {children}
        </MockProvider>
      </TestProviders>
    ),
    ...renderOptions,
  });
}

export function renderHookWithProviders<Result, Props>(
  callback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, "wrapper"> & {
    initialEntries?: string[];
    repositories?: MockRepositories;
    adapters?: MockAdapters;
  },
) {
  const { initialEntries, repositories, adapters, ...renderOptions } =
    options ?? {};

  return renderHook(callback, {
    wrapper: ({ children }) => (
      <TestProviders initialEntries={initialEntries}>
        <MockProvider mockRepositories={repositories} mockAdapters={adapters}>
          {children}
        </MockProvider>
      </TestProviders>
    ),
    ...renderOptions,
  });
}
