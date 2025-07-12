import { ActionIcon, Badge, Group, Table, Tooltip } from "@mantine/core";
import { EmptyQuery } from "@/modules/core.components";
import { PencilSquareIcon, TrashIcon } from "@/modules/icons";
import type { TCategoryTableEntry } from "../types";

export interface CategoriesTableContentProps {
  tableEntries: TCategoryTableEntry[];
}

export function CategoriesTableContent({
  tableEntries,
}: CategoriesTableContentProps) {
  if (tableEntries.length === 0)
    return <EmptyQuery title="No Categories Yet" />;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {tableEntries.map((entry) => (
          <Table.Tr key={entry.id}>
            <Table.Td>
              <Badge>Kitchen</Badge>
            </Table.Td>
            <Table.Td>Kitchen-related stuff</Table.Td>
            <Table.Td>
              <ManagementMenu />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export function ManagementMenu() {
  return (
    <Group gap="xs" justify="end">
      <Tooltip label="Edit Category">
        <ActionIcon size="sm" variant="light">
          <PencilSquareIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete Category">
        <ActionIcon size="sm" variant="light">
          <TrashIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
