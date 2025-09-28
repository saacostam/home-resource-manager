import {
  BoardEditorField,
  useBoardEditorField,
  type TBoard,
} from "@/modules/boards/manage-board";
import { Divider, Flex, Space, Text } from "@mantine/core";

export interface BoardEditorContentProps {
  board: TBoard;
  updateBoardContent: (content: string) => void;
  isPending: boolean;
  onClickDelete: () => void;
  onClickEditName: () => void;
}

export function BoardEditorContent({
  board,
  updateBoardContent,
  isPending,
  onClickDelete,
  onClickEditName,
}: BoardEditorContentProps) {
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
      <Divider mb="md" />
      <BoardEditorField editor={editor} />
      <Space h="xs" />
      <Flex gap="sm" justify="space-between">
        <Flex gap="sm">
          <button
            onClick={onClickDelete}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Text size="sm" c="violet" td="underline">
              Delete
            </Text>
          </button>
          <button
            onClick={onClickEditName}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Text size="sm" c="violet" td="underline">
              Edit Name
            </Text>
          </button>
        </Flex>
        <Text size="xs" c={isPending ? "violet" : "gray"}>
          {isPending
            ? "Saving..."
            : hasUnsavedChanges
              ? "Unsaved Changes"
              : "Saved"}
        </Text>
      </Flex>
    </>
  );
}
