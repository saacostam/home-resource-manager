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

export function Signup() {
  return (
    <AuthLayout>
      <Title size="h3" ta="center">
        Sign Up
      </Title>
      <Text size="sm" c="dark" ta="center">
        🏡 Manage. Streamline. Love your home.
      </Text>
      <Space my="xl" />
      <form>
        <Grid gutter="sm">
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput size="sm" label="First Name" placeholder="First Name" />
          </Grid.Col>
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <TextInput size="sm" label="Last Name" placeholder="Last Name" />
          </Grid.Col>
        </Grid>
        <Space h="sm" />
        <TextInput size="sm" label="Username" placeholder="Username" />
        <Space h="sm" />
        <PasswordInput size="sm" label="Password" placeholder="Password" />
        <Space h="xl" />
        <Button type="submit" w="100%">
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
