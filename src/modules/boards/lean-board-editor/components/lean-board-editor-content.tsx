import {
  BoardEditorField,
  useBoardEditorField,
  type TBoard,
} from "@/modules/boards/manage-board";
import { Space, Text } from "@mantine/core";

export interface LeanBoardEditorContentProps {
  board: TBoard;
  isPending: boolean;
  updateBoardContent: (content: string) => void;
}

export function LeanBoardEditorContent({
  board,
  isPending,
  updateBoardContent,
}: LeanBoardEditorContentProps) {
  const { editor } = useBoardEditorField({
    defaultContent: board.content,
    onUpdate: ({ editor }) => {
      updateBoardContent(editor.getHTML());
    },
  });

  const htmlContent = editor.getHTML();
  const hasUnsavedChanges = !!htmlContent && htmlContent !== board.content;

  return (
    <>
      <BoardEditorField editor={editor} />
      <Space h="xs" />
      <Text size="xs" c={isPending ? "violet" : "gray"} ta="end">
        {isPending
          ? "Saving..."
          : hasUnsavedChanges
            ? "Unsaved Changes"
            : "Saved"}
      </Text>
    </>
  );
}
