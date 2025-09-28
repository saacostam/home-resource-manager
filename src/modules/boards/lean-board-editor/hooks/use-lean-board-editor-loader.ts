import { useMemo } from "react";
import { useDebouncedCallback } from "@mantine/hooks";
import type { TBoard } from "@/modules/boards/manage-board";
import {
  useGetBoardById,
  usePutUpdateBoardById,
  type TGetBoardByIdResponse,
} from "@/modules/core.fetching-hooks";
import type { LeanBoardEditorContentProps } from "../components/lean-board-editor-content";

export interface UseLeanBoardEditorLoaderArgs {
  id: string;
}

const UPDATE_DEBOUNCE_DELAY = 500;

export function useLeanBoardEditorLoader({ id }: UseLeanBoardEditorLoaderArgs) {
  const getBoardById = useGetBoardById({ req: { id } });
  const updateBoardById = usePutUpdateBoardById();

  const updateBoardContent = useDebouncedCallback<
    LeanBoardEditorContentProps["updateBoardContent"]
  >((content) => {
    updateBoardById.mutate({ id, content });
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
      updateBoardById.isPending,
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
