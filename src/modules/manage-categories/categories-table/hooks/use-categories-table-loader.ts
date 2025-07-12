import { useMemo } from "react";
import {
  type TGetAllCategoriesResponse,
  useGetAllCategories,
} from "@/modules/core.fetching-hooks";
import type { TCategoryTableEntry } from "../types";

export function useCategoriesTableLoader() {
  const allCategories = useGetAllCategories();

  return useMemo(
    () =>
      allCategories.isLoading
        ? {
            status: "loading" as const,
          }
        : allCategories.isSuccess
          ? {
              status: "success" as const,
              tableEntries: allCategories.data.map(_mapApiCategoryToTableEntry),
            }
          : {
              status: "error" as const,
              retry: allCategories.refetch,
              isPending: allCategories.isFetching,
            },
    [
      allCategories.data,
      allCategories.isLoading,
      allCategories.isFetching,
      allCategories.isSuccess,
      allCategories.refetch,
    ],
  );
}

export function _mapApiCategoryToTableEntry(
  apiCategory: TGetAllCategoriesResponse[0],
): TCategoryTableEntry {
  return {
    id: apiCategory.id,
    name: apiCategory.name,
    description: apiCategory.description,
  };
}
