import { QueryError } from "@/modules/core.components";
import { LeanBoardSelectorContent } from "./lean-board-selector-content";
import { LeanBoardSelectorSkeleton } from "./lean-board-selector-skeleton";
import { useLeanBoardSelectorLoader } from "../hooks";

export function LeanBoardSelectorLoader() {
  const { status, data, retry } = useLeanBoardSelectorLoader();

  if (status === "error")
    return <QueryError title="Couldn't fetch boards." retry={retry} />;
  if (status === "success") return <LeanBoardSelectorContent boards={data} />;

  return <LeanBoardSelectorSkeleton />;
}
