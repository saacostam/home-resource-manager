import { useMemo } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import type { TBoard } from "@/modules/boards/manage-board";
import {
  useQueryBoardById,
  useMutationUpdateBoardById,
} from "@/modules/core.fetching-hooks";
import type { IQueryBoardByIdOut } from "@/modules/repositories/app";
import type { LeanBoardEditorContentProps } from "../components/lean-board-editor-content";

export interface UseLeanBoardEditorLoaderArgs {
  id: string;
}

const UPDATE_DEBOUNCE_DELAY = 500;

export function useLeanBoardEditorLoader({ id }: UseLeanBoardEditorLoaderArgs) {
  const getBoardById = useQueryBoardById({ args: { id } });
  const updateBoardById = useMutationUpdateBoardById();

  const updateBoardContent = useDebouncedCallback<
    LeanBoardEditorContentProps["updateBoardContent"]
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

  return useMemo(
    () =>
      getBoardById.isLoading
        ? { status: "loading" as const }
        : getBoardById.isSuccess
          ? {
              status: "success" as const,
              data: _mapApiToDomain({ res: getBoardById.data }),
              updateBoardContent,
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
