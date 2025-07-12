import { ConfirmationModal } from "@/modules/core.components";
import { useDeleteCategory } from "../hooks";

export interface DeleteCategoryProps {
  id: string;
  onClose: () => void;
}

export function DeleteCategory({ id, onClose }: DeleteCategoryProps) {
  const { isPending, onCancel, onDelete } = useDeleteCategory({ id, onClose });

  return (
    <ConfirmationModal
      isCancelationPrimary
      isPending={isPending}
      mainLabel="Delete"
      onCancel={onCancel}
      onClickMain={onDelete}
      verb="delete this category"
    />
  );
}
