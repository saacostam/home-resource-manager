import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { useUserPanelLoader } from "../hooks";
import { UserPanelContent } from "./user-panel-content";
import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  MoonIcon,
  SunIcon,
} from "@/modules/icons";
import { useAuth } from "@/modules/auth";
import { genRoute, TRouteType } from "@/modules/routing";
import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { useToggleTheme } from "@/modules/theme/app";

export function UserPanelLoader() {
  const { logout } = useAuth();
  const { theme } = useAdapters();
  const { status, data } = useUserPanelLoader();

  const ThemeIcon = theme.theme === IThemeVariant.DARK ? SunIcon : MoonIcon;
  const { toggleTheme } = useToggleTheme();

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
          leftSection={<ThemeIcon width={16} height={16} />}
          onClick={toggleTheme}
        >
          Appearance
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
