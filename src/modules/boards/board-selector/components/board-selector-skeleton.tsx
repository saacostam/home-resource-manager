import { Flex, Skeleton } from "@mantine/core";

export function BoardSelectorSkeleton() {
  return (
    <Flex direction="column" gap="sm" data-testid="board-selector-skeleton">
      <Skeleton height={36} />
      <Skeleton height={128} />
    </Flex>
  );
}
