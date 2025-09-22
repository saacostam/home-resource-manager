import {
  useGetImmediateTaskInstances,
  type TGetImmediateTaskInstancesResponse,
} from "@/modules/core.fetching-hooks";
import { useMemo } from "react";
import type { TStats } from "../types";

export function useStatsLoader() {
  const immediateTaskInstances = useGetImmediateTaskInstances();

  return useMemo(
    () =>
      immediateTaskInstances.isLoading
        ? { status: "loading" as const }
        : immediateTaskInstances.isSuccess
          ? {
              status: "success" as const,
              stats: _formatApiResponseToStats(
                immediateTaskInstances.data.stats,
              ),
            }
          : {
              status: "error" as const,
              retry: {
                onClick: immediateTaskInstances.refetch,
                isPending: immediateTaskInstances.isFetching,
              },
            },
    [
      immediateTaskInstances.data,
      immediateTaskInstances.isFetching,
      immediateTaskInstances.isLoading,
      immediateTaskInstances.isSuccess,
      immediateTaskInstances.refetch,
    ],
  );
}

export function _formatApiResponseToStats(
  apiTaskStats: TGetImmediateTaskInstancesResponse["stats"],
): TStats {
  return {
    ...apiTaskStats,
  };
}
