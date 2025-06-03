import { Flex, Image, Tooltip } from "@mantine/core";

export function Logo() {
  return (
    <Tooltip label="Mock App for Practicing Mantine Library Composition">
      <Flex direction="row" align="center" gap="xs">
        <Image src="/logo.png" height={32} />
      </Flex>
    </Tooltip>
  );
}
