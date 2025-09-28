import { useMemo } from "react";
import {
  useGetAllBoards,
  type TGetAllBoardsResponse,
} from "@/modules/core.fetching-hooks";
import type { TLeanBoard } from "@/modules/boards/manage-board";

export function useLeanBoardSelectorLoader() {
  const getAllBoards = useGetAllBoards();

  return useMemo(
    () =>
      getAllBoards.isLoading
        ? { status: "loading" as const }
        : getAllBoards.isSuccess
          ? {
              status: "success" as const,
              data: _mapApiToDomain({
                res: getAllBoards.data,
              }),
            }
          : {
              status: "error" as const,
              retry: {
                isPending: getAllBoards.isPending,
                onClick: getAllBoards.refetch,
              },
            },
    [
      getAllBoards.data,
      getAllBoards.isLoading,
      getAllBoards.isPending,
      getAllBoards.isSuccess,
      getAllBoards.refetch,
    ],
  );
}

export function _mapApiToDomain(args: {
  res: TGetAllBoardsResponse;
}): TLeanBoard[] {
  return args.res.boards.map((apiEntry) => ({
    id: apiEntry.id,
    name: apiEntry.name,
  }));
}
