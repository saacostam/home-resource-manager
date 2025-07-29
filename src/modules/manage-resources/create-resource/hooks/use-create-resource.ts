import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { usePostCreateResource } from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageResourceForm,
  useManageResourceForm,
} from "../../manage-resource-form";

export interface UseCreateResourceProps {
  onClose: () => void;
}

export function useCreateResource({ onClose }: UseCreateResourceProps) {
  const form = useManageResourceForm({
    defaultValues: {
      name: "",
      description: "",
      quantity: 0,
      categoryId: "",
    },
  });

  const { mutate, isPending } = usePostCreateResource();

  const onSubmit = useCallback(
    (data: TManageResourceForm) => {
      mutate(
        {
          name: data.name,
          description: data.description === "" ? null : data.description,
          quantity: data.quantity,
          categoryId: data.categoryId,
        },
        {
          onSuccess: () => {
            onClose();
            notifications.show({
              color: "green",
              title: "Created",
              message: "Category created successfully",
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
