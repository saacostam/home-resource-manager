import { createContext } from "react";
import type { IRepositories } from "../types";

export const RepositoryContext = createContext(
  null as unknown as IRepositories,
);
