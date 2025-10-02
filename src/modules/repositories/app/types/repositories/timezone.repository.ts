import type { TCountryTimezone } from "@/modules/timezones";

export interface ITimezoneRepository {
  getAllCountryTimezones(): Promise<TCountryTimezone[]>;
}
