import type { TUser } from "@/modules/user";

export interface IUserRepository {
  getMe(): Promise<TUser>;
  updateSettings(args: IMutationUpdateSettingsIn): Promise<void>;
}

// Update Settings

export interface IMutationUpdateSettingsIn {
  timezone: string;
}
