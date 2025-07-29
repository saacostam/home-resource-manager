import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import {
  type TGetAllCategoriesResponse,
  type TGetResourceByIdResponse,
  usePutUpdateResourceById,
} from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import {
  type TManageResourceForm,
  useManageResourceForm,
} from "../../manage-resource-form";

export interface UseEditResourceProps {
  id: string;
  categories: TGetAllCategoriesResponse;
  onClose: () => void;
  resource: TGetResourceByIdResponse;
}

export function useEditResource({
  id,
  categories,
  onClose,
  resource,
}: UseEditResourceProps) {
  const form = useManageResourceForm({
    defaultValues: {
      name: resource.name,
      description: resource.description,
      quantity: resource.quantity,
      categoryId: categories.find((c) => c.id === resource.categoryId)
        ? resource.categoryId
        : "",
    },
  });

  const { mutate, isPending } = usePutUpdateResourceById();

  const onSubmit = useCallback(
    (data: TManageResourceForm) => {
      mutate(
        {
          id,
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
              title: "Edited",
              message: "Resource edited successfully",
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
