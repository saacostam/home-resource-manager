import { QueryKey } from "@/modules/fetcher";
import { useRepositories } from "@/modules/repositories/app";
import { useQuery } from "@tanstack/react-query";

export interface UseQueryAllTimezonesArgs {
  retry?: number;
}

export function useQueryAllTimezones(props?: UseQueryAllTimezonesArgs) {
  const { timezone } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_ALL_TIMEZONES],
    queryFn: () => timezone.getAllCountryTimezones(),
    refetchInterval: 100_000,
    retry: props?.retry,
  });
}
