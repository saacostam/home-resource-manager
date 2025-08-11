import { Box, LoadingOverlay } from "@mantine/core";
import { QueryError } from "@/modules/core.components";
import { useImmediateTasksLoader } from "../hooks";
import { ImmediateTasksContent } from "./immediate-tasks-content";
import { ImmediateTasksSkeleton } from "./immediate-tasks-skeleton";

export function ImmediateTasksLoader() {
  const {
    status,
    onCreateTaskCompletion,
    onDeleteTaskCompletion,
    retry,
    tableEntries,
    isFetching,
  } = useImmediateTasksLoader();

  if (status === "error")
    return <QueryError title="Couldn't fetch immediate tasks." retry={retry} />;

  if (status === "success")
    return (
      <Box pos="relative">
        <LoadingOverlay visible={isFetching} />
        <ImmediateTasksContent
          onCreateTaskCompletion={onCreateTaskCompletion}
          onDeleteTaskCompletion={onDeleteTaskCompletion}
          tableEntries={tableEntries}
        />
      </Box>
    );

  return <ImmediateTasksSkeleton />;
}
