import type { TGetCategoryByIdResponse } from "@/modules/core.fetching-hooks";
import { ManageCategoryForm } from "../../manage-category-form";
import { useEditCategory } from "../hooks";

export interface EditCategoryContentProps {
  onClose: () => void;
  category: TGetCategoryByIdResponse;
}

export function EditCategoryContent({
  onClose,
  category,
}: EditCategoryContentProps) {
  const { form, isPending, onSubmit } = useEditCategory({
    id: category.id,
    defaultValues: {
      name: category.name,
      description: category.description,
    },
    onClose,
  });

  return (
    <ManageCategoryForm
      action="Edit"
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
