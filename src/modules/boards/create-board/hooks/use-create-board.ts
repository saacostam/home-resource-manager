import { isAxiosError } from "axios";
import { useCallback, useMemo } from "react";
import type { TBoardModalManagerService } from "@/modules/boards/board-modal-manager";
import {
  useManageBoardForm,
  type TManageBoardForm,
} from "@/modules/boards/manage-board";
import { useMutationCreateBoard } from "@/modules/core.fetching-hooks";
import { notifications } from "@mantine/notifications";
import { handleApiErrors } from "@/modules/forms";

export interface UseCreateBoardArgs {
  onClose: () => void;
  setId: TBoardModalManagerService["setId"];
}

export function useCreateBoard({ onClose, setId }: UseCreateBoardArgs) {
  const form = useManageBoardForm({
    defaultValues: {
      name: "",
    },
  });

  const createBoard = useMutationCreateBoard();

  const onSubmit = useCallback(
    (data: TManageBoardForm) => {
      createBoard.mutate(data, {
        onSuccess: (data) => {
          onClose();
          setId(data.id);
          notifications.show({
            color: "green",
            title: "Created",
            message: "Board created successfully",
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
      });
    },
    [createBoard, form, onClose, setId],
  );

  return useMemo(
    () => ({
      form,
      onSubmit,
      isPending: createBoard.isPending,
    }),
    [createBoard.isPending, form, onSubmit],
  );
}
