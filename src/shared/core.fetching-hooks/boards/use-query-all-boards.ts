import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/shared/fetcher";
import { useRepositories } from "@/shared/repositories/app";

export function useQueryAllBoards() {
  const { board } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_ALL_BOARDS],
    queryFn: () => board.queryAllBoards(),
  });
}
