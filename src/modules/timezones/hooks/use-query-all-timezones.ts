import { QueryKey } from "@/shared/fetcher";
import { useRepositories } from "@/shared/repositories/app";
import { useQuery } from "@tanstack/react-query";

export function useQueryAllTimezones() {
  const { timezone } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_ALL_TIMEZONES],
    queryFn: () => timezone.getAllCountryTimezones(),
  });
}
