import { useDisclosure } from "@mantine/hooks";
import {
  AppShell as MantineAppShell,
  Burger,
  Group,
  Skeleton,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Logo } from "../../core.components";

export function AppShell({}: PropsWithChildren) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
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
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Logo />
        </Group>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>Main</MantineAppShell.Main>
    </MantineAppShell>
  );
}
