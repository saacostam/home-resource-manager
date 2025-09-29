import { Anchor, Space, Text, Title } from "@mantine/core";
import { AuthLayout } from "@/modules/layout";
import { Link } from "react-router-dom";
import { useSignupLoader } from "../hooks";
import { SignupContent } from "./signup-content";
import { SignupSkeleton } from "./signup-skeleton";
import { genRoute, TRouteType } from "@/modules/routing";

export function SignupLoader() {
  const { status, data } = useSignupLoader();

  return (
    <AuthLayout>
      <Title size="h3" ta="center">
        Sign Up
      </Title>
      <Text size="sm" c="dark" ta="center">
        🏡 Manage. Streamline. Love your home.
      </Text>
      <Space my="xl" />
      {status === "error" && (
        <SignupContent timezones={{ type: "unavailable" }} />
      )}
      {status === "success" && (
        <SignupContent timezones={{ type: "available", data }} />
      )}
      {status === "loading" && <SignupSkeleton />}
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
