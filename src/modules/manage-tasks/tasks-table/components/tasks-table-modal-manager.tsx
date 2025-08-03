import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { CreateTask } from "@/modules/manage-tasks/create-task";
import { DeleteTask } from "@/modules/manage-tasks/delete-task";
import { useTasksTable } from "../provider";
import { TTaskTableModeType } from "../types";

export function TasksTableModalManager() {
  const { mode, setMode } = useTasksTable();

  const onClose = useCallback(() => {
    setMode({ type: TTaskTableModeType.BROWSE });
  }, [setMode]);

  return (
    <>
      <Modal
        centered
        opened={mode.type === TTaskTableModeType.CREATE}
        onClose={onClose}
        title="Create Task"
      >
        {mode.type === TTaskTableModeType.CREATE && (
          <CreateTask onClose={onClose} />
        )}
      </Modal>
      <Modal
        centered
        opened={mode.type === TTaskTableModeType.DELETE}
        onClose={onClose}
        title="Delete Task"
      >
        {mode.type === TTaskTableModeType.DELETE && (
          <DeleteTask id={mode.id} onClose={onClose} />
        )}
      </Modal>
    </>
  );
}
