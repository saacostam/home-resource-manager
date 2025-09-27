import { NumberInput, Select, Space } from "@mantine/core";
import { useEffect, useState } from "react";
import type { TCadence } from "@/modules/core.types";
import { StringUtils } from "@/modules/string";
import {
  cadenceTypeChangeHandler,
  MONTH_DAYS,
  MONTH_WEEKS,
  TASK_CADENCE_TYPES,
  TIME_FRAMES,
  WEEK_DAYS,
} from "../constants";
import type { useManageTaskForm } from "../hooks";

export interface ManageTaskFormCadenceProps {
  form: ReturnType<typeof useManageTaskForm>;
  cadence: TCadence;
}

export function ManageTaskFormCadence({
  form,
  cadence,
}: ManageTaskFormCadenceProps) {
  const { type } = cadence;

  // WARN: Hidden Type - It does not actually update the form state, but rather
  // it triggers an effect that runs a handler that sets default to the form.
  const [hiddenType, setHiddenType] = useState(type);
  useEffect(() => {
    if (hiddenType === cadence.type) return; // Only update if the types has changed.
    const handler = cadenceTypeChangeHandler[hiddenType];
    handler(form);
  }, [cadence.type, form, hiddenType]);

  return (
    <>
      <Select
        size="sm"
        label="Cadence"
        placeholder="Cadence"
        data={TASK_CADENCE_TYPES.map((c) => ({
          value: c,
          label: StringUtils.prettifyKebabCase(c),
        }))}
        value={hiddenType}
        onChange={(v) => {
          if (v) {
            // WARN: Asserting the type here because the options provided have
            // the correct value type. In case of updates, please validate.
            setHiddenType(v as TCadence["type"]);
          }
        }}
        error={form.formState.errors.cadence?.message}
        nothingFoundMessage="Nothing found..."
      />
      <Space h="sm" />
      {type === "daily" && null}
      {type === "monthly-by-day" && (
        <>
          <Select
            size="sm"
            label="Day of the Month"
            placeholder="Day of the Month"
            data={MONTH_DAYS.map((c) => ({
              value: c.value,
              label: c.label,
            }))}
            {...form.register("cadence.dayOfTheMonth")}
            value={String(form.watch("cadence.dayOfTheMonth"))}
            onChange={(v) => {
              const n = Number(v);
              if (!Number.isNaN(n)) form.setValue("cadence.dayOfTheMonth", n);
            }}
            // error={form.formState.errors.cadence?.dayOfTheMonth?.message}
            nothingFoundMessage="Nothing found..."
          />
          <Space h="sm" />
        </>
      )}
      {type === "monthly-by-weekday" && (
        <>
          <Select
            size="sm"
            label="Week of the Month"
            placeholder="Week of the Month"
            data={MONTH_WEEKS.map((c) => ({
              value: c.value,
              label: c.label,
            }))}
            {...form.register("cadence.weekOfTheMonth")}
            value={String(form.watch("cadence.weekOfTheMonth"))}
            onChange={(v) => {
              const n = Number(v);
              if (!Number.isNaN(n)) form.setValue("cadence.weekOfTheMonth", n);
            }}
            // error={form.formState.errors.cadence?.weekOfTheMonth?.message}
            nothingFoundMessage="Nothing found..."
          />
          <Space h="sm" />
          <Select
            size="sm"
            label="Day of the Week"
            placeholder="Day of the Week"
            data={WEEK_DAYS.map((c) => ({
              value: c.value,
              label: c.label,
            }))}
            {...form.register("cadence.dayOfTheWeek")}
            value={String(form.watch("cadence.dayOfTheWeek"))}
            onChange={(v) => {
              const n = Number(v);
              if (!Number.isNaN(n)) form.setValue("cadence.dayOfTheWeek", n);
            }}
            // error={form.formState.errors.cadence?.dayOfTheWeek?.message}
            nothingFoundMessage="Nothing found..."
          />
          <Space h="sm" />
        </>
      )}
      {type === "one-time" && null}
      {type === "time-based-recurrence" && (
        <>
          <Select
            size="sm"
            label="Time Frame"
            placeholder="Time Frame"
            data={TIME_FRAMES.map((c) => ({
              value: c,
              label: c,
            }))}
            {...form.register("cadence.timeFrame")}
            value={form.watch("cadence.timeFrame")}
            onChange={(v) => {
              // WARN: Asserting the type here because the options provided have
              // the correct value type. In case of updates, please validate.
              if (v)
                form.setValue(
                  "cadence.timeFrame",
                  v as (typeof TIME_FRAMES)[0],
                );
            }}
            // error={form.formState.errors.cadence?.timeFrame?.message}
            nothingFoundMessage="Nothing found..."
          />
          <Space h="sm" />
          <NumberInput
            size="sm"
            label="Amount"
            placeholder="Amount"
            {...form.register("cadence.amount")}
            value={form.watch("cadence.amount")}
            onChange={(v) => {
              const nn = Number(v);
              form.setValue("cadence.amount", Number.isNaN(nn) ? 0 : nn);
            }}
            min={1}
            max={100}
            // error={form.formState.errors.cadence?.amount?.message}
          />
          <Space h="sm" />
        </>
      )}
      {type === "weekly" && (
        <>
          <Select
            size="sm"
            label="Day of the Week"
            placeholder="Day of the Week"
            data={WEEK_DAYS.map((c) => ({
              value: c.value,
              label: c.label,
            }))}
            {...form.register("cadence.dayOfTheWeek")}
            value={String(form.watch("cadence.dayOfTheWeek"))}
            onChange={(v) => {
              const n = Number(v);
              if (!Number.isNaN(n)) form.setValue("cadence.dayOfTheWeek", n);
            }}
            // error={form.formState.errors.cadence?.dayOfTheWeek?.message}
            nothingFoundMessage="Nothing found..."
          />
          <Space h="sm" />
        </>
      )}
      {type === "yearly-by-day" && null}
    </>
  );
}
