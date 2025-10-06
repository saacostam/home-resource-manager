import { ConfirmationModal } from "@/modules/core.components";
import type { useBoardSelector } from "@/modules/boards/board-selector";
import { useDeleteBoard } from "../hooks";

export interface DeleteBoardProps {
  id: string;
  onClose: () => void;
  setId: ReturnType<typeof useBoardSelector>["setId"];
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
