import { Flex, Group, Skeleton } from "@mantine/core";

export function TasksTableSkeleton() {
  const fill = new Array(8).fill(null);

  return (
    <Flex direction="column" gap="xs">
      {fill.map((_, index) => (
        <Group key={+index}>
          <Skeleton flex={1} height={20} />
          <Skeleton flex={6} height={20} />
          <Skeleton flex={2} height={20} />
        </Group>
      ))}
    </Flex>
  );
}
