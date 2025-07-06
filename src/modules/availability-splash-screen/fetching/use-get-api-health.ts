import { apiFetcher, QueryKey } from "@/modules/fetcher";
import { useQuery } from "@tanstack/react-query";

export function useGetApiHealth() {
  return useQuery({
    queryKey: [QueryKey.GET_API_HEALTH],
    queryFn: () => apiFetcher.get("../health"),
    retry: true,
    retryDelay: 10_000,
  });
}
