import {
  useQueryAllTimezones,
  type TCountryTimezone,
} from "@/modules/timezones";
import { useQueryMyUser, type TUser } from "@/modules/user";
import { useMemo } from "react";
import type { TSettings } from "../types";

export function useSettingsLoader() {
  const myUser = useQueryMyUser();
  const countryTimezones = useQueryAllTimezones();

  return useMemo(
    () =>
      myUser.isLoading || countryTimezones.isLoading
        ? { status: "loading" as const }
        : myUser.isSuccess && countryTimezones.isSuccess
          ? {
              status: "success" as const,
              data: _formatResponse({
                user: myUser.data,
                countryTimezones: countryTimezones.data,
              }),
            }
          : {
              status: "error" as const,
              retry: {
                onClick: () => {
                  void myUser.refetch();
                  void countryTimezones.refetch();
                },
                isPending: myUser.isPending || countryTimezones.isPending,
              },
            },
    [myUser, countryTimezones],
  );
}

export function _formatResponse(args: {
  user: TUser;
  countryTimezones: TCountryTimezone[];
}): {
  settings: TSettings;
  countryTimezones: TCountryTimezone[];
} {
  return {
    settings: {
      timezone: args.user.timezone,
    },
    countryTimezones: args.countryTimezones,
  };
}
