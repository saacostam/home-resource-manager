import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import type { TCadence } from "@/modules/core.types";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface TPostCreateTaskRequest {
  name: string;
  description: string | null;
  resourcesIds: string[] | null;
  categoryId: string | null;
  cadence: TCadence;
  anchorDate: string;
}

export function usePostCreateTask() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TPostCreateTaskRequest>({
    mutationKey: [MutationKey.POST_CREATE_TASK],
    mutationFn: (data) =>
      fetch({
        endpoint: "/task",
        method: "POST",
        body: data,
      }),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_TASKS],
      }),
  });
}
