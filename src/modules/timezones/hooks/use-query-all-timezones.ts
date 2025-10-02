import { QueryKey } from "@/modules/fetcher";
import { useRepositories } from "@/modules/repositories/app";
import { useQuery } from "@tanstack/react-query";

export function useQueryAllTimezones() {
  const { timezone } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_ALL_TIMEZONES],
    queryFn: () => timezone.getAllCountryTimezones(),
  });
}
