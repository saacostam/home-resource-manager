import { Alert, Button, Space, TextInput } from "@mantine/core";
import type { TManageBoardForm, useManageBoardForm } from "../hooks";

export interface ManageBoardFormProps {
  action: string;
  form: ReturnType<typeof useManageBoardForm>;
  isPending: boolean;
  onSubmit: (data: TManageBoardForm) => void;
}

export function ManageBoardForm({
  action,
  form,
  isPending,
  onSubmit,
}: ManageBoardFormProps) {
  const errors = form.formState.errors;
  const rootErrorMessage = errors.root?.message;

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <TextInput
        size="sm"
        label="Name"
        placeholder="Name"
        {...form.register("name")}
        error={errors.name?.message}
      />
      {rootErrorMessage && (
        <>
          <Space h="xl" />
          <Alert color="pink" title={rootErrorMessage} />
        </>
      )}
      <Space h="xl" />
      <Button type="submit" w="100%" loading={isPending}>
        {action} Board
      </Button>
    </form>
  );
}
