import { useMemo } from "react";
import TaskItem from "@tiptap/extension-task-item";
import TipTapTaskList from "@tiptap/extension-task-list";
import { useEditor, type UseEditorOptions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { getTaskListExtension } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";

export interface UseBoardEditorFieldArgs {
  defaultContent: string;
  onUpdate: UseEditorOptions["onUpdate"];
}

export function useBoardEditorField({
  defaultContent,
  onUpdate,
}: UseBoardEditorFieldArgs) {
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
    onUpdate: onUpdate,
  });

  return useMemo(() => ({ editor }), [editor]);
}
