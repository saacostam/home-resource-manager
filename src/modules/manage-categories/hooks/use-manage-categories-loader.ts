import { useCallback, useMemo } from "react";
import { useGetAllCategories } from "@/modules/core.fetching-hooks";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostCreateCategory } from "../fetching";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(24),
  description: z.string().max(255).optional(),
});

export function useManageCategoriesLoader() {
  const [isOpen, { open, close }] = useDisclosure(false);

  const categories = useGetAllCategories();
  const createCategory = usePostCreateCategory();

  const newCategoryForm = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmitNewCategoryForm = useCallback(
    (data: ReturnType<typeof schema.parse>) => {
      createCategory.mutate(
        {
          ...data,
        },
        {
          onSuccess: () => {
            close();
            newCategoryForm.reset();
          },
        },
      );
    },
    [close, createCategory, newCategoryForm],
  );

  return useMemo(
    () =>
      categories.isLoading
        ? {
            status: "loading" as const,
          }
        : categories.isSuccess
          ? {
              status: "success" as const,
              categories: categories.data,
              closeForm: close,
              isFormOpen: isOpen,
              openForm: open,
              onSubmitNewCategoryForm,
              newCategoryForm,
              newCategoryIsLoading: createCategory.isPending,
            }
          : {
              status: "error" as const,
            },
    [
      categories.data,
      categories.isLoading,
      categories.isSuccess,
      close,
      createCategory.isPending,
      isOpen,
      open,
      onSubmitNewCategoryForm,
      newCategoryForm,
    ],
  );
}
