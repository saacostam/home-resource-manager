import {
  Alert,
  Button,
  Grid,
  PasswordInput,
  Select,
  Space,
  TextInput,
} from "@mantine/core";
import {
  useFormatTimezoneOptions,
  type TCountryTimezone,
} from "@/modules/timezones";
import { useSignup } from "../hooks";

export interface SignupContentProps {
  defaultTimezone: string;
  timezones:
    | {
        type: "available";
        data: TCountryTimezone[];
      }
    | {
        type: "unavailable";
      };
}

export function SignupContent({
  defaultTimezone,
  timezones,
}: SignupContentProps) {
  const { form, isLoading, onSubmit } = useSignup({ defaultTimezone });
  const { handleSubmit } = form;

  const { timezonesData } = useFormatTimezoneOptions({
    countryTimezones: timezones.type === "available" ? timezones.data : [],
  });

  const errors = form.formState.errors;
  const rootErrorMessage = errors.root?.message;

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gutter="sm">
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <TextInput
            size="sm"
            label="First Name"
            placeholder="First Name"
            {...form.register("firstName")}
            error={errors.firstName?.message}
          />
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <TextInput
            size="sm"
            label="Last Name"
            placeholder="Last Name"
            {...form.register("lastName")}
            error={errors.lastName?.message}
          />
        </Grid.Col>
      </Grid>
      <Space h="sm" />
      <TextInput
        size="sm"
        label="Username"
        placeholder="Username"
        {...form.register("username")}
        error={errors.username?.message}
      />
      <Space h="sm" />
      <PasswordInput
        size="sm"
        label="Password"
        placeholder="Password"
        {...form.register("password")}
        error={errors.password?.message}
      />
      <Space h="sm" />
      <Select
        size="sm"
        label="Timezone"
        placeholder="Timezone"
        data={timezonesData}
        {...form.register("timezone")}
        onChange={(v) => {
          if (v) form.setValue("timezone", v);
        }}
        value={form.watch("timezone")}
        error={errors.timezone?.message}
        disabled={timezones.type === "unavailable"}
        searchable
      />
      {rootErrorMessage && (
        <>
          <Space h="xl" />
          <Alert color="pink" title={rootErrorMessage} />
        </>
      )}
      <Space h="xl" />
      <Button type="submit" w="100%" loading={isLoading}>
        Sign Up
      </Button>
    </form>
  );
}
