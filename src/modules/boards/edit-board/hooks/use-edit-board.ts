import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import {
  useManageBoardForm,
  type TBoard,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { usePutUpdateBoardById } from "@/modules/core.fetching-hooks";
import { handleApiErrors } from "@/modules/forms";
import { notifications } from "@mantine/notifications";

export interface UseEditBoardArgs {
  board: TBoard;
  onClose: () => void;
}

export function useEditBoard({ board, onClose }: UseEditBoardArgs) {
  const form = useManageBoardForm({
    defaultValues: {
      name: board.name,
    },
  });

  const updateBoard = usePutUpdateBoardById();

  const onSubmit = useCallback(
    (data: TManageBoardForm) => {
      updateBoard.mutate(
        { id: board.id, name: data.name },
        {
          onSuccess: () => {
            onClose();
            notifications.show({
              color: "green",
              title: "Updated",
              message: "Board name updated successfully",
            });
          },
          onError: (error) => {
            if (!isAxiosError(error)) {
              form.setError("root", { message: "Something went wrong!" });
              return;
            }

            handleApiErrors({
              axiosError: error,
              setError: form.setError,
            });
          },
        },
      );
    },
    [board.id, form, onClose, updateBoard],
  );

  return useMemo(
    () => ({
      form,
      isPending: updateBoard.isPending,
      onSubmit,
    }),
    [form, updateBoard.isPending, onSubmit],
  );
}
