import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/modules/auth";
import { QueryKey } from "@/modules/fetcher";
import type { TCadence } from "@/modules/core.types";

export interface TGetTaskByIdRequest {
  id: string;
}

export interface TGetTaskByIdResponse {
  id: string;
  name: string;
  description: string | null;
  quantity: number;
  category: {
    id: string;
    name: string;
  } | null;
  resources:
    | {
        id: string;
        name: string;
      }[]
    | null;
  cadence: TCadence;
  anchorDate: string;
}

export function useGetTaskById({ id }: TGetTaskByIdRequest) {
  const { fetch } = useAuth();

  return useQuery<TGetTaskByIdResponse>({
    queryKey: [QueryKey.GET_TASK_BY_ID, id],
    queryFn: () =>
      fetch({
        endpoint: `/task/${id}`,
        method: "GET",
      }),
  });
}
