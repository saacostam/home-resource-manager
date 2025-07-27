import { useDisclosure } from "@mantine/hooks";
import {
  AppShell as MantineAppShell,
  Burger,
  Group,
  Container,
  Button,
} from "@mantine/core";
import { FeatureInProgressMessage, Logo } from "../../core.components";
import { useAuth } from "@/modules/auth";
import { Link, Outlet } from "react-router-dom";
import { genRoute, TRouteType } from "@/modules/routing";

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
        <FeatureInProgressMessage />
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
