import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import {
  MutationCreateTaskCompletionIn,
  useRepositories,
} from "@/modules/repositories/app";

export function useMutationCreateTaskCompletion() {
  const queryClient = useQueryClient();
  const { taskInstances } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.POST_CREATE_TASK_COMPLETION],
    mutationFn: (data: MutationCreateTaskCompletionIn) =>
      taskInstances.createTaskCompletion(data),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
      });
    },
  });
}
