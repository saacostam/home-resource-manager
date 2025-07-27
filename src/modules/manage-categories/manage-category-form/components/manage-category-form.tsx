import { Alert, Button, Space, Textarea, TextInput } from "@mantine/core";
import type {
  TManageCategoryForm,
  useManageCategoryForm,
} from "../../manage-category-form";

export interface ManageCategoryFormProps {
  action: string;
  form: ReturnType<typeof useManageCategoryForm>;
  isPending: boolean;
  onSubmit: (data: TManageCategoryForm) => void;
}

export function ManageCategoryForm({
  action,
  form,
  isPending,
  onSubmit,
}: ManageCategoryFormProps) {
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
      <Space h="sm" />
      <Textarea
        size="sm"
        label="Description"
        placeholder="Description"
        {...form.register("description")}
        error={errors.description?.message}
        autosize
        minRows={2}
        maxRows={5}
      />
      {rootErrorMessage && (
        <>
          <Space h="xl" />
          <Alert color="pink" title={rootErrorMessage} />
        </>
      )}
      <Space h="xl" />
      <Button type="submit" w="100%" loading={isPending}>
        {action} Category
      </Button>
    </form>
  );
}
