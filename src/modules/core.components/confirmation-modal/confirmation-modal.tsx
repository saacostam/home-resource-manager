import { Button, Flex, Text } from "@mantine/core";

export interface ConfirmationModalProps {
  isCancelationPrimary?: boolean;
  isPending: boolean;
  mainLabel: string;
  onCancel: () => void;
  onClickMain: () => void;
  verb: string;
}

export function ConfirmationModal({
  isCancelationPrimary,
  isPending,
  mainLabel,
  onCancel,
  onClickMain,
  verb,
}: ConfirmationModalProps) {
  return (
    <>
      <Text>Are you sure you want to {verb}?</Text>
      <Flex justify="end" gap="sm" mt="md" direction="row">
        <Button
          color="violet"
          onClick={onCancel}
          disabled={isPending}
          variant={isCancelationPrimary ? "filled" : "outline"}
        >
          Cancel
        </Button>
        <Button
          color="violet"
          onClick={onClickMain}
          loading={isPending}
          variant={!isCancelationPrimary ? "filled" : "outline"}
        >
          {mainLabel}
        </Button>
      </Flex>
    </>
  );
}
