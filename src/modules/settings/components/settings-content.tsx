import { isAxiosError } from "axios";
import { useCallback } from "react";
import { Alert, Button, Flex, Select, Space } from "@mantine/core";
import { handleApiErrors } from "@/modules/forms";
import { notifications } from "@mantine/notifications";
import {
  useFormatTimezoneOptions,
  type TCountryTimezone,
} from "@/modules/timezones";
import { useMutationUpdateSettings } from "@/modules/user";
import { useSettingsForm, type TSettingForm } from "../hooks";
import type { TSettings } from "../types";

export interface SettingsContentProps {
  countryTimezones: TCountryTimezone[];
  settings: TSettings;
}

export function SettingsContent({
  countryTimezones,
  settings,
}: SettingsContentProps) {
  const updateSettings = useMutationUpdateSettings();

  const { timezonesData } = useFormatTimezoneOptions({ countryTimezones });

  const form = useSettingsForm({
    defaultValues: {
      timezone: settings.timezone,
    },
  });

  const onSubmit = useCallback(
    (data: TSettingForm) => {
      updateSettings.mutate(data, {
        onSuccess: () => {
          notifications.show({
            color: "green",
            title: "Updated",
            message: "Settings updated successfully",
          });
        },
        onError: (error) => {
          if (!isAxiosError(error)) {
            form.setError("root", { message: "Something went wrong!" });
            return;
          }

          handleApiErrors({
            axiosError: error,
            setError: form.setError,
          });
        },
      });
    },
    [form, updateSettings],
  );

  const errors = form.formState.errors;
  const rootErrorMessage = errors.root?.message;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Select
          size="sm"
          label="Timezone"
          {...form.register("timezone")}
          onChange={(v) => {
            if (v) form.setValue("timezone", v);
          }}
          value={form.watch("timezone")}
          data={timezonesData}
          error={errors.timezone?.message}
          searchable
        />
        {rootErrorMessage && (
          <>
            <Space h="xl" />
            <Alert color="pink" title={rootErrorMessage} />
          </>
        )}
        <Space h="xl" />
        <Flex justify="end">
          <Button type="submit" loading={updateSettings.isPending}>
            Update
          </Button>
        </Flex>
      </form>
    </>
  );
}
