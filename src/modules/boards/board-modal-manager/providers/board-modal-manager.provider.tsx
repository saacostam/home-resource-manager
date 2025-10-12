import type { PropsWithChildren } from "react";
import { BoardModalManagerContext } from "./board-modal-manager.context";
import { BoardModalManager } from "../components";
import { useInfraBoardModalManagerService } from "./use-infra-board-modal-manager.service";

export function BoardModalManagerProvider({ children }: PropsWithChildren) {
  return (
    <BoardModalManagerContext.Provider
      value={useInfraBoardModalManagerService()}
    >
      {children}
      <BoardModalManager />
    </BoardModalManagerContext.Provider>
  );
}
