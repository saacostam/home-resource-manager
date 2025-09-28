import { useCallback, useMemo } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import { useBoardSelector } from "@/modules/boards/board-selector";
import type { TBoard } from "@/modules/boards/manage-board";
import {
  useGetBoardById,
  usePutUpdateBoardById,
  type TGetBoardByIdResponse,
} from "@/modules/core.fetching-hooks";
import type { BoardEditorContentProps } from "../components/board-editor-content";

export interface UseBoardEditorLoaderArgs {
  id: string;
}

const UPDATE_DEBOUNCE_DELAY = 500;

export function useBoardEditorLoader({ id }: UseBoardEditorLoaderArgs) {
  const { setMode } = useBoardSelector();

  const getBoardById = useGetBoardById({ req: { id } });
  const updateBoardById = usePutUpdateBoardById();

  const updateBoardContent = useDebouncedCallback<
    BoardEditorContentProps["updateBoardContent"]
  >((content) => {
    updateBoardById.mutate({ id, content });
  }, UPDATE_DEBOUNCE_DELAY);

  const updateBoardName: BoardEditorContentProps["updateBoardName"] =
    useCallback(
      (name) => {
        updateBoardById.mutate({ id, name });
      },
      [id, updateBoardById],
    );

  const onClickDelete = useCallback(() => {
    setMode({ type: "delete" });
  }, [setMode]);

  const onClickEditName = useCallback(() => {
    setMode({ type: "edit" });
  }, [setMode]);

  return useMemo(
    () =>
      getBoardById.isLoading
        ? { status: "loading" as const }
        : getBoardById.isSuccess
          ? {
              status: "success" as const,
              data: _mapApiToDomain({ res: getBoardById.data }),
              updateBoardContent,
              updateBoardName,
              onClickDelete,
              onClickEditName,
              isPending: updateBoardById.isPending || getBoardById.isPending,
            }
          : {
              status: "error" as const,
              retry: {
                isPending: getBoardById.isPending,
                onClick: getBoardById.refetch,
              },
            },
    [
      getBoardById.data,
      getBoardById.isLoading,
      getBoardById.isPending,
      getBoardById.isSuccess,
      getBoardById.refetch,
      updateBoardContent,
      updateBoardName,
      updateBoardById.isPending,
      onClickDelete,
      onClickEditName,
    ],
  );
}

export function _mapApiToDomain(args: { res: TGetBoardByIdResponse }): TBoard {
  return {
    id: args.res.id,
    name: args.res.name,
    content: args.res.content,
  };
}
