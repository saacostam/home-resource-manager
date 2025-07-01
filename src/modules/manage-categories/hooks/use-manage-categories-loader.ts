import { useMemo } from "react";
import { useGetAllCategories } from "@/modules/core.fetching-hooks";

export function useManageCategoriesLoader() {
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
            },
    [categories.data, categories.isLoading, categories.isSuccess],
  );
}
