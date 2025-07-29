import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";

export interface UsePostCreateResourceRequest {
  name: string;
  description: string | null;
  quantity: number;
  categoryId: string | null;
}

export function usePostCreateResource() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, UsePostCreateResourceRequest>({
    mutationKey: [MutationKey.POST_CREATE_RESOURCE],
    mutationFn: (data) =>
      fetch({
        endpoint: "/resource",
        method: "POST",
        body: data,
      }),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_RESOURCES],
      }),
  });
}
