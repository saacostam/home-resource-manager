import { Button, Flex, Paper, Text, Title } from "@mantine/core";
import { QueryError } from "@/modules/core.components";
import { PlusIcon } from "@/modules/icons";
import { useTasksTableLoader } from "../hooks";
import { TasksTableContent } from "./tasks-table-content";
import { TasksTableSkeleton } from "./tasks-table-skeleton";

export function TasksTableLoader() {
  const { status, onCreate, onDelete, onEdit, retry, tableEntries } =
    useTasksTableLoader();

  return (
    <>
      <Flex
        py="md"
        align="start"
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        gap="sm"
      >
        <Paper>
          <Title size="h2" order={4}>
            Tasks
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Used for planning and managing activities, chores, or maintenance
            related to your house.
          </Text>
        </Paper>
        {status === "success" && (
          <Button
            leftSection={
              <PlusIcon style={{ width: "1.3rem", height: "1.3rem" }} />
            }
            size="sm"
            onClick={onCreate}
          >
            Add Task
          </Button>
        )}
      </Flex>
      <Paper p="md" withBorder flex={1}>
        {status === "loading" ? (
          <TasksTableSkeleton />
        ) : status === "error" ? (
          <QueryError title="Couldn't fetch tasks." retry={retry} />
        ) : (
          <TasksTableContent
            tableEntries={tableEntries}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      </Paper>
      {status === "success" && null}
    </>
  );
}
