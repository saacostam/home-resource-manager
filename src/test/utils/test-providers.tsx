import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// ✅ A fresh QueryClient per test avoids cache bleed between tests
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // don't retry by default in tests
      },
    },
  });

interface ProvidersProps {
  children: ReactNode;
  initialEntries?: string[]; // optional initial routes
}

export function TestProviders({
  children,
  initialEntries = ["/"],
}: ProvidersProps) {
  const queryClient = createTestQueryClient();

  return (
    <MantineProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MemoryRouter>
    </MantineProvider>
  );
}
