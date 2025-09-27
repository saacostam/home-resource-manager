import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface TGetAllBoardsResponse {
  boards: {
    id: string;
    name: string;
  }[];
}

export function useGetAllBoards() {
  const { fetch } = useAuth();

  return useQuery<TGetAllBoardsResponse>({
    queryKey: [QueryKey.GET_ALL_BOARDS],
    queryFn: () =>
      fetch({
        endpoint: "/board",
        method: "GET",
      }),
  });
}
