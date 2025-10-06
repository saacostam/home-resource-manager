import type { TCountryTimezone } from "@/modules/timezones";
import type { useAuth } from "@/modules/auth";
import { type ITimezoneRepository } from "../../app";

export class TimezoneRepository implements ITimezoneRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async getAllCountryTimezones(): Promise<TCountryTimezone[]> {
    const res = await this.auth<{
      countries: {
        country: {
          name: string;
          code: string;
        };
        zones: {
          name: string;
          comments: string;
        }[];
      }[];
    }>({
      endpoint: "/timezone/iana",
      method: "GET",
    });

    return res.countries;
  }
}
