import { createContext, useContext } from "react";
import type { IAdapters } from "@/shared/adapters/core/domain";

export const AdaptersContext = createContext(null as unknown as IAdapters);

export function useAdapters() {
  return useContext(AdaptersContext);
}
