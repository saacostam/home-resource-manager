import "@mantine/core/styles.css";

import {
  Badge,
  Checkbox,
  Divider,
  Flex,
  MantineProvider,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { AppShell } from "./modules/layout";

const mockTasks = [
  { label: "Water the Plants", category: "Garden", checked: true },
  { label: "Grocery shopping", category: "Personal", checked: false },
  { label: "Fix bike tire", category: "Maintenance", checked: false },
  { label: "Stretch for 10 min", category: "Health", checked: false },
];

function App() {
  return (
    <MantineProvider>
      <AppShell>
        <Title size="h2" order={4}>
          Dashboard
        </Title>
        <Text size="sm" c="gray" fw={500}>
          {new Date().toDateString()}
        </Text>
        <Space h="md" />
        <Paper p="md" withBorder>
          <Title size="h4" order={4}>
            To-Do
          </Title>
          <Space h="xs" />
          {mockTasks.map((task, index, tasks) => (
            <div key={index}>
              <Paper p="sm">
                <Flex gap="sm" align="center">
                  <Checkbox color="indigo" defaultChecked={task.checked} />
                  <Paper style={{ flex: 1 }}>
                    <Text size="sm">{task.label}</Text>
                  </Paper>
                  <Badge color="indigo">{task.category}</Badge>
                </Flex>
              </Paper>
              {index < tasks.length - 1 && <Divider />}
            </div>
          ))}
        </Paper>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
