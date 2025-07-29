import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { CreateResource } from "@/modules/manage-resources/create-resource";
import { useResourcesTable } from "../provider";

export function ResourcesTableModalManager() {
  const { mode, setMode } = useResourcesTable();

  const onClose = useCallback(() => {
    setMode({ type: "browse" });
  }, [setMode]);

  return (
    <Modal
      centered
      opened={mode.type === "create"}
      onClose={onClose}
      title="Create Resource"
    >
      {mode.type === "create" && <CreateResource onClose={onClose} />}
    </Modal>
  );
}
