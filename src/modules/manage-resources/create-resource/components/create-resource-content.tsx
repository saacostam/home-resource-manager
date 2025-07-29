import type { TGetAllCategoriesResponse } from "@/modules/core.fetching-hooks";
import { ManageResourceForm } from "@/modules/manage-resources/manage-resource-form";
import { useCreateResource } from "../hooks";

export interface CreateResourceContentProps {
  categories: TGetAllCategoriesResponse;
  onClose: () => void;
}

export function CreateResourceContent({
  categories,
  onClose,
}: CreateResourceContentProps) {
  const { form, isPending, onSubmit } = useCreateResource({ onClose });

  return (
    <ManageResourceForm
      action="Create"
      categories={categories}
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
