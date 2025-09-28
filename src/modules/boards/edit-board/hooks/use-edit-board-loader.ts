import {
  useGetBoardById,
  type TGetBoardByIdResponse,
} from "@/modules/core.fetching-hooks";
import { useMemo } from "react";
import type { TBoard } from "../../manage-board";

export interface UseEditBoardLoaderArgs {
  id: string;
}

export function useEditBoardLoader({ id }: UseEditBoardLoaderArgs) {
  const getBoardById = useGetBoardById({ req: { id } });

  return useMemo(
    () =>
      getBoardById.isLoading
        ? { status: "loading" as const }
        : getBoardById.isSuccess
          ? {
              status: "success" as const,
              data: _mapApiToDomain(getBoardById.data),
            }
          : {
              status: "error" as const,
              retry: {
                onClick: getBoardById.refetch,
                isPending: getBoardById.isPending,
              },
            },
    [
      getBoardById.data,
      getBoardById.isLoading,
      getBoardById.isPending,
      getBoardById.isSuccess,
      getBoardById.refetch,
    ],
  );
}

export function _mapApiToDomain(req: TGetBoardByIdResponse): TBoard {
  return {
    id: req.id,
    content: req.content,
    name: req.name,
  };
}
