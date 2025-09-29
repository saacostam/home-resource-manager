import { Flex, Paper, Text, Title } from "@mantine/core";
import { useSettingsLoader } from "../hooks";
import { QueryError } from "@/modules/core.components";
import { SettingsContent } from "./settings-content";
import { SettingsSkeleton } from "./settings-skeleton";

export function SettingsLoader() {
  const { status, data, retry } = useSettingsLoader();

  return (
    <>
      <Flex
        py="md"
        align="start"
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        gap="sm"
      >
        <Paper>
          <Title size="h2" order={4}>
            Settings
          </Title>
          <Text size="sm" c="gray" fw={500}>
            Manage your account and preferences
          </Text>
        </Paper>
      </Flex>
      <Paper p="md" withBorder flex={1}>
        {status === "success" && (
          <SettingsContent
            settings={data.settings}
            countryTimezones={data.countryTimezones}
          />
        )}
        {status === "error" && (
          <QueryError title="Couldn't fetch settings" retry={retry} />
        )}
        {status === "loading" && <SettingsSkeleton />}
      </Paper>
    </>
  );
}
