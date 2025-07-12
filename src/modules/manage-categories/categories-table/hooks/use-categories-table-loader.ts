import { useCallback, useMemo } from "react";
import {
  type TGetAllCategoriesResponse,
  useGetAllCategories,
} from "@/modules/core.fetching-hooks";
import { useCategoriesTable } from "../provider";
import type { TCategoryTableEntry } from "../types";

export function useCategoriesTableLoader() {
  const { setMode } = useCategoriesTable();

  const allCategories = useGetAllCategories();

  const onCreate = useCallback(() => {
    setMode({ type: "create" });
  }, [setMode]);

  const onDelete = useCallback(
    (id: string) => {
      setMode({ type: "delete", id });
    },
    [setMode],
  );

  const onEdit = useCallback(
    (id: string) => {
      setMode({ type: "edit", id });
    },
    [setMode],
  );

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
              onCreate,
              onDelete,
              onEdit,
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
      onCreate,
      onDelete,
      onEdit,
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
