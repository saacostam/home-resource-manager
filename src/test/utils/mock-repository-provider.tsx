import type { ReactNode } from "react";
import {
  type IRepositories,
  RepositoryContext,
} from "@/shared/repositories/app";
import type { IAdapters } from "@/shared/adapters/core/domain";
import { AdaptersContext } from "@/shared/adapters/core/app";

export type MockRepositories = {
  [K in keyof IRepositories]?: Partial<IRepositories[K]>;
};

export type MockAdapters = {
  [K in keyof IAdapters]?: Partial<IAdapters[K]>;
};

interface RepositoryProviderProps {
  children: ReactNode;
  mockRepositories?: MockRepositories;
  mockAdapters?: MockAdapters;
}

export function MockProvider({
  children,
  mockRepositories,
  mockAdapters,
}: RepositoryProviderProps) {
  // Provide only the mock repos, nothing else
  const repoes = mockRepositories as IRepositories;
  const adapts = mockAdapters as IAdapters;

  return (
    <AdaptersContext.Provider value={adapts}>
      <RepositoryContext.Provider value={repoes}>
        {children}
      </RepositoryContext.Provider>
    </AdaptersContext.Provider>
  );
}
