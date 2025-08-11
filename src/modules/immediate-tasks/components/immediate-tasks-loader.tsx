import { QueryError } from "@/modules/core.components";
import { useImmediateTasksLoader } from "../hooks";
import { ImmediateTasksContent } from "./immediate-tasks-content";
import { ImmediateTasksSkeleton } from "./immediate-tasks-skeleton";

export function ImmediateTasksLoader() {
  const { status, retry, tableEntries } = useImmediateTasksLoader();

  if (status === "error")
    return <QueryError title="Couldn't fetch immediate tasks." retry={retry} />;

  if (status === "success")
    return <ImmediateTasksContent tableEntries={tableEntries} />;

  return <ImmediateTasksSkeleton />;
}
