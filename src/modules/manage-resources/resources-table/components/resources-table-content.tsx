import { ActionIcon, Badge, Group, Table, Text, Tooltip } from "@mantine/core";
import { EmptyQuery } from "@/modules/core.components";
import { PencilSquareIcon, TrashIcon } from "@/modules/icons";
import type { TResourceTableEntry } from "../types";

export interface ResourcesTableContentProps {
  tableEntries: TResourceTableEntry[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function ResourcesTableContent({
  tableEntries,
  onDelete,
  onEdit,
}: ResourcesTableContentProps) {
  if (tableEntries.length === 0) return <EmptyQuery title="No Resources Yet" />;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ minWidth: "20%" }}>Name</Table.Th>
          <Table.Th style={{ minWidth: "15%" }}>Category</Table.Th>
          <Table.Th visibleFrom="xs">Description</Table.Th>
          <Table.Th
            style={{ minWidth: "15%", textAlign: "center" }}
            visibleFrom="xs"
          >
            Quantity
          </Table.Th>
          <Table.Th style={{ minWidth: "20%", textAlign: "end" }}>
            Actions
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {tableEntries.map((entry) => (
          <Table.Tr key={entry.id}>
            <Table.Td>{entry.name}</Table.Td>
            <Table.Td>
              {entry.categoryName !== null ? (
                <Badge size="sm">{entry.categoryName}</Badge>
              ) : (
                <Text c="gray" size="sm">
                  -
                </Text>
              )}
            </Table.Td>
            <Table.Td visibleFrom="xs">
              {!!entry.description ? (
                entry.description
              ) : (
                <Text c="gray" size="sm">
                  -
                </Text>
              )}
            </Table.Td>
            <Table.Td style={{ textAlign: "center" }} visibleFrom="xs">
              {entry.quantity}
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
      <Tooltip label="Edit Resource">
        <ActionIcon size="sm" variant="light" onClick={onEdit}>
          <PencilSquareIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Delete Resource">
        <ActionIcon size="sm" variant="light" onClick={onDelete}>
          <TrashIcon style={{ width: "80%", height: "80%" }} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
