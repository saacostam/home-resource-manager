import { ConfirmationModal } from "@/modules/core.components";
import { useDeleteTask } from "../hooks";

export interface DeleteTaskProps {
  id: string;
  onClose: () => void;
}

export function DeleteTask({ id, onClose }: DeleteTaskProps) {
  const { isPending, onCancel, onDelete } = useDeleteTask({
    id,
    onClose,
  });

  return (
    <ConfirmationModal
      isCancelationPrimary
      isPending={isPending}
      mainLabel="Delete"
      onCancel={onCancel}
      onClickMain={onDelete}
      verb="delete this task"
    />
  );
}
