import { Logo } from "@/modules/core.components";
import { genRoute, TRouteType } from "@/modules/routing";
import {
  Button,
  Container,
  Divider,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <Container size="sm" py="xl" ta="center">
      <Paper p="lg" withBorder>
        <Logo />
        <Divider my="xs" />
        <Title size="h2" order={4}>
          Page Not Found
        </Title>
        <Space h="md" />
        <Title size="h1" order={5} style={{ fontSize: "48px" }}>
          404
        </Title>
        <Space h="xs" />
        <Text size="sm" fw={500} c="dark">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </Text>
        <Space h="md" />
        <Button
          component={Link}
          to={genRoute({ type: TRouteType.DASHBOARD })}
          mx="auto"
          size="sm"
        >
          Back To Home
        </Button>
      </Paper>
    </Container>
  );
}
