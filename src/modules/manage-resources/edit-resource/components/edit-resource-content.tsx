import type {
  TGetAllCategoriesResponse,
  TGetResourceByIdResponse,
} from "@/modules/core.fetching-hooks";
import { ManageResourceForm } from "@/modules/manage-resources/manage-resource-form";
import { useEditResource } from "../hooks";

export interface EditResourceContentProps {
  id: string;
  categories: TGetAllCategoriesResponse;
  resource: TGetResourceByIdResponse;
  onClose: () => void;
}

export function EditResourceContent({
  id,
  categories,
  resource,
  onClose,
}: EditResourceContentProps) {
  const { form, isPending, onSubmit } = useEditResource({
    id,
    categories,
    onClose,
    resource,
  });

  return (
    <ManageResourceForm
      action="Edit"
      categories={categories}
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
