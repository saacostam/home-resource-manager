import type { PropsWithChildren } from "react";
import { TasksTableContext } from "./tasks-table.context";
import { usePrivateTasksTable } from "./use-tasks-table";

export function TasksTableProvider({ children }: PropsWithChildren) {
  return (
    <TasksTableContext.Provider value={usePrivateTasksTable()}>
      {children}
    </TasksTableContext.Provider>
  );
}
