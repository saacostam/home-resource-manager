import { useMemo } from "react";
import {
  useGetAllCategories,
  useGetAllResources,
} from "@/modules/core.fetching-hooks";

export function useCreateTaskLoader() {
  const categories = useGetAllCategories();
  const resources = useGetAllResources();

  return useMemo(
    () =>
      categories.isLoading || resources.isLoading
        ? {
            status: "loading" as const,
          }
        : categories.isSuccess && resources.isSuccess
          ? {
              status: "success" as const,
              categories: categories.data,
              resources: resources.data,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: () => {
                  void categories.refetch();
                  void resources.refetch();
                },
                isPending: categories.isFetching || resources.isFetching,
              },
            },
    [categories, resources],
  );
}
