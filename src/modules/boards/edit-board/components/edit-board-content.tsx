import { ManageBoardForm, type TBoard } from "@/modules/boards/manage-board";
import { useEditBoard } from "../hooks";

export interface EditBoardContentProps {
  board: TBoard;
  onClose: () => void;
}

export function EditBoardContent({ board, onClose }: EditBoardContentProps) {
  const { form, isPending, onSubmit } = useEditBoard({ board, onClose });

  return (
    <ManageBoardForm
      action="Update"
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
