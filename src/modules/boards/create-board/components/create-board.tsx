import type { TBoardModalManagerService } from "@/modules/boards/board-modal-manager";
import { ManageBoardForm } from "@/modules/boards/manage-board";
import { useCreateBoard } from "../hooks";

export interface CreateBoardProps {
  onClose: () => void;
  setId: TBoardModalManagerService["setId"];
}

export function CreateBoard({ onClose, setId }: CreateBoardProps) {
  const { form, isPending, onSubmit } = useCreateBoard({ onClose, setId });

  return (
    <ManageBoardForm
      action="Create"
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
