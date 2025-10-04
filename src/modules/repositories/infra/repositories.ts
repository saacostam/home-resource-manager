import type { TCountryTimezone } from "@/modules/timezones";
import type { useAuth } from "@/modules/auth";
import type { TUser } from "@/modules/user";
import {
  QueryImmediateTaskInstancesOut,
  type IAuthRepository,
  type IMutationLoginIn,
  type IMutationLoginOut,
  type IMutationSignUpIn,
  type IMutationUpdateSettingsIn,
  type ITaskInstancesRepository,
  type ITimezoneRepository,
  type IUserRepository,
  type MutationCreateTaskCompletionIn,
  type MutationDeleteTaskCompletionIn,
} from "../app";
import type { TTaskInstanceStatus } from "@/modules/core.types";

export class AuthRepository implements IAuthRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async login(args: IMutationLoginIn): Promise<IMutationLoginOut> {
    return this.auth<{
      token: string;
    }>({
      endpoint: "/auth/login",
      method: "POST",
      body: args,
    });
  }

  async signup(args: IMutationSignUpIn): Promise<void> {
    return this.auth({
      endpoint: "/auth/signup",
      method: "POST",
      body: args,
    });
  }
}

export class TaskInstancesRepository implements ITaskInstancesRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async createTaskCompletion(
    args: MutationCreateTaskCompletionIn,
  ): Promise<void> {
    return this.auth({
      endpoint: "/i/task",
      method: "POST",
      body: args,
    });
  }

  async deleteTaskCompletion(
    args: MutationDeleteTaskCompletionIn,
  ): Promise<void> {
    return this.auth({
      endpoint: `/i/task/${args.id}`,
      method: "DELETE",
    });
  }

  async getImmediateTaskInstances(): Promise<QueryImmediateTaskInstancesOut> {
    const res = await this.auth<{
      taskInstances: {
        status: TTaskInstanceStatus;
        task: {
          id: string;
          name: string;
          description: string | null;
          category: {
            name: string;
          } | null;
        };
        date: string;
      }[];
      stats: {
        totalResources: number;
        pendingTasks: number;
        overdueTasks: number;
      };
    }>({
      endpoint: "/i/task/immediate",
      method: "GET",
    });

    return new QueryImmediateTaskInstancesOut({
      taskInstances: res.taskInstances,
      stats: res.stats,
    });
  }
}

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
