import { ConfirmationModal } from "@/modules/core.components";
import { useDeleteResource } from "../hooks";

export interface DeleteResourceProps {
  id: string;
  onClose: () => void;
}

export function DeleteResource({ id, onClose }: DeleteResourceProps) {
  const { isPending, onCancel, onDelete } = useDeleteResource({ id, onClose });

  return (
    <ConfirmationModal
      isCancelationPrimary
      isPending={isPending}
      mainLabel="Delete"
      onCancel={onCancel}
      onClickMain={onDelete}
      verb="delete this resource"
    />
  );
}
