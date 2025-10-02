import { genRoute, TRouteType } from "@/modules/routing";
import { SettingsLoader } from "@/modules/settings";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
          Dashboard
        </Anchor>
        <Text c="violet">Settings</Text>
      </Breadcrumbs>
      <SettingsLoader />
    </>
  );
}
