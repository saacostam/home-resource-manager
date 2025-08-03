import {
  Alert,
  Button,
  Divider,
  MultiSelect,
  Select,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import type {
  TGetAllCategoriesResponse,
  TGetAllResourcesResponse,
} from "@/modules/core.fetching-hooks";
import type { TManageTaskForm, useManageTaskForm } from "../hooks";
import { ManageTaskFormCadence } from "./manage-task-cadence-form";

export interface ManageTaskFormProps {
  action: string;
  categories: TGetAllCategoriesResponse;
  form: ReturnType<typeof useManageTaskForm>;
  isPending: boolean;
  onSubmit: (data: TManageTaskForm) => void;
  resources: TGetAllResourcesResponse;
}

export function ManageTaskForm({
  action,
  categories,
  form,
  isPending,
  onSubmit,
  resources,
}: ManageTaskFormProps) {
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
      <MultiSelect
        size="sm"
        label="Resources"
        placeholder="Resources"
        data={resources.map((c) => ({
          value: c.id,
          label: c.name,
        }))}
        {...form.register("resourcesIds")}
        value={form.watch("resourcesIds") ?? []}
        onChange={(v) => {
          form.setValue("resourcesIds", v);
        }}
        error={errors.resourcesIds?.message}
        nothingFoundMessage="Nothing found..."
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
        value={form.watch("categoryId")}
        onChange={(v) => {
          form.setValue("categoryId", v);
        }}
        error={errors.categoryId?.message}
        nothingFoundMessage="Nothing found..."
      />
      <Divider my="sm" />
      <ManageTaskFormCadence form={form} cadence={form.watch("cadence")} />
      <DatePickerInput
        label="Starting Date"
        placeholder="Pick Starting Date"
        {...form.register("anchorDate")}
        value={form.watch("anchorDate")}
        onChange={(v) => {
          form.setValue("anchorDate", v);
        }}
        error={errors.anchorDate?.message}
      />
      {rootErrorMessage && (
        <>
          <Space h="xl" />
          <Alert color="pink" title={rootErrorMessage} />
        </>
      )}
      <Space h="xl" />
      <Button type="submit" w="100%" loading={isPending}>
        {action} Task
      </Button>
    </form>
  );
}
