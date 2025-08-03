import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import type { TCadence } from "@/modules/core.types";

export interface TPutUpdateTaskByIdRequest {
  id: string;
  name: string;
  description: string | null;
  resourcesIds: string[] | null;
  categoryId: string | null;
  cadence: TCadence;
  anchorDate: string;
}

export function usePutUpdateTaskById() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TPutUpdateTaskByIdRequest>({
    mutationKey: [MutationKey.PUT_UPDATE_TASK],
    mutationFn: (data) =>
      fetch({
        endpoint: `/task/${data.id}`,
        method: "PUT",
        body: data,
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
