import { Alert, Button, Space, Textarea, TextInput } from "@mantine/core";
import { useCreateCategory } from "../hooks";

export interface CreateCategoryProps {
  onClose: () => void;
}

export function CreateCategory({ onClose }: CreateCategoryProps) {
  const { form, isPending, onSubmit } = useCreateCategory({ onClose });

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
        Create Category
      </Button>
    </form>
  );
}
