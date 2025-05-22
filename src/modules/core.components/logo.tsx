import { Flex, ThemeIcon, Title, Tooltip } from "@mantine/core";
import { HomeModernIcon } from "../icons";

export function Logo() {
  return (
    <Tooltip label="Mock App for Practicing Mantine Library Composition">
      <Flex direction="row" align="center" gap="xs">
        <ThemeIcon size="sm" variant="white" radius="sm" color="violet">
          <HomeModernIcon />
        </ThemeIcon>
        <Title order={2} size="h5" c="violet">
          Home Resource Manager
        </Title>
      </Flex>
    </Tooltip>
  );
}
