import type { PropsWithChildren } from "react";
import { Logo } from "@/modules/core.components";
import { Container, Paper, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import { genRoute, TRouteType } from "@/modules/routing";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container size="xs" my="lg">
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
