import { Flex, Skeleton } from "@mantine/core";

export function BoardSelectorSkeleton() {
  return (
    <Flex direction="column" gap="sm">
      <Skeleton height={36} />
      <Skeleton height={128} />
    </Flex>
  );
}
