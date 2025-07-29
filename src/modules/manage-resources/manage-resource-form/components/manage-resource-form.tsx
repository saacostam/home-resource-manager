import {
  Alert,
  Button,
  NumberInput,
  Select,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import type { TGetAllCategoriesResponse } from "@/modules/core.fetching-hooks";
import type { TManageResourceForm, useManageResourceForm } from "../hooks";

export interface ManageResourceFormProps {
  action: string;
  categories: TGetAllCategoriesResponse;
  form: ReturnType<typeof useManageResourceForm>;
  isPending: boolean;
  onSubmit: (data: TManageResourceForm) => void;
}

export function ManageResourceForm({
  action,
  categories,
  form,
  isPending,
  onSubmit,
}: ManageResourceFormProps) {
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
      <Space h="sm" />
      <NumberInput
        size="sm"
        label="Quantity"
        placeholder="Quantity"
        {...form.register("quantity")}
        value={form.watch("quantity")}
        onChange={(v) => {
          const nn = Number(v);
          form.setValue("quantity", Number.isNaN(nn) ? 0 : nn);
        }}
        min={0}
        max={undefined}
        error={errors.quantity?.message}
      />
      <Space h="sm" />
      <Select
        size="sm"
        label="Category"
        placeholder="Category"
        data={categories.map((c) => ({
          value: c.id,
          label: c.name,
        }))}
        {...form.register("categoryId")}
        onChange={(v) => {
          if (v) form.setValue("categoryId", v);
        }}
        error={errors.categoryId?.message}
      />
      {rootErrorMessage && (
        <>
          <Space h="xl" />
          <Alert color="pink" title={rootErrorMessage} />
        </>
      )}
      <Space h="xl" />
      <Button type="submit" w="100%" loading={isPending}>
        {action} Resource
      </Button>
    </form>
  );
}
