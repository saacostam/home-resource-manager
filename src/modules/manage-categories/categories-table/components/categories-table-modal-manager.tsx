import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { CreateCategory } from "@/modules/manage-categories/create-category";
import { useCategoriesTable } from "../provider";

export function CategoriesTableModalManager() {
  const { mode, setMode } = useCategoriesTable();

  const onClose = useCallback(() => {
    setMode({ type: "browse" });
  }, [setMode]);

  return (
    <>
      <Modal
        opened={mode.type === "create"}
        onClose={onClose}
        title="Create Category"
      >
        {mode.type === "create" && <CreateCategory onClose={onClose} />}
      </Modal>
      <Modal
        opened={mode.type === "delete"}
        onClose={onClose}
        title="Delete Category"
      >
        {mode.type === "delete" && <>Delete {mode.id}</>}
      </Modal>
      <Modal
        opened={mode.type === "edit"}
        onClose={onClose}
        title="Edit Category"
      >
        {mode.type === "edit" && <>Edit {mode.id}</>}
      </Modal>
    </>
  );
}
