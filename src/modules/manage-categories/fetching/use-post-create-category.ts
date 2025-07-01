import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface UsePostCreateCategoryRequest {
  name: string;
  description?: string;
}

export function usePostCreateCategory() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, UsePostCreateCategoryRequest>({
    mutationKey: [MutationKey.POST_CREATE_CATEGORY],
    mutationFn: (data) =>
      fetch({
        endpoint: "/category",
        method: "POST",
        body: data,
      }),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_CATEGORIES],
      }),
  });
}
