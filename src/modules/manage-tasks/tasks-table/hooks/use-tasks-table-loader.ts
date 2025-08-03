import { useCallback, useMemo } from "react";
import {
  type TGetAllTasksResponse,
  useGetAllTasks,
} from "@/modules/core.fetching-hooks";
import { useTasksTable } from "../provider";
import { type TTaskTableEntry, TTaskTableModeType } from "../types";

export function useTasksTableLoader() {
  const { setMode } = useTasksTable();

  const allTasks = useGetAllTasks();

  const onCreate = useCallback(() => {
    setMode({
      type: TTaskTableModeType.CREATE,
    });
  }, [setMode]);

  const onDelete = useCallback(
    (id: string) => {
      setMode({
        type: TTaskTableModeType.DELETE,
        id,
      });
    },
    [setMode],
  );

  const onEdit = useCallback(() => {
    setMode({
      type: TTaskTableModeType.EDIT,
    });
  }, [setMode]);

  return useMemo(
    () =>
      allTasks.isLoading
        ? {
            status: "loading" as const,
          }
        : allTasks.isSuccess
          ? {
              status: "success" as const,
              tableEntries: allTasks.data.map(_mapApiTaskToTableEntry),
              onCreate,
              onDelete,
              onEdit,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: allTasks.refetch,
                isPending: allTasks.isFetching,
              },
            },
    [
      allTasks.data,
      allTasks.isFetching,
      allTasks.isLoading,
      allTasks.isSuccess,
      allTasks.refetch,
      onCreate,
      onDelete,
      onEdit,
    ],
  );
}

export function _mapApiTaskToTableEntry(
  apiTask: TGetAllTasksResponse[0],
): TTaskTableEntry {
  return {
    id: apiTask.id,
    name: apiTask.name,
    categoryName: apiTask.category?.name ?? null,
    recurrenceType: apiTask.cadence.type,
  };
}
