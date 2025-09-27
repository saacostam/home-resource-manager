import { BoardProvider } from "../providers";
import { BoardSelectorLoader } from "./board-selector-loader";

export function BoardSelector() {
  return (
    <BoardProvider>
      <BoardSelectorLoader />
    </BoardProvider>
  );
}
