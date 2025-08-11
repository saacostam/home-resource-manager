import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export type TGetAllTasksInstancesResponse = {
  task: {
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
