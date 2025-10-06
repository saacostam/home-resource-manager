import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IMutationUpdateBoardByIdIn,
} from "@/modules/repositories/app";

export function useMutationUpdateBoardById() {
  const queryClient = useQueryClient();
  const { board } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.PUT_BOARD],
    mutationFn: (args: IMutationUpdateBoardByIdIn) =>
      board.updateBoardById(args),
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
