import { AuthLayout } from "@/modules/layout";
import { genRoute, TRouteType } from "@/modules/routing";
import {
  Anchor,
  Button,
  Grid,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks";

export function Signup() {
  const { form, isLoading, onSubmit } = useSignup();
  const { handleSubmit } = form;

  return (
    <AuthLayout>
      <Title size="h3" ta="center">
        Sign Up
      </Title>
      <Text size="sm" c="dark" ta="center">
        🏡 Manage. Streamline. Love your home.
      </Text>
      <Space my="xl" />
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gutter="sm">
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput
              size="sm"
              label="First Name"
              placeholder="First Name"
              {...form.register("firstName")}
              error={form.getFieldState("firstName").error?.message}
            />
          </Grid.Col>
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput
              size="sm"
              label="Last Name"
              placeholder="Last Name"
              {...form.register("lastName")}
              error={form.getFieldState("lastName").error?.message}
            />
          </Grid.Col>
        </Grid>
        <Space h="sm" />
        <TextInput
          size="sm"
          label="Username"
          placeholder="Username"
          {...form.register("username")}
          error={form.getFieldState("username").error?.message}
        />
        <Space h="sm" />
        <PasswordInput
          size="sm"
          label="Password"
          placeholder="Password"
          {...form.register("password")}
          error={form.getFieldState("password").error?.message}
        />
        <Space h="xl" />
        <Button type="submit" w="100%" loading={isLoading}>
          Sign Up
        </Button>
      </form>
      <Space h="xl" />
      <Text size="sm" c="dark" ta="center">
        Already have an account?{" "}
        <Anchor component={Link} to={genRoute({ type: TRouteType.LOGIN })}>
          Login
        </Anchor>
      </Text>
      <Space h="md" />
    </AuthLayout>
  );
}
