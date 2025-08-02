import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";

export type TGetAllTasksResponse = {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  } | null;
}[];

export function useGetAllTasks() {
  const { fetch } = useAuth();

  return useQuery<TGetAllTasksResponse>({
    queryKey: [QueryKey.GET_ALL_TASKS],
    queryFn: () =>
      fetch({
        endpoint: "/task",
        method: "GET",
      }),
  });
}
