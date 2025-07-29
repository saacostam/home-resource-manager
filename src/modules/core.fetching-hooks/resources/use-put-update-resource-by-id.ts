import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface TPutUpdateResourceByIdRequest {
  id: string;
  name: string;
  description: string | null;
  quantity: number;
  categoryId: string;
}

export function usePutUpdateResourceById() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TPutUpdateResourceByIdRequest>({
    mutationKey: [MutationKey.PUT_UPDATE_RESOURCE],
    mutationFn: (data) =>
      fetch({
        endpoint: `/resource/${data.id}`,
        method: "PUT",
        body: data,
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
