import { useMemo } from "react";
import {
  useGetAllCategories,
  useGetResourceById,
} from "@/modules/core.fetching-hooks";

export interface UseEditResourceLoaderProps {
  id: string;
}

export function useEditResourceLoader({ id }: UseEditResourceLoaderProps) {
  const resource = useGetResourceById({ id });
  const categories = useGetAllCategories();

  return useMemo(
    () =>
      resource.isLoading || categories.isLoading
        ? {
            status: "loading" as const,
          }
        : resource.isSuccess && categories.isSuccess
          ? {
              status: "success" as const,
              resource: resource.data,
              categories: categories.data,
            }
          : {
              status: "error" as const,
              retry: () => {
                void categories.refetch();
                void resource.refetch();
              },
              isFetching: resource.isFetching || categories.isFetching,
            },
    [categories, resource],
  );
}
