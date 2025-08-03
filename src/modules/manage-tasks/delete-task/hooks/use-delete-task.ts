import { useDeleteDeleteTask } from "@/modules/core.fetching-hooks";
import { notifications } from "@mantine/notifications";
import { useCallback, useMemo } from "react";

export interface UseDeleteTaskProps {
  id: string;
  onClose: () => void;
}

export function useDeleteTask({ id, onClose }: UseDeleteTaskProps) {
  const deleteTask = useDeleteDeleteTask();

  const onCancel = useCallback(() => {
    onClose();
  }, [onClose]);
  const onDelete = useCallback(() => {
    deleteTask.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          notifications.show({
            color: "green",
            title: "Deleted",
            message: "Task deleted successfully",
          });
        },
        onError: () => {
          notifications.show({
            color: "red",
            title: "Failed",
            message: "Couldn't delete task. Please try again shortly.",
          });
        },
        onSettled: () => {
          onClose();
        },
      },
    );
  }, [deleteTask, id, onClose]);

  return useMemo(
    () => ({
      isPending: deleteTask.isPending,
      onCancel,
      onDelete,
    }),
    [deleteTask.isPending, onCancel, onDelete],
  );
}
