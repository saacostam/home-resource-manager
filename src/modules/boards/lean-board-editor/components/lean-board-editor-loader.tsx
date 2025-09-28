import { QueryError } from "@/modules/core.components";
import { LeanBoardEditorContent } from "./lean-board-editor-content";
import { LeanBoardEditorSkeleton } from "./lean-board-editor-skeleton";
import { useLeanBoardEditorLoader } from "../hooks";

export interface LeanBoardEditorLoaderProps {
  id: string;
}

export function LeanBoardEditorLoader({ id }: LeanBoardEditorLoaderProps) {
  const { status, data, retry, updateBoardContent, isPending } =
    useLeanBoardEditorLoader({ id });

  if (status === "error")
    <QueryError title="Couldn't fetch board." retry={retry} />;
  if (status === "success")
    return (
      <LeanBoardEditorContent
        board={data}
        updateBoardContent={updateBoardContent}
        isPending={isPending}
      />
    );

  return <LeanBoardEditorSkeleton />;
}
