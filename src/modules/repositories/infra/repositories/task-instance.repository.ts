import type { useAuth } from "@/modules/auth";
import type { TTaskInstanceStatus } from "@/modules/core.types";
import type {
  IQueryImmediateTaskInstancesOut,
  ITaskInstancesRepository,
  IMutationCreateTaskCompletionIn,
  IMutationDeleteTaskCompletionIn,
} from "../../app";

export class TaskInstancesRepository implements ITaskInstancesRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  async createTaskCompletion(
    args: IMutationCreateTaskCompletionIn,
  ): Promise<void> {
    return this.auth({
      endpoint: "/i/task",
      method: "POST",
      body: args,
    });
  }

  async deleteTaskCompletion(
    args: IMutationDeleteTaskCompletionIn,
  ): Promise<void> {
    return this.auth({
      endpoint: `/i/task/${args.id}`,
      method: "DELETE",
    });
  }

  async getImmediateTaskInstances(): Promise<IQueryImmediateTaskInstancesOut> {
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

    return {
      taskInstances: res.taskInstances,
      stats: res.stats,
    };
  }
}
