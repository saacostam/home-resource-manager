import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  useMutationDeleteTaskCompletion,
  useQueryImmediateTaskInstances,
  useMutationCreateTaskCompletion,
} from "@/modules/core.fetching-hooks";
import { QueryKey } from "@/modules/fetcher";
import type { ImmediateTasksContentProps } from "../components/immediate-tasks-content";
import type { TImmediateTaskEntry } from "../types";
import { QueryImmediateTaskInstancesOut } from "@/modules/repositories/app";

export function useImmediateTasksLoader() {
  const queryClient = useQueryClient();

  const immediateTaskInstances = useQueryImmediateTaskInstances();

  const createTaskCompletion = useMutationCreateTaskCompletion();
  const deleteTaskCompletion = useMutationDeleteTaskCompletion();

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
            data?: QueryImmediateTaskInstancesOut,
          ): QueryImmediateTaskInstancesOut | undefined => {
            if (!data) return data;

            return new QueryImmediateTaskInstancesOut({
              stats: data.stats,
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
            });
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
            data?: QueryImmediateTaskInstancesOut,
          ): QueryImmediateTaskInstancesOut | undefined => {
            if (!data) return data;

            return new QueryImmediateTaskInstancesOut({
              stats: data.stats,
              taskInstances: data.taskInstances.map((entry) => {
                if (
                  entry.status.type === "committed" &&
                  entry.status.id === args.id
                )
                  return {
                    ...entry,
                    status: {
                      type: "mutating" as const,
                    },
                  };

                return entry;
              }),
            });
          },
        );

        // Call mutation
        deleteTaskCompletion.mutate({
          id: args.id,
        });
      },
      [deleteTaskCompletion, queryClient],
    );

  return useMemo(
    () =>
      immediateTaskInstances.isLoading
        ? {
            status: "loading" as const,
          }
        : immediateTaskInstances.isSuccess
          ? {
              status: "success" as const,
              tableEntries:
                _formatApiImmediateTaskInstanceResponseToTableEntries(
                  immediateTaskInstances.data,
                ),
              onCreateTaskCompletion,
              onDeleteTaskCompletion,
              isFetching:
                immediateTaskInstances.isFetching ||
                createTaskCompletion.isPending ||
                deleteTaskCompletion.isPending,
            }
          : {
              status: "error" as const,
              retry: {
                onClick: immediateTaskInstances.refetch,
                isPending: immediateTaskInstances.isFetching,
              },
            },
    [
      createTaskCompletion.isPending,
      deleteTaskCompletion.isPending,
      onCreateTaskCompletion,
      onDeleteTaskCompletion,
      immediateTaskInstances.data,
      immediateTaskInstances.isFetching,
      immediateTaskInstances.isLoading,
      immediateTaskInstances.isSuccess,
      immediateTaskInstances.refetch,
    ],
  );
}

export function _formatApiImmediateTaskInstanceResponseToTableEntries(
  apiTaskInstances: QueryImmediateTaskInstancesOut,
): TImmediateTaskEntry[] {
  const grouping = new Map<string, TImmediateTaskEntry["entries"]>();

  for (const taskInstance of apiTaskInstances.taskInstances) {
    const newEntry = {
      id: uuidv4(),
      name: taskInstance.task.name,
      description: taskInstance.task.description,
      categoryName: taskInstance.task.category?.name ?? null,
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
