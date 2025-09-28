import { ManageBoardForm } from "@/modules/boards/manage-board";
import { useCreateBoard } from "../hooks";

export interface CreateBoardProps {
  onClose: () => void;
}

export function CreateBoard({ onClose }: CreateBoardProps) {
  const { form, isPending, onSubmit } = useCreateBoard({ onClose });

  return (
    <ManageBoardForm
      action="Create"
      form={form}
      isPending={isPending}
      onSubmit={onSubmit}
    />
  );
}
