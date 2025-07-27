import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface TPutUpdateCategoryByIdRequest {
  id: string;
  name: string;
  description: string | null;
}

export function usePutUpdateCategoryById() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TPutUpdateCategoryByIdRequest>({
    mutationKey: [MutationKey.PUT_UPDATE_CATEGORY],
    mutationFn: (data) =>
      fetch({
        endpoint: `/category/${data.id}`,
        method: "PUT",
        body: data,
      }),
    onSettled: (_, __, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_CATEGORIES],
      });

      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_CATEGORY_BY_ID, id],
      });
    },
  });
}
