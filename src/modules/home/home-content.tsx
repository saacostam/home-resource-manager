import {
  Badge,
  Button,
  Card,
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
            </Card>

            <Card bg="red" variant="filled" w="100%" style={{ color: "white" }}>
              <Text size="md" fw="bold">
                Overdue Tasks
              </Text>
              <Text style={{ fontSize: "2em" }}>2</Text>
            </Card>
          </Flex>
        </Paper>
        <Paper p="md" withBorder flex={2}>
          <Flex direction="column" justify="flex-end" gap="sm" h="100%">
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.RESOURCES })}
            >
              Add New Resource
            </Button>
            <Button
              size="sm"
              component={Link}
              to={genRoute({ type: TRouteType.TASKS })}
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
          <Title size="h3" order={4}>
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
          <Title size="h3" order={4}>
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
