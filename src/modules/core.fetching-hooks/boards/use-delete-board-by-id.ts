import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface TDeleteBoardByIdRequest {
  id: string;
}

export function useDeleteBoardById() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TDeleteBoardByIdRequest>({
    mutationKey: [MutationKey.DELETE_BOARD],
    mutationFn: (data) =>
      fetch({
        endpoint: `/board/${data.id}`,
        method: "DELETE",
      }),
    onSettled: (_, __, { id }) => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_BOARDS],
      });

      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_BOARD_BY_ID, id],
      });
    },
  });
}
