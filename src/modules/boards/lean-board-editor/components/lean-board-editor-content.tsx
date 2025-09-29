import {
  BoardEditorField,
  useBoardEditorField,
  type TBoard,
} from "@/modules/boards/manage-board";

export interface LeanBoardEditorContentProps {
  board: TBoard;
  updateBoardContent: (content: string) => void;
}

export function LeanBoardEditorContent({
  board,
  updateBoardContent,
}: LeanBoardEditorContentProps) {
  const { editor } = useBoardEditorField({
    defaultContent: board.content,
    onUpdate: ({ editor }) => {
      updateBoardContent(editor.getHTML());
    },
  });

  return (
    <>
      <BoardEditorField editor={editor} />
    </>
  );
}
