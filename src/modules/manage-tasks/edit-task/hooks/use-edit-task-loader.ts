import { useMemo } from "react";
import {
  useGetAllCategories,
  useGetAllResources,
  useGetTaskById,
} from "@/modules/core.fetching-hooks";

export interface UseEditTaskLoaderProps {
  id: string;
}

export function useEditTaskLoader({ id }: UseEditTaskLoaderProps) {
  const categories = useGetAllCategories();
  const resources = useGetAllResources();
  const task = useGetTaskById({ id });

  return useMemo(
    () =>
      task.isLoading || categories.isLoading || resources.isLoading
        ? {
            status: "loading" as const,
          }
        : task.isSuccess && categories.isSuccess && resources.isSuccess
          ? {
              status: "success" as const,
              categories: categories.data,
              resources: resources.data,
              task: task.data,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: () => {
                  void categories.refetch();
                  void resources.refetch();
                  void task.refetch();
                },
                isPending:
                  categories.isFetching ||
                  resources.isFetching ||
                  task.isFetching,
              },
            },
    [categories, resources, task],
  );
}
