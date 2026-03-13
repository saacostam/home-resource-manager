import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export interface TGetCategoryByIdRequest {
  id: string;
}

export interface TGetCategoryByIdResponse {
  id: string;
  name: string;
  description: string | null;
}

export function useGetCategoryById({ id }: TGetCategoryByIdRequest) {
  const { fetch } = useAuth();

  return useQuery<TGetCategoryByIdResponse>({
    queryKey: [QueryKey.GET_CATEGORY_BY_ID, id],
    queryFn: () =>
      fetch({
        endpoint: `/category/${id}`,
        method: "GET",
      }),
  });
}
