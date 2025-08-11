import { Flex, Skeleton } from "@mantine/core";

export function ImmediateTasksSkeleton() {
  return (
    <Flex direction="column" gap="lg">
      <Skeleton h={60} />
      <Skeleton h={80} />
      <Skeleton h={60} />
    </Flex>
  );
}
