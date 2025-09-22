import { Flex, Skeleton } from "@mantine/core";

const HEIGHT = 130;

export function StatsSkeleton() {
  return (
    <Flex direction="row" gap="md" justify="center">
      <Skeleton h={HEIGHT} w="100%" />
      <Skeleton h={HEIGHT} w="100%" />
      <Skeleton h={HEIGHT} w="100%" />
    </Flex>
  );
}
