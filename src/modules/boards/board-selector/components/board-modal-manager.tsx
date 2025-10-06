import { useCallback } from "react";
import { Modal } from "@mantine/core";
import { CreateBoard } from "@/modules/boards/create-board";
import { DeleteBoard } from "@/modules/boards/delete-board";
import { EditBoard } from "@/modules/boards/edit-board";
import { useBoardSelector } from "../providers";

export function BoardModalManager() {
  const { mode, setMode, id, setId } = useBoardSelector();

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
        {id && <DeleteBoard onClose={onClose} id={id} setId={setId} />}
      </Modal>
      <Modal
        centered
        opened={mode.type === "edit"}
        onClose={onClose}
        title="Edit Board"
      >
        {id && <EditBoard onClose={onClose} id={id} />}
      </Modal>
    </>
  );
}
