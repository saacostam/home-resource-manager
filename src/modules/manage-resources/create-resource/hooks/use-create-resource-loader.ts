import { useMemo } from "react";
import { useGetAllCategories } from "@/modules/core.fetching-hooks";

export function useCreateResourceLoader() {
  const categories = useGetAllCategories();

  return useMemo(
    () =>
      categories.isLoading
        ? {
            status: "loading" as const,
          }
        : categories.isSuccess
          ? {
              status: "success" as const,
              categories: categories.data,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: categories.refetch,
                isPending: categories.isFetching,
              },
            },
    [
      categories.data,
      categories.isLoading,
      categories.isFetching,
      categories.isSuccess,
      categories.refetch,
    ],
  );
}
