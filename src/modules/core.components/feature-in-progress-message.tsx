import { Alert, Space, Text } from "@mantine/core";
import { RocketLaunchIcon } from "../icons";

export function FeatureInProgressMessage() {
  return (
    <Alert
      variant="light"
      color="yellow"
      title="Feature in Progress"
      icon={<RocketLaunchIcon />}
    >
      <Text size="sm">This feature is currently being developed.</Text>
      <Space h="sm" />
      <Text size="sm">Be sure to check back soon!</Text>
    </Alert>
  );
}
