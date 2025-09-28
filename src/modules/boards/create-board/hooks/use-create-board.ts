import { useCallback, useMemo } from "react";
import { useBoardSelector } from "@/modules/boards/board-selector";
import {
  useManageBoardForm,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { usePostCreateBoard } from "@/modules/core.fetching-hooks";

export interface UseCreateBoardArgs {
  onClose: () => void;
}

export function useCreateBoard({ onClose }: UseCreateBoardArgs) {
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

  return useMemo(
    () => ({
      form,
      onSubmit,
      isPending: createBoard.isPending,
    }),
    [createBoard.isPending, form, onSubmit],
  );
}
