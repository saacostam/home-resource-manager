import type { PropsWithChildren } from "react";
import { CategoriesTableContext } from "./categories-table.context";
import { usePrivateCategoriesTable } from "./use-categories-table";

export function CategoriesTableProvider({ children }: PropsWithChildren) {
  return (
    <CategoriesTableContext.Provider value={usePrivateCategoriesTable()}>
      {children}
    </CategoriesTableContext.Provider>
  );
}
