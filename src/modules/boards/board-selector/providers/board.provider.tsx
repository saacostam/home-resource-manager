import type { PropsWithChildren } from "react";
import { BoardContext } from "./board.context";
import { usePrivateBoardSelector } from "./use-board-selector";

export function BoardProvider({ children }: PropsWithChildren) {
  return (
    <BoardContext.Provider value={usePrivateBoardSelector()}>
      {children}
    </BoardContext.Provider>
  );
}
