import { useCallback, useMemo } from "react";
import { useQueryAllBoards } from "@/modules/core.fetching-hooks";
import type { TLeanBoard } from "@/modules/boards/manage-board";
import type { IQueryAllBoardsOut } from "@/modules/repositories/app";
import { useBoardSelector } from "../providers";

export function useBoardSelectorLoader() {
  const getAllBoards = useQueryAllBoards();

  const { setMode } = useBoardSelector();

  const onCreateBoard = useCallback(() => {
    setMode({ type: "create" });
  }, [setMode]);

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
              onCreateBoard,
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
      onCreateBoard,
    ],
  );
}

export function _mapApiToDomain(args: {
  res: IQueryAllBoardsOut;
}): TLeanBoard[] {
  return args.res.boards.map((apiEntry) => ({
    id: apiEntry.id,
    name: apiEntry.name,
  }));
}
