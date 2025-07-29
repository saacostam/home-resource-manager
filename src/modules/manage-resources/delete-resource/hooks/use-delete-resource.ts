import { notifications } from "@mantine/notifications";
import { useCallback, useMemo } from "react";
import { useDeleteDeleteResource } from "@/modules/core.fetching-hooks";

export interface UseDeleteResourceProps {
  id: string;
  onClose: () => void;
}

export function useDeleteResource({ id, onClose }: UseDeleteResourceProps) {
  const deleteResource = useDeleteDeleteResource();

  const onCancel = useCallback(() => {
    onClose();
  }, [onClose]);
  const onDelete = useCallback(() => {
    deleteResource.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          notifications.show({
            color: "green",
            title: "Deleted",
            message: "Resource deleted successfully",
          });
        },
        onError: () => {
          notifications.show({
            color: "red",
            title: "Failed",
            message: "Couldn't delete resource. Please try again shortly.",
          });
        },
        onSettled: () => {
          onClose();
        },
      },
    );
  }, [deleteResource, id, onClose]);

  return useMemo(
    () => ({
      isPending: deleteResource.isPending,
      onCancel,
      onDelete,
    }),
    [deleteResource.isPending, onCancel, onDelete],
  );
}
