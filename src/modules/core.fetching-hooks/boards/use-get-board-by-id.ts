import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/modules/fetcher";
import {
  useRepositories,
  type IQueryBoardByIdIn,
} from "@/modules/repositories/app";

export interface UseGetBoardByIdArgs {
  args: IQueryBoardByIdIn;
}

export function useGetBoardById({ args }: UseGetBoardByIdArgs) {
  const { board } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_BOARD_BY_ID, args.id],
    queryFn: () => board.queryBoardById(args),
  });
}
