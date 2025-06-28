import { createContext } from "react";
import type { usePrivateAuth } from "./use-private-auth";

export const authContext = createContext(
  null as unknown as ReturnType<typeof usePrivateAuth>,
);
