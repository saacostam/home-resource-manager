import {
  AppShell as AppShellMantine,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  NavLink,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/modules/auth";
import {
  Cog6ToothIcon,
  HomeModernIcon,
  ListBulletIcon,
  PencilIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@/modules/icons";
import { genRoute, TRouteType } from "@/modules/routing";
import { Logo } from "../../core.components";
import { UserPanelLoader } from "@/modules/user";

export function AppShell() {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { logout } = useAuth();

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) {
      closeMobile();
    }
  }, [closeMobile, pathname]);

  return (
    <AppShellMantine
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: desktopOpened },
      }}
      padding="md"
    >
      <AppShellMantine.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={!desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Link
            to={genRoute({ type: TRouteType.DASHBOARD })}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Logo />
          </Link>
          <Paper ml="auto">
            <UserPanelLoader />
          </Paper>
        </Group>
      </AppShellMantine.Header>
      <AppShellMantine.Navbar p="md">
        <Group>
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.DASHBOARD })}
            label="Dashboard"
            description="Overview of your home at a glance"
            variant="light"
            leftSection={<HomeModernIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.RESOURCES })}
            label="Resources"
            description="Keep track of your home’s assets and items"
            variant="light"
            leftSection={<RectangleGroupIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.TASKS })}
            label="Tasks"
            description="Stay on top of what needs to get done"
            variant="light"
            leftSection={<ListBulletIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.BOARDS })}
            label="Boards"
            description="Jot down quick notes, ideas, and running lists"
            variant="light"
            leftSection={<PencilIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.CATEGORIES })}
            label="Categories"
            description="Organize and customize how things are grouped"
            variant="light"
            leftSection={<TagIcon width={20} height={20} />}
          />
        </Group>
        <Flex direction="column" gap="md" mt="auto">
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.SETTINGS })}
            label="Settings"
            description="Manage your account and preferences"
            variant="light"
            leftSection={<Cog6ToothIcon width={20} height={20} />}
          />
          <Button onClick={logout}>Log Out</Button>
        </Flex>
      </AppShellMantine.Navbar>
      <AppShellMantine.Main>
        <Container>
          <Outlet />
        </Container>
      </AppShellMantine.Main>
    </AppShellMantine>
  );
}
