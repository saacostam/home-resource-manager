import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface UseDeleteDeleteResourceRequest {
  id: string;
}

export function useDeleteDeleteResource() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, UseDeleteDeleteResourceRequest>({
    mutationKey: [MutationKey.DELETE_DELETE_RESOURCE],
    mutationFn: (data) =>
      fetch({
        endpoint: `/resource/${data.id}`,
        method: "DELETE",
      }),
    onSettled: (_, __, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_RESOURCES],
      });

      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_RESOURCE_BY_ID, id],
      });
    },
  });
}
