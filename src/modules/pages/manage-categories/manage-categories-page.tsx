import { Link } from "react-router-dom";
import {
  ActionIcon,
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  Flex,
  Group,
  Paper,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { genRoute, TRouteType } from "@/modules/routing";
import { PencilSquareIcon, PlusIcon, TrashIcon } from "@/modules/icons";

export function ManageCategoriesPage() {
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
        <Button
          leftSection={
            <PlusIcon style={{ width: "1.3rem", height: "1.3rem" }} />
          }
          size="sm"
        >
          Add Category
        </Button>
      </Flex>
      <Paper p="md" withBorder flex={1}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Badge>Kitchen</Badge>
              </Table.Td>
              <Table.Td>Kitchen-related stuff</Table.Td>
              <Table.Td>
                <ManagementMenu />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Badge>Bathroom</Badge>
              </Table.Td>
              <Table.Td>Bathroom, Shower and Cleaning Suplies</Table.Td>
              <Table.Td>
                <ManagementMenu />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Badge>Loft</Badge>
              </Table.Td>
              <Table.Td>Bed, Storage Units and TV</Table.Td>
              <Table.Td>
                <ManagementMenu />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Badge>Window</Badge>
              </Table.Td>
              <Table.Td>Window and Curtains</Table.Td>
              <Table.Td>
                <ManagementMenu />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Badge>Surfaces</Badge>
              </Table.Td>
              <Table.Td>Floor and Furniture Surfaces</Table.Td>
              <Table.Td>
                <ManagementMenu />
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Paper>
    </>
  );
}

export function ManagementMenu() {
  return (
    <Group gap="xs" justify="end">
      <Tooltip label="Edit Category">
        <ActionIcon size="sm" variant="outline">
          <PencilSquareIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete Category">
        <ActionIcon size="sm" variant="outline">
          <TrashIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
