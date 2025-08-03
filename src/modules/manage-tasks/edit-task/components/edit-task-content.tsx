import type {
  TGetAllCategoriesResponse,
  TGetAllResourcesResponse,
  TGetTaskByIdResponse,
} from "@/modules/core.fetching-hooks";
import { ManageTaskForm } from "@/modules/manage-tasks/manage-task-form";
import { useEditTask } from "../hooks";

export interface EditTaskContentProps {
  id: string;
  categories: TGetAllCategoriesResponse;
  resources: TGetAllResourcesResponse;
  task: TGetTaskByIdResponse;
  onClose: () => void;
}

export function EditTaskContent({
  id,
  categories,
  resources,
  task,
  onClose,
}: EditTaskContentProps) {
  const { form, isPending, onSubmit } = useEditTask({
    id,
    categories,
    resources,
    task,
    onClose,
  });

  return (
    <ManageTaskForm
      action="Edit"
      categories={categories}
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
      resources={resources}
    />
  );
}
