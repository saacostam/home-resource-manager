import { useMemo } from "react";
import { useQueryAllTimezones } from "@/modules/timezones";

export function useSignupLoader() {
  const queryAllTimezones = useQueryAllTimezones();

  return useMemo(
    () =>
      queryAllTimezones.isLoading
        ? { status: "loading" as const }
        : queryAllTimezones.isSuccess
          ? { status: "success" as const, data: queryAllTimezones.data }
          : {
              status: "error" as const,
            },
    [
      queryAllTimezones.data,
      queryAllTimezones.isLoading,
      queryAllTimezones.isSuccess,
    ],
  );
}
