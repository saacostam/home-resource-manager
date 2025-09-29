import { useMemo, type PropsWithChildren } from "react";
import { useAuth } from "@/modules/auth";
import { RepositoryContext } from "./repositories.context";
import type { IRepositories } from "../types";
import { TimezoneRepository } from "../../infra";

export function RepositoriesProvider({ children }: PropsWithChildren) {
  const { fetch } = useAuth();

  const repositories: IRepositories = useMemo(
    () => ({
      timezone: new TimezoneRepository(fetch),
    }),
    [fetch],
  );

  return (
    <RepositoryContext.Provider value={repositories}>
      {children}
    </RepositoryContext.Provider>
  );
}
