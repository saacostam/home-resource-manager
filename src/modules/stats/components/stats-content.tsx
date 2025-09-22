import { Card, Flex, Text } from "@mantine/core";
import {
  BellAlertIcon,
  CheckCircleIcon,
  ClockIcon,
  RectangleGroupIcon,
} from "@/modules/icons";
import type { TStats } from "../types";

export interface StatsContentProps {
  stats: TStats;
}

const SHARED_ICONS_PROPS = {
  width: 32,
  height: 32,
  style: {
    margin: "0em 0em 0em auto",
  },
};

export function StatsContent({ stats }: StatsContentProps) {
  return (
    <Flex direction={{ base: "column", xs: "row" }} gap="md" justify="center">
      <Card bg="violet" w="100%" style={{ color: "white" }}>
        <Text size="md" fw="bold">
          Total Resources
        </Text>
        <Text style={{ fontSize: "2em" }}>{stats.totalResources}</Text>
        <RectangleGroupIcon {...SHARED_ICONS_PROPS} />
      </Card>

      <Card
        bg={stats.pendingTasks > 0 ? "yellow" : "green"}
        w="100%"
        style={{ color: "white" }}
      >
        <Text size="md" fw="bold">
          Pending Tasks
        </Text>
        <Text style={{ fontSize: "2em" }}>{stats.pendingTasks}</Text>
        {stats.pendingTasks > 0 ? (
          <ClockIcon {...SHARED_ICONS_PROPS} />
        ) : (
          <CheckCircleIcon {...SHARED_ICONS_PROPS} />
        )}
      </Card>

      <Card
        bg={stats.overdueTasks > 0 ? "red" : "green"}
        w="100%"
        style={{ color: "white" }}
      >
        <Text size="md" fw="bold">
          Overdue Tasks
        </Text>
        <Text style={{ fontSize: "2em" }}>{stats.overdueTasks}</Text>
        {stats.overdueTasks > 0 ? (
          <BellAlertIcon {...SHARED_ICONS_PROPS} />
        ) : (
          <CheckCircleIcon {...SHARED_ICONS_PROPS} />
        )}
      </Card>
    </Flex>
  );
}
