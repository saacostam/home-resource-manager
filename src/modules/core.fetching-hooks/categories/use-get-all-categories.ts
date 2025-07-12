import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export type TGetAllCategoriesResponse = {
  id: string;
  name: string;
  description?: string;
}[];

export function useGetAllCategories() {
  const { fetch } = useAuth();

  return useQuery<TGetAllCategoriesResponse>({
    queryKey: [QueryKey.GET_ALL_CATEGORIES],
    queryFn: () =>
      fetch({
        endpoint: "/category",
        method: "GET",
      }),
  });
}
