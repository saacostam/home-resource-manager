import { useContext } from "react";
import { BoardModalManagerContext } from "./board-modal-manager.context";

export function useBoardModalManagerService() {
  return useContext(BoardModalManagerContext);
}
