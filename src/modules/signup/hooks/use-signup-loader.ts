import { useMemo } from "react";
import { TimezonesUtils, useQueryAllTimezones } from "@/modules/timezones";

export function useSignupLoader() {
  const defaultTimezone = useMemo(() => TimezonesUtils.guessDefault(), []);
  const queryAllTimezones = useQueryAllTimezones();

  return useMemo(
    () =>
      queryAllTimezones.isLoading
        ? { status: "loading" as const }
        : queryAllTimezones.isSuccess
          ? {
              status: "success" as const,
              data: queryAllTimezones.data,
              defaultTimezone,
            }
          : {
              status: "error" as const,
              defaultTimezone,
            },
    [
      defaultTimezone,
      queryAllTimezones.data,
      queryAllTimezones.isLoading,
      queryAllTimezones.isSuccess,
    ],
  );
}
