import { useContext, useMemo, useState } from "react";
import type { TCategoriesTableMode } from "../types";
import { CategoriesTableContext } from "./categories-table.context";

export function usePrivateCategoriesTable() {
  const [mode, setMode] = useState<TCategoriesTableMode>({ type: "browse" });

  return useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode],
  );
}

export function useCategoriesTable() {
  return useContext(CategoriesTableContext);
}
