import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface TDeleteDeleteTaskCompletionRequest {
  id: string;
}

export function useDeleteDeleteTaskCompletion() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TDeleteDeleteTaskCompletionRequest>({
    mutationKey: [MutationKey.DELETE_DELETE_TASK_COMPLETION],
    mutationFn: (data) =>
      fetch({
        endpoint: `/i/task/${data.id}`,
        method: "DELETE",
      }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_TASK_INSTANCES],
      });
    },
  });
}
