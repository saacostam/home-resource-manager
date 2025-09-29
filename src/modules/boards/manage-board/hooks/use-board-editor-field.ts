import { useMemo, useRef } from "react";
import TaskItem from "@tiptap/extension-task-item";
import TipTapTaskList from "@tiptap/extension-task-list";
import { useEditor, type UseEditorOptions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { getTaskListExtension } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import { notifications } from "@mantine/notifications";

export interface UseBoardEditorFieldArgs {
  defaultContent: string;
  onUpdate: UseEditorOptions["onUpdate"];
}

const MAX_LENGTH = 10_000;

export function useBoardEditorField({
  defaultContent,
  onUpdate,
}: UseBoardEditorFieldArgs) {
  // Ref to store the previous valid HTML content
  const prevContentRef = useRef(defaultContent);

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
      Placeholder.configure({
        placeholder: "Type something to start your board…",
      }),
    ],
    content: defaultContent,
    onUpdate: (content) => {
      const html = editor.getHTML();

      if (html.length > MAX_LENGTH) {
        editor.commands.setContent(prevContentRef.current);

        notifications.show({
          id: "editor-limit",
          color: "yellow",
          message: `Content exceeds the maximum allowed length.`,
        });

        return;
      }

      // Store current content as the last valid content
      prevContentRef.current = html;

      // Call external update handler
      onUpdate?.(content);
    },
  });

  return useMemo(() => ({ editor }), [editor]);
}
