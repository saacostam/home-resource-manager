import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import type { TTaskInstanceStatus } from "@/modules/core.types";
import { QueryKey } from "@/modules/fetcher";

export type TGetAllTasksInstancesResponse = {
  status: TTaskInstanceStatus;
  task: {
    id: string;
    name: string;
    description: string | null;
  };
  date: string;
}[];

export function useGetAllTaskIntances() {
  const { fetch } = useAuth();

  return useQuery<TGetAllTasksInstancesResponse>({
    queryKey: [QueryKey.GET_ALL_TASK_INSTANCES],
    queryFn: () =>
      fetch({
        endpoint: "/i/task",
        method: "GET",
      }),
  });
}
