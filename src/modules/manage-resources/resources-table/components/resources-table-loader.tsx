import { Button, Flex, Paper, Text, Title } from "@mantine/core";
import { QueryError } from "@/modules/core.components";
import { PlusIcon } from "@/modules/icons";
import { useResourcesTableLoader } from "../hooks";
import { ResourcesTableContent } from "./resources-table-content";
import { ResourcesTableSkeleton } from "./resources-table-skeleton";
import { ResourcesTableModalManager } from "./resources-table-modal-manager";

export function ResourceTableLoader() {
  const { status, retry, isFetching, onCreate, tableEntries } =
    useResourcesTableLoader();

  return (
    <>
      <Flex py="md" align="end" justify="space-between">
        <Paper>
          <Title size="h2" order={4}>
            Resources
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Used for tracking your house assets.
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
            Add Resource
          </Button>
        )}
      </Flex>
      <Paper p="md" withBorder flex={1}>
        {status === "loading" ? (
          <ResourcesTableSkeleton />
        ) : status === "error" ? (
          <QueryError
            title="Couldn't fetch resources"
            retry={{
              onClick: () => void retry(),
              isPending: isFetching,
            }}
          />
        ) : (
          <ResourcesTableContent tableEntries={tableEntries} />
        )}
      </Paper>
      {status === "success" && <ResourcesTableModalManager />}
    </>
  );
}
