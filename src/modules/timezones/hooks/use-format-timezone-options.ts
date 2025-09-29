import { useMemo } from "react";
import type { TCountryTimezone } from "../types";

export interface UseFormatTimezoneOptionsArgs {
  countryTimezones: TCountryTimezone[];
}

export function useFormatTimezoneOptions({
  countryTimezones,
}: UseFormatTimezoneOptionsArgs) {
  const timezonesData = useMemo(() => {
    const allTimezones = countryTimezones.flatMap((ctz) =>
      ctz.zones.map((z) => ({
        name: z.name,
        comments: z.comments,
        country: ctz.country.name,
      })),
    );

    // Deduplicate by timezone name
    const seen = new Set<string>();
    const uniqueTimezones = allTimezones.filter((tz) => {
      if (seen.has(tz.name)) return false;
      seen.add(tz.name);
      return true;
    });

    // Map to select-friendly objects
    return uniqueTimezones.map((tz) => ({
      value: tz.name,
      label: `${tz.country} - ${tz.name}${tz.comments ? ` : ${tz.comments}` : ""}`,
    }));
  }, [countryTimezones]);

  return useMemo(
    () => ({
      timezonesData,
    }),
    [timezonesData],
  );
}
