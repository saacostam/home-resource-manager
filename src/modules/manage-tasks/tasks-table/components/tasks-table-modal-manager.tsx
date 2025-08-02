import { Modal } from "@mantine/core";
import { useCallback } from "react";
import { CreateTask } from "@/modules/manage-tasks/create-task";
import { useTasksTable } from "../provider";
import { TTaskTableModeType } from "../types";

export function TasksTableModalManager() {
  const { mode, setMode } = useTasksTable();

  console.log(mode);

  const onClose = useCallback(() => {
    setMode({ type: TTaskTableModeType.BROWSE });
  }, [setMode]);

  return (
    <Modal
      centered
      opened={mode.type === TTaskTableModeType.CREATE}
      onClose={onClose}
      title="Create Task"
    >
      {mode.type === TTaskTableModeType.CREATE && <CreateTask />}
    </Modal>
  );
}
