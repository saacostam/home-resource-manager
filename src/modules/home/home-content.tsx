import { Button, Flex, Paper, Space, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { LeanBoardSelectorLoader } from "@/modules/boards/lean-board-selector";
import {
  ListBulletIcon,
  PencilIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@/modules/icons";
import { ImmediateTasksLoader } from "@/modules/immediate-tasks";
import { genRoute, TRouteType } from "@/modules/routing";
import { StatsLoader } from "@/modules/stats";

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
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.BOARDS })}
              variant="outline"
              leftSection={<PencilIcon width={20} height={20} />}
            >
              Boards
            </Button>
          </Flex>
        </Paper>
      </Flex>
      <Space h="md" />
      <Flex direction={{ base: "column", md: "row" }} gap="md">
        <Paper p="md" withBorder flex={3}>
          <Title size="h3" order={4}>
            My Tasks
          </Title>
          <Text size="sm" c="gray">
            Most immediate tasks.
          </Text>
          <Space h="xs" />
          <ImmediateTasksLoader />
        </Paper>
        <Paper p="md" withBorder flex={2}>
          <Title size="h3" order={4}>
            Boards
          </Title>
          <Space h="xs" />
          <LeanBoardSelectorLoader />
        </Paper>
      </Flex>
    </>
  );
}
