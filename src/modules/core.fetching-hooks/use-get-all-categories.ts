import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../fetcher";
import { useAuth } from "../auth";

export type UseGetAllCategoriesResponse = {
  id: string;
  name: string;
  description?: string;
}[];

export function useGetAllCategories() {
  const { fetch } = useAuth();

  return useQuery<UseGetAllCategoriesResponse>({
    queryKey: [QueryKey.GET_ALL_CATEGORIES],
    queryFn: () =>
      fetch({
        endpoint: "/category",
        method: "GET",
      }),
  });
}
