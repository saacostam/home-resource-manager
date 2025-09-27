import { useDeleteBoardById } from "@/modules/core.fetching-hooks";
import { useCallback, useMemo } from "react";
import { useBoardSelector } from "@/modules/boards/board-selector";

export interface UseDeleteBoardArgs {
  id: string;
  onClose: () => void;
}

export function useDeleteBoard({ id, onClose }: UseDeleteBoardArgs) {
  const { setId } = useBoardSelector();

  const deleteBoard = useDeleteBoardById();

  const onDelete = useCallback(() => {
    deleteBoard.mutate(
      { id },
      {
        onSuccess: () => {
          onClose();
          setId(null);
        },
      },
    );
  }, [deleteBoard, id, onClose, setId]);

  return useMemo(
    () => ({
      isPending: deleteBoard.isPending,
      onDelete,
    }),
    [deleteBoard.isPending, onDelete],
  );
}
