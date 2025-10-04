import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import {
  MutationDeleteTaskCompletionIn,
  useRepositories,
} from "@/modules/repositories/app";

export function useMutationDeleteTaskCompletion() {
  const queryClient = useQueryClient();
  const { taskInstances } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.DELETE_DELETE_TASK_COMPLETION],
    mutationFn: (data: MutationDeleteTaskCompletionIn) =>
      taskInstances.deleteTaskCompletion(data),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
      });
    },
  });
}
