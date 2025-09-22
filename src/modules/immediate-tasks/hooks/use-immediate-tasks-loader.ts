import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  type TGetImmediateTaskInstancesResponse,
  useDeleteDeleteTaskCompletion,
  useGetImmediateTaskInstances,
  usePostCreateTaskCompletion,
} from "@/modules/core.fetching-hooks";
import { QueryKey } from "@/modules/fetcher";
import type { ImmediateTasksContentProps } from "../components/immediate-tasks-content";
import type { TImmediateTaskEntry } from "../types";

export function useImmediateTasksLoader() {
  const queryClient = useQueryClient();

  const tasksInstances = useGetImmediateTaskInstances();

  const createTaskCompletion = usePostCreateTaskCompletion();
  const deleteTaskCompletion = useDeleteDeleteTaskCompletion();

  const onCreateTaskCompletion: ImmediateTasksContentProps["onCreateTaskCompletion"] =
    useCallback(
      (args) => {
        // Optimistically update query state
        void queryClient.setQueriesData(
          {
            queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
            type: "active",
          },
          (
            data?: TGetImmediateTaskInstancesResponse,
          ): TGetImmediateTaskInstancesResponse | undefined => {
            if (!data) return data;

            return {
              ...data,
              taskInstances: data.taskInstances.map((entry) => {
                if (
                  entry.status.type === "virtual" &&
                  entry.date === args.date &&
                  entry.task.id === args.taskId
                )
                  return {
                    ...entry,
                    status: {
                      type: "mutating" as const,
                    },
                  };

                return entry;
              }),
            };
          },
        );

        // Call mutation
        createTaskCompletion.mutate({
          date: args.date,
          taskId: args.taskId,
        });
      },
      [createTaskCompletion, queryClient],
    );

  const onDeleteTaskCompletion: ImmediateTasksContentProps["onDeleteTaskCompletion"] =
    useCallback(
      (args) => {
        // Optimistically update query state
        void queryClient.setQueriesData(
          {
            queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
            type: "active",
          },
          (
            data?: TGetImmediateTaskInstancesResponse,
          ): TGetImmediateTaskInstancesResponse | undefined => {
            if (!data) return data;

            return {
              ...data,
              taskInstances: data.taskInstances.map((entry) => {
                if (
                  entry.status.type === "committed" &&
                  entry.status.id === args.taskCompletionId
                )
                  return {
                    ...entry,
                    status: {
                      type: "mutating" as const,
                    },
                  };

                return entry;
              }),
            };
          },
        );

        // Call mutation
        deleteTaskCompletion.mutate({
          id: args.taskCompletionId,
        });
      },
      [deleteTaskCompletion, queryClient],
    );

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
              onCreateTaskCompletion,
              onDeleteTaskCompletion,
              isFetching:
                tasksInstances.isFetching ||
                createTaskCompletion.isPending ||
                deleteTaskCompletion.isPending,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: tasksInstances.refetch,
                isPending: tasksInstances.isFetching,
              },
            },
    [
      createTaskCompletion.isPending,
      deleteTaskCompletion.isPending,
      onCreateTaskCompletion,
      onDeleteTaskCompletion,
      tasksInstances.data,
      tasksInstances.isFetching,
      tasksInstances.isLoading,
      tasksInstances.isSuccess,
      tasksInstances.refetch,
    ],
  );
}

export function _formatApiTaskInstanceResponseToTableEntries(
  apiTaskInstances: TGetImmediateTaskInstancesResponse,
): TImmediateTaskEntry[] {
  const grouping = new Map<string, TImmediateTaskEntry["entries"]>();

  for (const taskInstance of apiTaskInstances.taskInstances) {
    const newEntry = {
      id: uuidv4(),
      name: taskInstance.task.name,
      description: taskInstance.task.description,
      categoryName: "Home",
      status: taskInstance.status,
      taskId: taskInstance.task.id,
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
      utcDate: new Date(`${key}T00:00:00`),
      entries: value,
    };
  }).sort((a, b) => a.utcDate.getTime() - b.utcDate.getTime());
}
