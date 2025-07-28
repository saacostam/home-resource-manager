import {
  AppShell as MantineAppShell,
  Burger,
  Button,
  Container,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "@/modules/auth";
import { HomeModernIcon, RectangleGroupIcon, TagIcon } from "@/modules/icons";
import { genRoute, TRouteType } from "@/modules/routing";
import { Logo } from "../../core.components";

export function AppShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { logout } = useAuth();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: desktopOpened },
      }}
      padding="md"
    >
      <MantineAppShell.Header>
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
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        <Group>
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.DASHBOARD })}
            label="Dashboard"
            description="Overview of your house"
            variant="light"
            leftSection={<HomeModernIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.CATEGORIES })}
            label="Categories"
            description="Customize grouping"
            variant="light"
            leftSection={<TagIcon width={20} height={20} />}
          />
          <NavLink
            component={Link}
            to={genRoute({ type: TRouteType.RESOURCES })}
            label="Resources"
            description="Track your house's assets"
            variant="light"
            leftSection={<RectangleGroupIcon width={20} height={20} />}
          />
        </Group>
        <Button mt="auto" onClick={logout}>
          Log Out
        </Button>
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>
        <Container>
          <Outlet />
        </Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
