import { ModalLoader, QueryError } from "@/modules/core.components";
import { useEditTaskLoader } from "../hooks";
import { EditTaskContent } from "./edit-task-content";

export interface EditTaskProps {
  id: string;
  onClose: () => void;
}

export function EditTask({ id, onClose }: EditTaskProps) {
  const { status, categories, resources, retry, task } = useEditTaskLoader({
    id,
  });

  if (status === "error")
    return (
      <QueryError
        title="Couldn't fetch task, categories and resources."
        retry={retry}
      />
    );

  if (status === "success")
    return (
      <EditTaskContent
        id={id}
        categories={categories}
        resources={resources}
        task={task}
        onClose={onClose}
      />
    );

  return <ModalLoader />;
}
