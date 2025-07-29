import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export type TGetAllResourcesResponse = {
  id: string;
  name: string;
  description?: string | null;
  quantity: number;
  category: {
    id: string;
    name: string;
  } | null;
}[];

export function useGetAllResources() {
  const { fetch } = useAuth();

  return useQuery<TGetAllResourcesResponse>({
    queryKey: [QueryKey.GET_ALL_RESOURCES],
    queryFn: () =>
      fetch({
        endpoint: "/resource",
        method: "GET",
      }),
  });
}
