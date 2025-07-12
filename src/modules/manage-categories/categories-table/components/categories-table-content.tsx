import { ActionIcon, Badge, Group, Table, Text, Tooltip } from "@mantine/core";
import { EmptyQuery } from "@/modules/core.components";
import { PencilSquareIcon, TrashIcon } from "@/modules/icons";
import type { TCategoryTableEntry } from "../types";

export interface CategoriesTableContentProps {
  tableEntries: TCategoryTableEntry[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function CategoriesTableContent({
  tableEntries,
  onDelete,
  onEdit,
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
              <Badge>{entry.name}</Badge>
            </Table.Td>
            <Table.Td>
              {!!entry.description ? (
                entry.description
              ) : (
                <Text c="gray" size="sm">
                  -
                </Text>
              )}
            </Table.Td>
            <Table.Td>
              <ManagementMenu
                onDelete={() => {
                  onDelete(entry.id);
                }}
                onEdit={() => {
                  onEdit(entry.id);
                }}
              />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export interface ManagementMenuProps {
  onDelete: () => void;
  onEdit: () => void;
}

export function ManagementMenu({ onDelete, onEdit }: ManagementMenuProps) {
  return (
    <Group gap="xs" justify="end">
      <Tooltip label="Edit Category">
        <ActionIcon size="sm" variant="light" onClick={onEdit}>
          <PencilSquareIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete Category">
        <ActionIcon size="sm" variant="light" onClick={onDelete}>
          <TrashIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
