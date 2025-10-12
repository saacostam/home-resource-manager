import { useCallback, useMemo } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useBoardModalManagerService } from "@/modules/boards/board-modal-manager";
import type { TBoard } from "@/modules/boards/manage-board";
import {
  useQueryBoardById,
  useMutationUpdateBoardById,
} from "@/modules/core.fetching-hooks";
import type { IQueryBoardByIdOut } from "@/modules/repositories/app";
import type { BoardEditorContentProps } from "../components/board-editor-content";

export interface UseBoardEditorLoaderArgs {
  id: string;
}

const UPDATE_DEBOUNCE_DELAY = 500;

export function useBoardEditorLoader({ id }: UseBoardEditorLoaderArgs) {
  const { setMode } = useBoardModalManagerService();

  const getBoardById = useQueryBoardById({ args: { id } });
  const updateBoardById = useMutationUpdateBoardById();

  const updateBoardContent = useDebouncedCallback<
    BoardEditorContentProps["updateBoardContent"]
  >((content) => {
    updateBoardById.mutate(
      { id, content },
      {
        onError: () => {
          notifications.show({
            color: "red",
            title: "Failed",
            message:
              "Unable to save board content. Some changes may not have been saved. Please try again shortly.",
          });
        },
      },
    );
  }, UPDATE_DEBOUNCE_DELAY);

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
              onClickDelete,
              onClickEditName,
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
      onClickDelete,
      onClickEditName,
    ],
  );
}

export function _mapApiToDomain(args: { res: IQueryBoardByIdOut }): TBoard {
  return {
    id: args.res.id,
    name: args.res.name,
    content: args.res.content,
  };
}
