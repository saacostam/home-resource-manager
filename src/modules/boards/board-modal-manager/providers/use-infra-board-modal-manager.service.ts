import { useMemo, useState } from "react";
import type { TBoardModalManagerService, TBoardModalMode } from "../types";

export function useInfraBoardModalManagerService(): TBoardModalManagerService {
  const [id, setId] = useState<string | null>(null);
  const [mode, setMode] = useState<TBoardModalMode>({
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
