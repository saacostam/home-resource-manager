import { useContext, useMemo, useState } from "react";
import type { TResourcesTableMode } from "../types";
import { ResourcesTableContext } from "./resources-table.context";

export function usePrivateResourcesTable() {
  const [mode, setMode] = useState<TResourcesTableMode>({ type: "browse" });

  return useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode],
  );
}

export function useResourcesTable() {
  return useContext(ResourcesTableContext);
}
