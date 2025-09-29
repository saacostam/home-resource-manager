import { QueryKey } from "@/modules/fetcher";
import { useRepositories } from "@/modules/repositories/app";
import { useQuery } from "@tanstack/react-query";

export function useQueryMyUser() {
  const { user } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_MY_USER],
    queryFn: () => user.getMe(),
  });
}
