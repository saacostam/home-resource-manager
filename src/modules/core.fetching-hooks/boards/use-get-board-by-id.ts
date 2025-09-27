import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface UseGetBoardByIdArgs {
  req: {
    id: string;
  };
}

export interface TGetBoardByIdResponse {
  id: string;
  name: string;
  content: string;
}

export function useGetBoardById({ req }: UseGetBoardByIdArgs) {
  const auth = useAuth();

  return useQuery<TGetBoardByIdResponse>({
    queryKey: [QueryKey.GET_BOARD_BY_ID, req.id],
    queryFn: () =>
      auth.fetch({
        endpoint: `/board/${req.id}`,
        method: "GET",
      }),
  });
}
