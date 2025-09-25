import { Flex, Skeleton } from "@mantine/core";

const HEIGHT = {
  BASE: 100,
  XS: 130,
};

export function StatsSkeleton() {
  return (
    <Flex direction={{ base: "column", xs: "row" }} gap="md" justify="center">
      <Skeleton h={{ base: HEIGHT.BASE, xs: HEIGHT.XS }} w="100%" />
      <Skeleton h={{ base: HEIGHT.BASE, xs: HEIGHT.XS }} w="100%" />
      <Skeleton h={{ base: HEIGHT.BASE, xs: HEIGHT.XS }} w="100%" />
    </Flex>
  );
}
