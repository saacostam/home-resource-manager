import { TasksTableProvider } from "../provider";
import { TasksTableLoader } from "./tasks-table-loader";

export function TasksTable() {
  return (
    <TasksTableProvider>
      <TasksTableLoader />
    </TasksTableProvider>
  );
}
