import { useAuth } from "@/modules/auth";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface TPutUpdateBoardByIdRequest {
  id: string;
  name?: string;
  content?: string;
}

export function usePutUpdateBoardById() {
  const queryClient = useQueryClient();
  const { fetch } = useAuth();

  return useMutation<unknown, Error, TPutUpdateBoardByIdRequest>({
    mutationKey: [MutationKey.PUT_BOARD],
    mutationFn: ({ id, content, name }) =>
      fetch({
        endpoint: `/board/${id}`,
        method: "PUT",
        body: {
          name,
          content,
        },
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
