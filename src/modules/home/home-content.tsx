import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Divider,
  Flex,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { genRoute, TRouteType } from "../routing";

const mockTasks = [
  { label: "Water the Plants", category: "Garden", checked: true },
  { label: "Grocery shopping", category: "Personal", checked: false },
  { label: "Grocery shopping", category: "Personal", checked: false },
  { label: "Fix bike tire", category: "Maintenance", checked: false },
  { label: "Stretch for 10 min", category: "Health", checked: false },
  { label: "Stretch for 10 min", category: "Health", checked: false },
  { label: "Fix bike tire", category: "Maintenance", checked: false },
];

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
          <Title size="h4" order={4}>
            Overview
          </Title>
          <Space h="xs" />
          <Flex direction="row" gap="sm" justify="center">
            <Avatar radius="md" variant="filled" size="xl" color="violet">
              <Flex direction="column" p="md" ta="center">
                <Text size="lg" fw="bold">
                  56
                </Text>
                <Text size="sm">Total Resources</Text>
              </Flex>
            </Avatar>

            <Avatar radius="md" variant="filled" size="xl" color="yellow">
              <Flex direction="column" p="md" ta="center">
                <Text size="lg" fw="bold">
                  3
                </Text>
                <Text size="sm">Pending Tasks</Text>
              </Flex>
            </Avatar>

            <Avatar radius="md" variant="filled" size="xl" color="red">
              <Flex direction="column" p="md" ta="center">
                <Text size="lg" fw="bold">
                  2
                </Text>
                <Text size="sm">Overdue Tasks</Text>
              </Flex>
            </Avatar>
          </Flex>
        </Paper>
        <Paper p="md" withBorder flex={2}>
          <Flex direction="column" justify="flex-end" gap="sm" h="100%">
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.CATEGORIES })}
            >
              Add New Resource
            </Button>
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.CATEGORIES })}
            >
              Add New Task
            </Button>
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.CATEGORIES })}
              variant="outline"
            >
              Manage Categories
            </Button>
          </Flex>
        </Paper>
      </Flex>
      <Space h="md" />
      <Flex direction={{ base: "column", md: "row" }} gap="md">
        <Paper p="md" withBorder flex={3}>
          <Title size="h4" order={4}>
            My Tasks
          </Title>
          <Text size="sm" c="gray">
            Most immediate tasks.
          </Text>
          <Space h="xs" />
          {mockTasks.slice(0, 3).map((task, index, tasks) => (
            <div key={+index}>
              <Paper p="sm">
                <Flex gap="sm" align="center">
                  <Checkbox defaultChecked={task.checked} />
                  <Paper style={{ flex: 1 }}>
                    <Text size="sm">{task.label}</Text>
                  </Paper>
                  <Badge>{task.category}</Badge>
                </Flex>
              </Paper>
              {index < tasks.length - 1 && <Divider />}
            </div>
          ))}
        </Paper>
        <Paper withBorder p="md" flex={2}>
          <Title size="h4" order={4}>
            My Resources
          </Title>
          <Text size="sm" c="gray">
            Recently added resources.
          </Text>
          <Space h="xs" />
          {mockTasks.map((task, index, tasks) => (
            <div key={+index}>
              <Paper p="sm">
                <Flex gap="sm" align="center">
                  <Paper style={{ flex: 1 }}>
                    <Text size="sm">{task.label}</Text>
                  </Paper>
                  <Badge>{task.category}</Badge>
                </Flex>
              </Paper>
              {index < tasks.length - 1 && <Divider />}
            </div>
          ))}
        </Paper>
      </Flex>
    </>
  );
}
