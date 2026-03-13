import { useContext } from "react";
import { RepositoryContext } from "./repositories.context";

export function useRepositories() {
  return useContext(RepositoryContext);
}
