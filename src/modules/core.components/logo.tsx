import { Flex, ThemeIcon, Title } from "@mantine/core";
import { HomeModernIcon } from "../icons";

export function Logo() {
  return (
    <Flex direction="row" align="center" gap="xs">
      <ThemeIcon size="md" variant="white" color="indigo" radius="sm">
        <HomeModernIcon />
      </ThemeIcon>
      <Title order={2} size="h5">
        Home Resource Manager
      </Title>
    </Flex>
  );
}
