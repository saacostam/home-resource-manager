import { useCallback, useMemo } from "react";
import {
  useManageBoardForm,
  type TBoard,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { usePutUpdateBoardById } from "@/modules/core.fetching-hooks";

export interface UseEditBoardArgs {
  board: TBoard;
  onClose: () => void;
}

export function useEditBoard({ board, onClose }: UseEditBoardArgs) {
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

  return useMemo(
    () => ({
      form,
      isPending: updateBoard.isPending,
      onSubmit,
    }),
    [form, updateBoard.isPending, onSubmit],
  );
}
