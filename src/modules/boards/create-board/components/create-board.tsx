import { useCallback } from "react";
import { useBoardSelector } from "@/modules/boards/board-selector";
import {
  ManageBoardForm,
  useManageBoardForm,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { usePostCreateBoard } from "@/modules/core.fetching-hooks";

export interface CreateBoardProps {
  onClose: () => void;
}

export function CreateBoard({ onClose }: CreateBoardProps) {
  const { setId } = useBoardSelector();

  const form = useManageBoardForm({
    defaultValues: {
      name: "",
    },
  });

  const createBoard = usePostCreateBoard();

  const onSubmit = useCallback(
    (data: TManageBoardForm) => {
      createBoard.mutate(data, {
        onSuccess: (data) => {
          onClose();
          setId(data.id);
        },
      });
    },
    [createBoard, onClose, setId],
  );

  return (
    <ManageBoardForm
      action="Create"
      form={form}
      isPending={createBoard.isPending}
      onSubmit={onSubmit}
    />
  );
}
