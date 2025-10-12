import { createContext } from "react";
import type { TBoardModalManagerService } from "../types";

export const BoardModalManagerContext = createContext(
  null as unknown as TBoardModalManagerService,
);
