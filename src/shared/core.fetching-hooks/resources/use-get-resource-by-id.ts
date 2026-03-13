import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export interface TGetResourceByIdRequest {
  id: string;
}

export interface TGetResourceByIdResponse {
  id: string;
  name: string;
  description: string | null;
  quantity: number;
  categoryId: string | null;
  category: {
    id: string;
    name: string;
  } | null;
}

export function useGetResourceById({ id }: TGetResourceByIdRequest) {
  const { fetch } = useAuth();

  return useQuery<TGetResourceByIdResponse>({
    queryKey: [QueryKey.GET_RESOURCE_BY_ID, id],
    queryFn: () =>
      fetch({
        endpoint: `/resource/${id}`,
        method: "GET",
      }),
  });
}
