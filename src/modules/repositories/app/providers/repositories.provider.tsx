import { useMemo, type PropsWithChildren } from "react";
import { useAuth } from "@/modules/auth";
import { RepositoryContext } from "./repositories.context";
import type { IRepositories } from "../types";
import {
  AuthRepository,
  TimezoneRepository,
  UserRepository,
} from "../../infra";

export function RepositoriesProvider({ children }: PropsWithChildren) {
  const { fetch } = useAuth();

  const repositories: IRepositories = useMemo(
    () => ({
      auth: new AuthRepository(fetch),
      timezone: new TimezoneRepository(fetch),
      user: new UserRepository(fetch),
    }),
    [fetch],
  );

  return (
    <RepositoryContext.Provider value={repositories}>
      {children}
    </RepositoryContext.Provider>
  );
}
