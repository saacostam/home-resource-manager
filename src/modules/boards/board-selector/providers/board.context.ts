import { createContext } from "react";
import type { usePrivateBoardSelector } from "./use-board-selector";

export const BoardContext = createContext(
  null as unknown as ReturnType<typeof usePrivateBoardSelector>,
);
