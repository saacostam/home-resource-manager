import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  type TGetAllTasksInstancesResponse,
  useGetAllTaskIntances,
} from "@/modules/core.fetching-hooks";
import type { TImmediateTaskEntry } from "../types";

export function useImmediateTasksLoader() {
  const tasksInstances = useGetAllTaskIntances();

  return useMemo(
    () =>
      tasksInstances.isLoading
        ? {
            status: "loading" as const,
          }
        : tasksInstances.isSuccess
          ? {
              status: "success" as const,
              tableEntries: _formatApiTaskInstanceResponseToTableEntries(
                tasksInstances.data,
              ),
            }
          : {
              status: "error" as const,
              retry: {
                onClick: tasksInstances.refetch,
                isPending: tasksInstances.isFetching,
              },
            },
    [
      tasksInstances.data,
      tasksInstances.isFetching,
      tasksInstances.isLoading,
      tasksInstances.isSuccess,
      tasksInstances.refetch,
    ],
  );
}

export function _formatApiTaskInstanceResponseToTableEntries(
  apiTaskInstances: TGetAllTasksInstancesResponse,
): TImmediateTaskEntry[] {
  const grouping = new Map<string, TImmediateTaskEntry["entries"]>();

  for (const taskInstance of apiTaskInstances) {
    const newEntry = {
      id: uuidv4(),
      name: taskInstance.task.name,
      description: taskInstance.task.description,
      categoryName: "Home",
    };

    grouping.set(taskInstance.date, [
      ...(grouping.has(taskInstance.date)
        ? (grouping.get(taskInstance.date) ?? [])
        : []),
      newEntry,
    ]);
  }

  return Array.from(grouping, ([key, value]) => {
    return {
      utcDate: new Date(key),
      entries: value,
    };
  }).sort((a, b) => a.utcDate.getTime() - b.utcDate.getTime());
}
