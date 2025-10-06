import type { useBoardSelector } from "@/modules/boards/board-selector";
import { ManageBoardForm } from "@/modules/boards/manage-board";
import { useCreateBoard } from "../hooks";

export interface CreateBoardProps {
  onClose: () => void;
  setId: ReturnType<typeof useBoardSelector>["setId"];
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
