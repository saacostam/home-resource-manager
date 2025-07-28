import { createContext } from "react";
import type { usePrivateCategoriesTable } from "./use-categories-table";

export const CategoriesTableContext = createContext(
  null as unknown as ReturnType<typeof usePrivateCategoriesTable>,
);
