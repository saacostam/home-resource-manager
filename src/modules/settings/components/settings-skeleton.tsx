import { Flex, Skeleton } from "@mantine/core";

export function SettingsSkeleton() {
  return (
    <Flex direction="column" gap="sm">
      <Skeleton h={36} />
      <Skeleton h={36} />
      <Flex justify="end">
        <Skeleton h={36} w={128} />
      </Flex>
    </Flex>
  );
}
