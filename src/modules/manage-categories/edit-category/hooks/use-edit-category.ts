import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { usePutUpdateCategoryById } from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageCategoryForm,
  useManageCategoryForm,
} from "../../manage-category-form";

export interface UseEditCategoryProps {
  id: string;
  defaultValues: TManageCategoryForm;
  onClose: () => void;
}

export function useEditCategory({
  id,
  defaultValues,
  onClose,
}: UseEditCategoryProps) {
  const form = useManageCategoryForm({
    defaultValues,
  });

  const { mutate, isPending } = usePutUpdateCategoryById();

  const onSubmit = useCallback(
    (data: TManageCategoryForm) => {
      mutate(
        {
          id,
          name: data.name,
          description: data.description === "" ? null : data.description,
        },
        {
          onSuccess: () => {
            onClose();
            notifications.show({
              color: "green",
              title: "Edited",
              message: "Category edited successfully",
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
    () => ({
      form,
      isPending,
      onSubmit,
    }),
    [form, isPending, onSubmit],
  );
}
