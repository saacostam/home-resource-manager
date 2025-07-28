import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { genRoute, TRouteType } from "@/modules/routing";

export function ManageResourcesPage() {
  return (
    <Breadcrumbs>
      <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
        Dashboard
      </Anchor>
      <Text c="violet">Resources</Text>
    </Breadcrumbs>
  );
}
