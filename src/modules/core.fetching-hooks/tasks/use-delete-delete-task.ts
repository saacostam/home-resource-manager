import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface TDeleteDeleteTaskRequest {
  id: string;
}

export function useDeleteDeleteTask() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TDeleteDeleteTaskRequest>({
    mutationKey: [MutationKey.DELETE_DELETE_TASK],
    mutationFn: (data) =>
      fetch({
        endpoint: `/task/${data.id}`,
        method: "DELETE",
      }),
    onSettled: (_, __, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_TASKS],
      });

      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_TASK_BY_ID, id],
      });
    },
  });
}
