import type { ReactNode } from "react";
import {
  type IRepositories,
  RepositoryContext,
} from "@/modules/repositories/app";

export type MockRepositories = {
  [K in keyof IRepositories]?: Partial<IRepositories[K]>;
};

interface RepositoryProviderProps {
  children: ReactNode;
  mock?: MockRepositories;
}

export function MockRepositoryProvider({
  children,
  mock,
}: RepositoryProviderProps) {
  // Provide only the mock repos, nothing else
  const value = mock as IRepositories;
  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
}
