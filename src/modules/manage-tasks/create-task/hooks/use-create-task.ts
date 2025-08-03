import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { usePostCreateTask } from "@/modules/core.fetching-hooks";
import { DateUtils } from "@/modules/date";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageTaskForm,
  useManageTaskForm,
} from "../../manage-task-form";

export interface UseCreateTaskProps {
  onClose: () => void;
}

export function useCreateTask({ onClose }: UseCreateTaskProps) {
  const form = useManageTaskForm({
    defaultValues: {
      name: "",
      description: "",
      categoryId: null,
      resourcesIds: [],
      anchorDate: DateUtils.today(),
      cadence: {
        type: "daily",
      },
    },
  });

  const { mutate, isPending } = usePostCreateTask();

  const onSubmit = useCallback(
    (data: TManageTaskForm) => {
      mutate(
        {
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
              title: "Created",
              message: "Task created successfully",
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
    [form, onClose, mutate],
  );

  return useMemo(
    () => ({
      form,
      isPending,
      onSubmit,
    }),
    [form, isPending, onSubmit],
  );
}
