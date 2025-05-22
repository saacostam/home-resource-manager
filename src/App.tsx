import "@mantine/core/styles.css";

import {
  Alert,
  Badge,
  Checkbox,
  Flex,
  MantineProvider,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { AppShell } from "./modules/layout";
import { RocketLaunchIcon } from "./modules/icons";

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
        <Paper p="md">
          <Title size="h3" c="violet" order={4}>
            Today&apos;s Tasks
          </Title>
          <Space h="md" />
          <Alert
            variant="light"
            color="blue"
            title="Time to Catch Up!"
            icon={<RocketLaunchIcon />}
          >
            You&apos;re almost there! Just a few tasks left—keep up the great
            work and finish strong.
          </Alert>
          <Space h="xs" />
          {mockTasks.map((task, index) => (
            <Paper key={index} withBorder p="sm" radius="md" mt="xs">
              <Flex gap="sm" align="center">
                <Checkbox color="violet" defaultChecked={task.checked} />
                <Paper style={{ flex: 1 }}>
                  <Text size="sm">{task.label}</Text>
                </Paper>
                <Badge color="violet">{task.category}</Badge>
              </Flex>
            </Paper>
          ))}
        </Paper>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
