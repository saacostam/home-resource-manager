import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { TestProviders } from "./test-providers";
import {
  MockRepositoryProvider,
  type MockRepositories,
} from "./mock-repository-provider";

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper"> & {
    initialEntries?: string[];
    repositories?: MockRepositories;
  },
) {
  const { initialEntries, repositories, ...renderOptions } = options ?? {};

  return render(ui, {
    wrapper: ({ children }) => (
      <TestProviders initialEntries={initialEntries}>
        <MockRepositoryProvider mock={repositories}>
          {children}
        </MockRepositoryProvider>
      </TestProviders>
    ),
    ...renderOptions,
  });
}
