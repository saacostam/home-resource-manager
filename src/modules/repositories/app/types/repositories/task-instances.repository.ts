import type { TTaskInstanceStatus } from "@/modules/core.types";

export interface ITaskInstancesRepository {
  createTaskCompletion(args: IMutationCreateTaskCompletionIn): Promise<void>;
  deleteTaskCompletion(args: IMutationDeleteTaskCompletionIn): Promise<void>;
  getImmediateTaskInstances(): Promise<IQueryImmediateTaskInstancesOut>;
}

// Create Task Completion

export interface IMutationCreateTaskCompletionIn {
  date: string;
  taskId: string;
}

// Delete Task Completion

export interface IMutationDeleteTaskCompletionIn {
  id: string;
}

// Get Immediate Task Instances

export interface IQueryImmediateTaskInstancesOutTaskInstance {
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
}

export interface IQueryImmediateTaskInstancesOutStats {
  totalResources: number;
  pendingTasks: number;
  overdueTasks: number;
}

export interface IQueryImmediateTaskInstancesOut {
  taskInstances: IQueryImmediateTaskInstancesOutTaskInstance[];
  stats: IQueryImmediateTaskInstancesOutStats;
}
