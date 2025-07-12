import {
  Alert,
  Anchor,
  Button,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useLogin } from "../hooks";
import { AuthLayout } from "@/modules/layout";
import { genRoute, TRouteType } from "@/modules/routing";
import { Link } from "react-router-dom";

export function Login() {
  const { form, isLoading, onSubmit } = useLogin();

  const errors = form.formState.errors;
  const rootErrorMessage = errors.root?.message;

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
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <TextInput
          size="sm"
          label="Username"
          placeholder="Username"
          {...form.register("username")}
          error={errors.username?.message}
        />
        <Space h="sm" />
        <PasswordInput
          size="sm"
          label="Password"
          placeholder="Password"
          {...form.register("password")}
          error={errors.password?.message}
        />
        {rootErrorMessage && (
          <>
            <Space h="xl" />
            <Alert color="pink" title={rootErrorMessage} />
          </>
        )}
        <Space h="xl" />
        <Button type="submit" w="100%" loading={isLoading}>
          Login
        </Button>
      </form>
      <Space h="xl" />
      <Text size="sm" c="dark" ta="center">
        Don't have an account?{" "}
        <Anchor component={Link} to={genRoute({ type: TRouteType.SIGNUP })}>
          Sign up
        </Anchor>
      </Text>
      <Space h="md" />
    </AuthLayout>
  );
}
