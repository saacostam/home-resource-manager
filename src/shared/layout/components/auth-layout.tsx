import type { PropsWithChildren } from "react";
import { Logo } from "@/shared/components";
import { Button, Container, Flex, Paper, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import { genRoute, TRouteType } from "@/modules/routing";
import { ChevronLeftIcon } from "@/shared/icons";
import { ThemeToggle } from "@/modules/theme/ui";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container size="xs" my="lg">
      <Flex direction="row" gap="md" justify="space-between" mb="md">
        <Button
          leftSection={
            <ChevronLeftIcon
              height={16}
              width={16}
              style={{ strokeWidth: "2" }}
            />
          }
          size="sm"
          component={Link}
          to={genRoute({ type: TRouteType.LANDING })}
          variant="subtle"
        >
          Landing
        </Button>
        <ThemeToggle />
      </Flex>
      <Paper withBorder p="lg">
        <Link
          to={genRoute({ type: TRouteType.LANDING })}
          style={{ display: "block", margin: "auto", width: "fit-content" }}
        >
          <Logo style={{ height: "56px" }} />
        </Link>
        <Space my="md" />
        {children}
      </Paper>
    </Container>
  );
}
