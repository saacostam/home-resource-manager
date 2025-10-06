import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKey, QueryKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IMutationCreateBoardIn,
} from "@/modules/repositories/app";

export function usePostCreateBoard() {
  const queryClient = useQueryClient();
  const { board } = useRepositories();

  return useMutation({
    mutationKey: [MutationKey.POST_CREATE_BOARD],
    mutationFn: (args: IMutationCreateBoardIn) => board.createBoard(args),
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_ALL_BOARDS],
      });
    },
  });
}
