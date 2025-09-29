import type { TCountryTimezone } from "@/modules/timezones";
import type { useAuth } from "@/modules/auth";
import type { TUser } from "@/modules/user";
import type {
  IMutationUpdateSettingsIn,
  ITimezoneRepository,
  IUserRepository,
} from "../app";

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

export class UserRepository implements IUserRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async getMe(): Promise<TUser> {
    const res = await this.auth<{
      username: string;
      firstName: string;
      lastName: string;
      timezone: string;
    }>({ endpoint: "/user", method: "GET" });

    return res;
  }

  updateSettings(args: IMutationUpdateSettingsIn): Promise<void> {
    return this.auth({
      endpoint: "/user/settings",
      method: "PUT",
      body: args,
    });
  }
}
