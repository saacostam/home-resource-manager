import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/modules/fetcher";
import { useRepositories } from "@/modules/repositories/app";

export function useQueryImmediateTaskInstances() {
  const { taskInstances } = useRepositories();

  return useQuery({
    queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
    queryFn: () => taskInstances.getImmediateTaskInstances(),
  });
}
