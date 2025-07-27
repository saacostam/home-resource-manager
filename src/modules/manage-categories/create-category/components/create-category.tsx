import { ManageCategoryForm } from "../../manage-category-form";
import { useCreateCategory } from "../hooks";

export interface CreateCategoryProps {
  onClose: () => void;
}

export function CreateCategory({ onClose }: CreateCategoryProps) {
  const { form, isPending, onSubmit } = useCreateCategory({ onClose });

  return (
    <ManageCategoryForm
      action="Create"
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
