import type {
  TGetAllCategoriesResponse,
  TGetAllResourcesResponse,
} from "@/modules/core.fetching-hooks";
import { ManageTaskForm } from "@/modules/manage-tasks/manage-task-form";
import { useCreateTask } from "../hooks";

export interface CreateTaskContentProps {
  categories: TGetAllCategoriesResponse;
  onClose: () => void;
  resources: TGetAllResourcesResponse;
}

export function CreateTaskContent({
  categories,
  onClose,
  resources,
}: CreateTaskContentProps) {
  const { form, isPending, onSubmit } = useCreateTask({
    onClose,
  });

  return (
    <ManageTaskForm
      action="Create"
      categories={categories}
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
      resources={resources}
    />
  );
}
