import { useCallback } from "react";
import { Modal } from "@mantine/core";
import { CreateBoard } from "@/modules/boards/create-board";
import { DeleteBoard } from "@/modules/boards/delete-board";
import { useBoardSelector } from "../providers";

export function BoardModalManager() {
  const { mode, setMode, id } = useBoardSelector();

  const onClose = useCallback(() => {
    setMode({ type: "browse" });
  }, [setMode]);

  return (
    <>
      <Modal
        centered
        opened={mode.type === "create"}
        onClose={onClose}
        title="Create Board"
      >
        <CreateBoard onClose={onClose} />
      </Modal>
      <Modal
        centered
        opened={mode.type === "delete"}
        onClose={onClose}
        title="Delete Board"
      >
        {id && <DeleteBoard onClose={onClose} id={id} />}
      </Modal>
    </>
  );
}
