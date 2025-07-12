import {
  Anchor,
  Breadcrumbs,
  Button,
  Flex,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { PlusIcon } from "@/modules/icons";
import { genRoute, TRouteType } from "@/modules/routing";
import { useCategoriesTableLoader } from "../hooks";
import { CategoriesTableContent } from "./categories-table-content";
import { CategoriesTableError } from "./categories-table-error";
import { CategoriesTableModalManager } from "./categories-table-modal-manager";
import { CategoriesTableSkeleton } from "./categories-table-skeleton";

export function CategoriesTableLoader() {
  const { isPending, onCreate, onDelete, onEdit, status, tableEntries, retry } =
    useCategoriesTableLoader();

  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
          Dashboard
        </Anchor>
        <Text c="violet">Categories</Text>
      </Breadcrumbs>
      <Flex py="md" align="end" justify="space-between">
        <Paper>
          <Title size="h2" order={4}>
            Categories
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Used for organizing resources or tasks.
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
            Add Category
          </Button>
        )}
      </Flex>
      <Paper p="md" withBorder flex={1}>
        {status === "loading" ? (
          <CategoriesTableSkeleton />
        ) : status === "error" ? (
          <CategoriesTableError
            retry={() => void retry()}
            isPending={isPending}
          />
        ) : (
          <CategoriesTableContent
            tableEntries={tableEntries}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      </Paper>
      {status === "success" && <CategoriesTableModalManager />}
    </>
  );
}
