import { ModalLoader, QueryError } from "@/modules/core.components";
import { useCreateTaskLoader } from "../hooks";
import { CreateTaskContent } from "./create-task-content";

export interface CreateTaskProps {
  onClose: () => void;
}

export function CreateTask({ onClose }: CreateTaskProps) {
  const { status, categories, resources, retry } = useCreateTaskLoader();

  if (status === "error")
    return (
      <QueryError
        title="Couldn't fetch your categories or resources."
        retry={retry}
      />
    );

  if (status === "success")
    return (
      <CreateTaskContent
        categories={categories}
        onClose={onClose}
        resources={resources}
      />
    );

  return <ModalLoader />;
}
