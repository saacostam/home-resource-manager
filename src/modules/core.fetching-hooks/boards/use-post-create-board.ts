import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface TPostCreateBoardRequest {
  name: string;
}

export interface TPostCreateBoardResponse {
  id: string;
}

export function usePostCreateBoard() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<TPostCreateBoardResponse, Error, TPostCreateBoardRequest>({
    mutationKey: [MutationKey.POST_CREATE_BOARD],
    mutationFn: (data) =>
      fetch({
        endpoint: "/board",
        method: "POST",
        body: data,
      }),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_BOARDS],
      });
    },
  });
}
