import { Button, Flex, Paper, Space, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { ListBulletIcon, RectangleGroupIcon, TagIcon } from "../icons";
import { ImmediateTasksLoader } from "../immediate-tasks";
import { genRoute, TRouteType } from "../routing";
import { StatsLoader } from "../stats";

export function HomeContent() {
  return (
    <>
      <Paper py="md">
        <Title size="h2" order={4}>
          Dashboard
        </Title>
        <Text size="sm" c="gray" fw={500}>
          {new Date().toDateString()}
        </Text>
      </Paper>
      <Flex direction={{ base: "column", md: "row" }} gap="md">
        <Paper p="md" withBorder flex={3}>
          <Title size="h3" order={4}>
            Overview
          </Title>
          <Space h="xs" />
          <StatsLoader />
        </Paper>
        <Paper p="md" withBorder flex={2}>
          <Flex direction="column" justify="center" gap="sm" h="100%">
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.RESOURCES })}
              leftSection={<RectangleGroupIcon width={20} height={20} />}
            >
              Resources
            </Button>
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.TASKS })}
              leftSection={<ListBulletIcon width={20} height={20} />}
            >
              Tasks
            </Button>
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.CATEGORIES })}
              variant="outline"
              leftSection={<TagIcon width={20} height={20} />}
            >
              Categories
            </Button>
          </Flex>
        </Paper>
      </Flex>
      <Space h="md" />
      <Flex direction={{ base: "column", md: "row" }} gap="md">
        <Paper p="md" withBorder flex={1}>
          <Title size="h3" order={4}>
            My Tasks
          </Title>
          <Text size="sm" c="gray">
            Most immediate tasks.
          </Text>
          <Space h="xs" />
          <ImmediateTasksLoader />
        </Paper>
      </Flex>
    </>
  );
}
