import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IMutationDeleteBoardByIdIn,
} from "@/modules/repositories/app";

export function useMutationDeleteBoardById() {
  const queryClient = useQueryClient();
  const { board } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.DELETE_BOARD],
    mutationFn: (args: IMutationDeleteBoardByIdIn) =>
      board.deleteBoardById(args),
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
