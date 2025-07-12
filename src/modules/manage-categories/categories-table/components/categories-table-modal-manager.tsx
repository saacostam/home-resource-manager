import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { useCategoriesTable } from "../provider";

export function CategoriesTableModalManager() {
  const { mode, setMode } = useCategoriesTable();

  const closeModal = useCallback(() => {
    setMode({ type: "browse" });
  }, [setMode]);

  return (
    <>
      <Modal opened={mode.type === "create"} onClose={closeModal}>
        {mode.type === "create" && "Create"}
      </Modal>
      <Modal opened={mode.type === "delete"} onClose={closeModal}>
        {mode.type === "delete" && <>Delete {mode.id}</>}
      </Modal>
      <Modal opened={mode.type === "edit"} onClose={closeModal}>
        {mode.type === "edit" && <>Edit {mode.id}</>}
      </Modal>
    </>
  );
}
