import type { TCountryTimezone } from "@/modules/timezones";
import type { TUser } from "@/modules/user";

// Auth

export interface IAuthRepository {
  login(args: IMutationLoginIn): Promise<IMutationLoginOut>;
}

export interface IMutationLoginIn {
  username: string;
  password: string;
}

export interface IMutationLoginOut {
  token: string;
}

// Timezone

export interface ITimezoneRepository {
  getAllCountryTimezones(): Promise<TCountryTimezone[]>;
}

// User

export interface IUserRepository {
  getMe(): Promise<TUser>;
  updateSettings(args: IMutationUpdateSettingsIn): Promise<void>;
}

export interface IMutationUpdateSettingsIn {
  timezone: string;
}

// All Repositories

export interface IRepositories {
  auth: IAuthRepository;
  timezone: ITimezoneRepository;
  user: IUserRepository;
}
