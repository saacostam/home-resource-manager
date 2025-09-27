import TaskItem from "@tiptap/extension-task-item";
import TipTapTaskList from "@tiptap/extension-task-list";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor, getTaskListExtension } from "@mantine/tiptap";
import type { TBoard } from "@/modules/boards/manage-board";
import { Divider, Flex, Space, Text, Title } from "@mantine/core";

export interface BoardEditorContentProps {
  board: TBoard;
  updateBoardContent: (content: string) => void;
  updateBoardName: (name: string) => void;
  isPending: boolean;
  onClickDelete: () => void;
}

export function BoardEditorContent({
  board,
  updateBoardContent,
  isPending,
  onClickDelete,
}: BoardEditorContentProps) {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: "test-item",
        },
      }),
    ],
    content: board.content,
    onUpdate: ({ editor }) => {
      updateBoardContent(editor.getHTML());
    },
  });

  const htmlContent = editor.getHTML();
  const hasUnsavedChanges = !!htmlContent && htmlContent !== board.content;

  return (
    <>
      <Divider mb="md" />
      <Title order={3} size="h3" ta="center">
        {board.name}
      </Title>
      <Space h="sm" />
      <RichTextEditor editor={editor} variant="subtle">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <Space h="xs" />
      <Flex gap="sm" justify="space-between">
        <button
          onClick={onClickDelete}
          style={{ all: "unset", cursor: "pointer" }}
        >
          <Text size="sm" c="violet" td="underline">
            Delete
          </Text>
        </button>
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
