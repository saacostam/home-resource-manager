import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/modules/fetcher";
import { useRepositories } from "@/modules/repositories/app";

export function useGetAllBoards() {
  const { board } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_ALL_BOARDS],
    queryFn: () => board.queryAllBoards(),
  });
}
