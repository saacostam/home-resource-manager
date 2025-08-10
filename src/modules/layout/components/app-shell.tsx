import {
  AppShell as AppShellMantine,
  Burger,
  Button,
  Container,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/modules/auth";
import {
  HomeModernIcon,
  ListBulletIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@/modules/icons";
import { genRoute, TRouteType } from "@/modules/routing";
import { Logo } from "../../core.components";

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
            to={genRoute({ type: TRouteType.TASKS })}
            label="Tasks"
            description="Stay on top of what needs to get done"
            variant="light"
            leftSection={<ListBulletIcon width={20} height={20} />}
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
            to={genRoute({ type: TRouteType.CATEGORIES })}
            label="Categories"
            description="Organize and customize how things are grouped"
            variant="light"
            leftSection={<TagIcon width={20} height={20} />}
          />
        </Group>
        <Button mt="auto" onClick={logout}>
          Log Out
        </Button>
      </AppShellMantine.Navbar>
      <AppShellMantine.Main>
        <Container>
          <Outlet />
        </Container>
      </AppShellMantine.Main>
    </AppShellMantine>
  );
}
