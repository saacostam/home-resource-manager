import { notifications } from "@mantine/notifications";
import { useCallback, useMemo } from "react";
import { useDeleteDeleteCategory } from "@/modules/core.fetching-hooks";

export interface UseDeleteCategory {
  id: string;
  onClose: () => void;
}

export function useDeleteCategory({ id, onClose }: UseDeleteCategory) {
  const deleteCategory = useDeleteDeleteCategory();

  const onCancel = useCallback(() => {
    onClose();
  }, [onClose]);
  const onDelete = useCallback(() => {
    deleteCategory.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          notifications.show({
            color: "green",
            title: "Deleted",
            message: "Category deleted successfully",
          });
        },
        onError: () => {
          notifications.show({
            color: "red",
            title: "Failed",
            message: "Couldn't delete category. Please try again shortly.",
          });
        },
        onSettled: () => {
          onClose();
        },
      },
    );
  }, [deleteCategory, id, onClose]);

  return useMemo(
    () => ({
      isPending: deleteCategory.isPending,
      onCancel,
      onDelete,
    }),
    [deleteCategory.isPending, onCancel, onDelete],
  );
}
