import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { CreateResource } from "@/modules/manage-resources/create-resource";
import { DeleteResource } from "@/modules/manage-resources/delete-resource";
import { EditResource } from "@/modules/manage-resources/edit-resource";
import { useResourcesTable } from "../provider";

export function ResourcesTableModalManager() {
  const { mode, setMode } = useResourcesTable();

  const onClose = useCallback(() => {
    setMode({ type: "browse" });
  }, [setMode]);

  return (
    <>
      <Modal
        centered
        opened={mode.type === "create"}
        onClose={onClose}
        title="Create Resource"
      >
        {mode.type === "create" && <CreateResource onClose={onClose} />}
      </Modal>
      <Modal
        centered
        opened={mode.type === "delete"}
        onClose={onClose}
        title="Delete Resource"
      >
        {mode.type === "delete" && (
          <DeleteResource id={mode.id} onClose={onClose} />
        )}
      </Modal>
      <Modal
        centered
        opened={mode.type === "edit"}
        onClose={onClose}
        title="Edit Resource"
      >
        {mode.type === "edit" && (
          <EditResource id={mode.id} onClose={onClose} />
        )}
      </Modal>
    </>
  );
}
