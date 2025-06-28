import { Logo } from "@/modules/core.components";
import {
  Button,
  Container,
  Paper,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useLogin } from "../hooks";

export function Login() {
  const { onSubmit } = useLogin();

  return (
    <Container size="xs" my="lg">
      <Paper withBorder p="lg">
        <Logo style={{ display: "block", margin: "auto", height: "56px" }} />
        <Space my="md" />
        <Title size="h3" ta="center">
          Login
        </Title>
        <Text size="sm" c="dark" ta="center">
          🌱 Organize. Simplify. Enjoy your space.
        </Text>
        <Space my="sm" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <TextInput size="sm" label="Username" placeholder="Username" />
          <Space h="sm" />
          <TextInput
            size="sm"
            label="Password"
            placeholder="Password"
            type="password"
          />
          <Space h="xl" />
          <Button type="submit" w="100%">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
