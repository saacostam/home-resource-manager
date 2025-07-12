import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usePostCreateCategory } from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import { notifications } from "@mantine/notifications";

const createCategorySchema = z.object({
  name: z.string().min(1).max(24),
  description: z.string().max(255).nullable(),
});

export interface UseCreateCategoryProps {
  onClose: () => void;
}

export function useCreateCategory({ onClose }: UseCreateCategoryProps) {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: zodResolver(createCategorySchema),
  });

  const { mutate, isPending } = usePostCreateCategory();

  const onSubmit = useCallback(
    (data: ReturnType<typeof createCategorySchema.parse>) => {
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
