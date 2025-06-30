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

  return (
    <AuthLayout>
      <Title size="h3" ta="center">
        Sign Up
      </Title>
      <Text size="sm" c="dark" ta="center">
        🏡 Manage. Streamline. Love your home.
      </Text>
      <Space my="xl" />
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Grid gutter="sm">
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput
              size="sm"
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput
              size="sm"
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
            />
          </Grid.Col>
        </Grid>
        <Space h="sm" />
        <TextInput
          size="sm"
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <Space h="sm" />
        <PasswordInput
          size="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
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
