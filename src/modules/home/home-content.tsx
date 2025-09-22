import { Button, Card, Flex, Paper, Space, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  BellAlertIcon,
  ClockIcon,
  ListBulletIcon,
  RectangleGroupIcon,
  TagIcon,
} from "../icons";
import { ImmediateTasksLoader } from "../immediate-tasks";
import { genRoute, TRouteType } from "../routing";

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
          <Flex direction="row" gap="md" justify="center">
            <Card bg="violet" w="100%" style={{ color: "white" }}>
              <Text size="md" fw="bold">
                Total Resources
              </Text>
              <Text style={{ fontSize: "2em" }}>56</Text>
              <RectangleGroupIcon
                width={32}
                height={32}
                style={{ margin: "0em 0em 0em auto" }}
              />
            </Card>

            <Card
              bg="yellow"
              variant="filled"
              w="100%"
              style={{ color: "white" }}
            >
              <Text size="md" fw="bold">
                Pending Tasks
              </Text>
              <Text style={{ fontSize: "2em" }}>3</Text>
              <ClockIcon
                width={32}
                height={32}
                style={{ margin: "0em 0em 0em auto" }}
              />
            </Card>

            <Card bg="red" variant="filled" w="100%" style={{ color: "white" }}>
              <Text size="md" fw="bold">
                Overdue Tasks
              </Text>
              <Text style={{ fontSize: "2em" }}>2</Text>
              <BellAlertIcon
                width={32}
                height={32}
                style={{ margin: "0em 0em 0em auto" }}
              />
            </Card>
          </Flex>
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
