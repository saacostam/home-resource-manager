import { ConfirmationModal } from "@/modules/core.components";
import type { TBoardModalManagerService } from "@/modules/boards/board-modal-manager";
import { useDeleteBoard } from "../hooks";

export interface DeleteBoardProps {
  id: string;
  onClose: () => void;
  setId: TBoardModalManagerService["setId"];
}

export function DeleteBoard({ id, onClose, setId }: DeleteBoardProps) {
  const { onDelete, isPending } = useDeleteBoard({ id, onClose, setId });

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
