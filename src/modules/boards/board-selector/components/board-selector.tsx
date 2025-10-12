import { BoardModalManagerProvider } from "@/modules/boards/board-modal-manager";
import { BoardSelectorLoader } from "./board-selector-loader";

export function BoardSelector() {
  return (
    <BoardModalManagerProvider>
      <BoardSelectorLoader />
    </BoardModalManagerProvider>
  );
}
