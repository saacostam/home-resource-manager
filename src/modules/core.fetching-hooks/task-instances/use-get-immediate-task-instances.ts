import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import type { TTaskInstanceStatus } from "@/modules/core.types";
import { QueryKey } from "@/modules/fetcher";

export interface TGetImmediateTaskInstancesResponse {
  taskInstances: {
    status: TTaskInstanceStatus;
    task: {
      id: string;
      name: string;
      description: string | null;
      category: {
        name: string;
      } | null;
    };
    date: string;
  }[];
  stats: {
    totalResources: number;
    pendingTasks: number;
    overdueTasks: number;
  };
}

export function useGetImmediateTaskInstances() {
  const { fetch } = useAuth();

  return useQuery<TGetImmediateTaskInstancesResponse>({
    queryKey: [QueryKey.GET_IMMEDIATE_TASK_INSTANCES],
    queryFn: () =>
      fetch({
        endpoint: "/i/task/immediate",
        method: "GET",
      }),
  });
}
