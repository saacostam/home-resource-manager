import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { usePostCreateCategory } from "@/shared/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageCategoryForm,
  useManageCategoryForm,
} from "../../manage-category-form";

export interface UseCreateCategoryProps {
  onClose: () => void;
}

export function useCreateCategory({ onClose }: UseCreateCategoryProps) {
  const form = useManageCategoryForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { mutate, isPending } = usePostCreateCategory();

  const onSubmit = useCallback(
    (data: TManageCategoryForm) => {
      mutate(
        {
          name: data.name,
          description: data.description === "" ? null : data.description,
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
