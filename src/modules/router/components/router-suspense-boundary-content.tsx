import { Logo } from "@/modules/core.components";
import { Container, Loader, Paper, Space, Text, Title } from "@mantine/core";

export function RouterSuspenseBoundaryContent() {
  return (
    <Container size="xs" my="lg">
      <Paper withBorder p="lg">
        <Logo style={{ display: "block", margin: "auto", height: "72px" }} />
        <Space my="md" />
        <Title size="h3" ta="center">
          Loading the app...
        </Title>
        <Space h="xs" />
        <Text size="sm" c="dark" ta="center">
          ⏳ Just a moment…
        </Text>
        <Space h="md" />
        <Loader mx="auto" size="lg" type="dots" />
      </Paper>
    </Container>
  );
}
