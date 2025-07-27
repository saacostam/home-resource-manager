import { useMemo } from "react";
import { useGetCategoryById } from "@/modules/core.fetching-hooks";

export interface UseEditCategoryLoaderProps {
  id: string;
}

export function useEditCategoryLoader({ id }: UseEditCategoryLoaderProps) {
  const category = useGetCategoryById({ id });

  return useMemo(
    () =>
      category.isLoading
        ? {
            status: "loading" as const,
          }
        : category.isSuccess
          ? {
              status: "success" as const,
              category: category.data,
            }
          : {
              status: "error" as const,
              retry: category.refetch,
              isFetching: category.isFetching,
            },
    [
      category.data,
      category.isFetching,
      category.isLoading,
      category.isSuccess,
      category.refetch,
    ],
  );
}
