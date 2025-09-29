import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { useUserPanelLoader } from "../hooks";
import { UserPanelContent } from "./user-panel-content";
import { Link } from "react-router-dom";
import { ArrowRightStartOnRectangleIcon, Cog6ToothIcon } from "@/modules/icons";
import { useAuth } from "@/modules/auth";
import { genRoute, TRouteType } from "@/modules/routing";

export function UserPanelLoader() {
  const { logout } = useAuth();
  const { status, data } = useUserPanelLoader();

  return (
    <Menu trigger="hover">
      <Menu.Target>
        <UnstyledButton>
          {status === "success" ? (
            <UserPanelContent user={data} />
          ) : (
            <Avatar color="violet" />
          )}
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          to={genRoute({ type: TRouteType.SETTINGS })}
          leftSection={<Cog6ToothIcon width={16} height={16} />}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          leftSection={
            <ArrowRightStartOnRectangleIcon width={16} height={16} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
