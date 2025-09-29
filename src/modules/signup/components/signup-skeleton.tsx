import { Flex, Skeleton, Space } from "@mantine/core";

export function SignupSkeleton() {
  return (
    <Flex gap="lg" direction="column">
      <Flex gap="sm">
        <Skeleton h={36} />
        <Skeleton h={36} />
      </Flex>
      <Skeleton h={36} />
      <Skeleton h={36} />
      <Skeleton h={36} />
      <Space my="xs" />
      <Skeleton h={36} />
    </Flex>
  );
}
