import {
  Button,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useLogin } from "../hooks";
import { AuthLayout } from "@/modules/layout";

export function Login() {
  const { onSubmit } = useLogin();

  return (
    <AuthLayout>
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
        <PasswordInput size="sm" label="Password" placeholder="Password" />
        <Space h="xl" />
        <Button type="submit" w="100%">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}
