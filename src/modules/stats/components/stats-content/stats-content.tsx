import { Flex } from "@mantine/core";
import {
  BellAlertIcon,
  CheckCircleIcon,
  ClockIcon,
  RectangleGroupIcon,
} from "@/modules/icons";
import type { TStats } from "../../types";
import { StatsItem } from "./stats-item";

export interface StatsContentProps {
  stats: TStats;
}

const SHARED_ICONS_PROPS = {
  width: 32,
  height: 32,
};

export function StatsContent({ stats }: StatsContentProps) {
  return (
    <Flex direction={{ base: "column", xs: "row" }} gap="md" justify="center">
      <StatsItem
        bg={stats.pendingTasks > 0 ? "yellow" : "green"}
        content={stats.pendingTasks}
        icon={
          stats.pendingTasks > 0 ? (
            <ClockIcon {...SHARED_ICONS_PROPS} />
          ) : (
            <CheckCircleIcon {...SHARED_ICONS_PROPS} />
          )
        }
        title="Pending Tasks"
      />
      <StatsItem
        title="Overdue Tasks"
        bg={stats.overdueTasks > 0 ? "red" : "green"}
        content={stats.overdueTasks}
        icon={
          stats.overdueTasks > 0 ? (
            <BellAlertIcon {...SHARED_ICONS_PROPS} />
          ) : (
            <CheckCircleIcon {...SHARED_ICONS_PROPS} />
          )
        }
      />
      <StatsItem
        bg="violet"
        content={stats.totalResources}
        icon={<RectangleGroupIcon {...SHARED_ICONS_PROPS} />}
        title="Total Resources"
      />
    </Flex>
  );
}
