import {
  ManageBoardForm,
  useManageBoardForm,
  type TBoard,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { usePutUpdateBoardById } from "@/modules/core.fetching-hooks";
import { useCallback } from "react";

export interface EditBoardContentProps {
  board: TBoard;
  onClose: () => void;
}

export function EditBoardContent({ board, onClose }: EditBoardContentProps) {
  const form = useManageBoardForm({
    defaultValues: {
      name: board.name,
    },
  });

  const updateBoard = usePutUpdateBoardById();

  const onSubmit = useCallback(
    (data: TManageBoardForm) => {
      updateBoard.mutate(
        { id: board.id, name: data.name },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    },
    [board.id, updateBoard, onClose],
  );

  return (
    <ManageBoardForm
      action="Update"
      form={form}
      isPending={updateBoard.isPending}
      onSubmit={onSubmit}
    />
  );
}
