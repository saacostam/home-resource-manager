import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface TCreateTaskCompletionRequest {
  date: string;
  taskId: string;
}

export function usePostCreateTaskCompletion() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TCreateTaskCompletionRequest>({
    mutationKey: [MutationKey.POST_CREATE_TASK_COMPLETION],
    mutationFn: (data) =>
      fetch({
        endpoint: "/i/task",
        method: "POST",
        body: data,
      }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
      });
    },
  });
}
