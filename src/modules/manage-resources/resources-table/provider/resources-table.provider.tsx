import type { PropsWithChildren } from "react";
import { ResourcesTableContext } from "./resources-table.context";
import { usePrivateResourcesTable } from "./use-resources-table";

export function ResourcesTableProvider({ children }: PropsWithChildren) {
  return (
    <ResourcesTableContext.Provider value={usePrivateResourcesTable()}>
      {children}
    </ResourcesTableContext.Provider>
  );
}
