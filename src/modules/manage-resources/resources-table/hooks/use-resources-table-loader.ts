import { useMemo } from "react";
import {
  type TGetAllResourcesResponse,
  useGetAllResources,
} from "@/modules/core.fetching-hooks";
import { useResourcesTable } from "../provider";
import type { TResourceTableEntry } from "../types";

export function useResourcesTableLoader() {
  useResourcesTable();

  const allResources = useGetAllResources();

  return useMemo(
    () =>
      allResources.isLoading
        ? {
            status: "loading" as const,
          }
        : allResources.isSuccess
          ? {
              status: "success" as const,
              tableEntries: allResources.data.map(_mapApiResourceToTableEntry),
            }
          : {
              status: "error" as const,
              retry: allResources.refetch,
              isFetching: allResources.isFetching,
            },
    [
      allResources.data,
      allResources.isLoading,
      allResources.isFetching,
      allResources.isSuccess,
      allResources.refetch,
    ],
  );
}

export function _mapApiResourceToTableEntry(
  apiResource: TGetAllResourcesResponse[number],
): TResourceTableEntry {
  return {
    id: apiResource.id,
    name: apiResource.name,
    description: apiResource.description ?? undefined,
    quantity: apiResource.quantity,
  };
}
