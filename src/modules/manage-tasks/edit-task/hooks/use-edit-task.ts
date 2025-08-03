import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import {
  type TGetAllCategoriesResponse,
  type TGetAllResourcesResponse,
  type TGetTaskByIdResponse,
  usePutUpdateTaskById,
} from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageTaskForm,
  useManageTaskForm,
} from "../../manage-task-form";

export interface UseEditTaskProps {
  id: string;
  categories: TGetAllCategoriesResponse;
  onClose: () => void;
  resources: TGetAllResourcesResponse;
  task: TGetTaskByIdResponse;
}

export function useEditTask({
  id,
  categories,
  onClose,
  resources,
  task,
}: UseEditTaskProps) {
  const form = useManageTaskForm({
    defaultValues: {
      name: task.name,
      description: task.description,
      resourcesIds: (task.resources ?? [])
        .filter(
          (linkedResource) =>
            !!resources.find((r) => r.id === linkedResource.id),
        )
        .map(({ id }) => id),
      categoryId:
        task.category?.id && categories.find((c) => c.id === task.category?.id)
          ? task.category.id
          : "",
      cadence: task.cadence,
      anchorDate: task.anchorDate,
    },
  });

  const { mutate, isPending } = usePutUpdateTaskById();

  const onSubmit = useCallback(
    (data: TManageTaskForm) => {
      mutate(
        {
          id,
          name: data.name,
          description: data.description === "" ? null : data.description,
          categoryId: data.categoryId,
          resourcesIds: data.resourcesIds,
          cadence: data.cadence,
          anchorDate: data.anchorDate,
        },
        {
          onSuccess: () => {
            onClose();
            notifications.show({
              color: "green",
              title: "Edited",
              message: "Task edited successfully",
            });
          },
          onError: (error) => {
            if (!isAxiosError(error)) {
              form.setError("root", { message: "Something went wrong!" });
              return;
            }

            handleApiErrors({
              axiosError: error,
              setError: form.setError,
            });
          },
        },
      );
    },
    [id, form, onClose, mutate],
  );

  return useMemo(
    () => ({ form, isPending, onSubmit }),
    [form, isPending, onSubmit],
  );
}
