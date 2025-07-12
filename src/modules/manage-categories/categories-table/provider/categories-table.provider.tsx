import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import type { TCategoriesTableMode } from "../types";

function usePrivateCategoriesTable() {
  const [mode, setMode] = useState<TCategoriesTableMode>({ type: "browse" });

  return useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode],
  );
}

const CategoriesTableContext = createContext(
  null as unknown as ReturnType<typeof usePrivateCategoriesTable>,
);

export function CategoriesTableProvider({ children }: PropsWithChildren) {
  return (
    <CategoriesTableContext.Provider value={usePrivateCategoriesTable()}>
      {children}
    </CategoriesTableContext.Provider>
  );
}

export function useCategoriesTable() {
  return useContext(CategoriesTableContext);
}
