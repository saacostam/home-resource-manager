import type { TCountryTimezone } from "@/modules/timezones";
import type { TUser } from "@/modules/user";

export interface ITimezoneRepository {
  getAllCountryTimezones(): Promise<TCountryTimezone[]>;
}

export interface IUserRepository {
  getMe(): Promise<TUser>;
  updateSettings(args: IMutationUpdateSettingsIn): Promise<void>;
}

export interface IMutationUpdateSettingsIn {
  timezone: string;
}

export interface IRepositories {
  timezone: ITimezoneRepository;
  user: IUserRepository;
}
