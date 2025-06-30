import type { PropsWithChildren } from "react";
import { Logo } from "@/modules/core.components";
import { Container, Paper, Space } from "@mantine/core";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container size="xs" my="lg">
      <Paper withBorder p="lg">
        <Logo style={{ display: "block", margin: "auto", height: "56px" }} />
        <Space my="md" />
        {children}
      </Paper>
    </Container>
  );
}
