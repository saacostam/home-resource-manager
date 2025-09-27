import { QueryError } from "@/modules/core.components";
import { BoardEditorSkeleton } from "./board-editor-skeleton";
import { BoardEditorContent } from "./board-editor-content";
import { useBoardEditorLoader } from "../hooks";

export interface BoardEditorLoaderProps {
  id: string;
}

export function BoardEditorLoader({ id }: BoardEditorLoaderProps) {
  const {
    status,
    data,
    retry,
    updateBoardContent,
    updateBoardName,
    onClickDelete,
    isPending,
  } = useBoardEditorLoader({ id });

  if (status === "error")
    return <QueryError title="Couldn't fetch board." retry={retry} />;

  if (status === "success")
    return (
      <BoardEditorContent
        isPending={isPending}
        board={data}
        updateBoardContent={updateBoardContent}
        updateBoardName={updateBoardName}
        onClickDelete={onClickDelete}
      />
    );

  return <BoardEditorSkeleton />;
}
