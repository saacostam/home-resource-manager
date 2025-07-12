import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface UseDeleteDeleteCategoryRequest {
  id: string;
}

export function useDeleteDeleteCategory() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, UseDeleteDeleteCategoryRequest>({
    mutationKey: [MutationKey.DELETE_DELETE_CATEGORY],
    mutationFn: (data) =>
      fetch({
        endpoint: `/category/${data.id}`,
        method: "DELETE",
        body: data,
      }),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_CATEGORIES],
      }),
  });
}
