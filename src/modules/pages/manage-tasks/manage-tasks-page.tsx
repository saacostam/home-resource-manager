import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { TasksTable } from "@/modules/manage-tasks/tasks-table";
import { genRoute, TRouteType } from "@/modules/routing";

export function ManageTasksPage() {
  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
          Dashboard
        </Anchor>
        <Text c="violet">Tasks</Text>
      </Breadcrumbs>
      <TasksTable />
    </>
  );
}
