import { createContext } from "react";
import type { usePrivateTasksTable } from "./use-tasks-table";

export const TasksTableContext = createContext(
  null as unknown as ReturnType<typeof usePrivateTasksTable>,
);
