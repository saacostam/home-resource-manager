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
                void Promise.all([resource.refetch, categories.refetch]);
              },
              isFetching: resource.isFetching || categories.isFetching,
            },
    [
      categories.data,
      categories.isFetching,
      categories.isLoading,
      categories.isSuccess,
      categories.refetch,
      resource.data,
      resource.isFetching,
      resource.isLoading,
      resource.isSuccess,
      resource.refetch,
    ],
  );
}
