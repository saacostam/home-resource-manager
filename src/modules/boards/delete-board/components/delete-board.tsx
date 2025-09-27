import { ConfirmationModal } from "@/modules/core.components";
import { useDeleteBoard } from "../hooks";

export interface DeleteBoardProps {
  id: string;
  onClose: () => void;
}

export function DeleteBoard({ id, onClose }: DeleteBoardProps) {
  const { onDelete, isPending } = useDeleteBoard({ id, onClose });

  return (
    <ConfirmationModal
      isCancelationPrimary
      isPending={isPending}
      mainLabel="Delete"
      onCancel={onClose}
      onClickMain={onDelete}
      verb="delete this board"
    />
  );
}
