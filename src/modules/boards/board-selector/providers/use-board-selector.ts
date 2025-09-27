import { useContext, useMemo, useState } from "react";
import { BoardContext } from "./board.context";
import type { TBoardSelectorMode } from "../types";

export function usePrivateBoardSelector() {
  const [id, setId] = useState<string | null>(null);
  const [mode, setMode] = useState<TBoardSelectorMode>({
    type: "browse",
  });

  return useMemo(
    () => ({
      id,
      mode,
      setMode,
      setId,
    }),
    [id, mode],
  );
}

export function useBoardSelector() {
  return useContext(BoardContext);
}
