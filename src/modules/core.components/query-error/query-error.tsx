import { Alert, Button, Text } from "@mantine/core";
import { ExclamationCircleIcon } from "@/modules/icons";

export interface QueryErrorProps {
  title: string;
  description?: string;
  retry?: {
    onClick: () => void;
    isPending: boolean;
  };
}

export function QueryError({
  title,
  description = "This may be due to a network issue or temporary server downtime. Please check your connection or try again in a moment.",
  retry,
}: QueryErrorProps) {
  return (
    <Alert color="pink" title={title} icon={<ExclamationCircleIcon />}>
      <Text size="sm" mb="md">
        {description}
      </Text>
      {retry && (
        <Button
          color="pink"
          onClick={retry.onClick}
          loading={retry.isPending}
          size="xs"
        >
          Retry
        </Button>
      )}
    </Alert>
  );
}
