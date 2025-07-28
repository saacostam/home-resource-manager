import { createContext } from "react";
import type { usePrivateResourcesTable } from "./use-resources-table";

export const ResourcesTableContext = createContext(
  null as unknown as ReturnType<typeof usePrivateResourcesTable>,
);
