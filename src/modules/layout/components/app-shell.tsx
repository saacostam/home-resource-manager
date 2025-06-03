import { useDisclosure } from "@mantine/hooks";
import {
  AppShell as MantineAppShell,
  Burger,
  Group,
  Container,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { FeatureInProgressMessage, Logo } from "../../core.components";

export function AppShell({ children }: PropsWithChildren) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

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
          <Logo />
        </Group>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        <FeatureInProgressMessage />
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>
        <Container>{children}</Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
