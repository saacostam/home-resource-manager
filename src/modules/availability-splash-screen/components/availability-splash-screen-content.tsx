import { Logo } from "@/modules/core.components";
import { Container, Loader, Paper, Space, Text, Title } from "@mantine/core";

export interface AvailabilitySplashScreenContentProps {
  isTakingLongerThanExpected: boolean;
}

export function AvailabilitySplashScreenContent({
  isTakingLongerThanExpected,
}: AvailabilitySplashScreenContentProps) {
  return (
    <Container size="xs" my="lg">
      <Paper withBorder p="lg">
        <Logo style={{ display: "block", margin: "auto", height: "72px" }} />
        <Space h="md" />
        <Title size="h3" ta="center">
          Connecting to your space...
        </Title>
        <Space h="xs" />
        <Text size="sm" c="dark" ta="center">
          {isTakingLongerThanExpected
            ? "🌱 It's taking a little longer than usual — thanks for your patience while we finish getting things ready."
            : "🚀 Our servers are starting — we'll be with you in a moment."}
        </Text>
        <Space h="md" />
        <Loader mx="auto" size="lg" type="dots" />
      </Paper>
    </Container>
  );
}
