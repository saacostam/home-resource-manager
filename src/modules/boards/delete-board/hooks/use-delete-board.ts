import { useMutationDeleteBoardById } from "@/modules/core.fetching-hooks";
import { useCallback, useMemo } from "react";
import { useBoardSelector } from "@/modules/boards/board-selector";
import { notifications } from "@mantine/notifications";

export interface UseDeleteBoardArgs {
  id: string;
  onClose: () => void;
}

export function useDeleteBoard({ id, onClose }: UseDeleteBoardArgs) {
  const { setId } = useBoardSelector();

  const deleteBoard = useMutationDeleteBoardById();

  const onDelete = useCallback(() => {
    deleteBoard.mutate(
      { id },
      {
        onSuccess: () => {
          setId(null);
          notifications.show({
            color: "green",
            title: "Deleted",
            message: "Board deleted successfully",
          });
        },
        onError: () => {
          notifications.show({
            color: "red",
            title: "Failed",
            message: "Couldn't delete board. Please try again shortly.",
          });
        },
        onSettled: () => {
          onClose();
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
