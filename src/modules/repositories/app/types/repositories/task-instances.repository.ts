import type { TTaskInstanceStatus } from "@/modules/core.types";

export interface ITaskInstancesRepository {
  createTaskCompletion(args: MutationCreateTaskCompletionIn): Promise<void>;
  deleteTaskCompletion(args: MutationDeleteTaskCompletionIn): Promise<void>;
  getImmediateTaskInstances(): Promise<QueryImmediateTaskInstancesOut>;
}

// Create Task Completion

export class MutationCreateTaskCompletionIn {
  public date: string;
  public taskId: string;

  constructor(args: { date: string; taskId: string }) {
    this.date = args.date;
    this.taskId = args.taskId;
  }
}

// Delete Task Completion

export class MutationDeleteTaskCompletionIn {
  public id: string;
  constructor(args: { id: string }) {
    this.id = args.id;
  }
}

// Get Immediate Task Instances

export interface QueryImmediateTaskInstancesOutTaskInstance {
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

export interface QueryImmediateTaskInstancesOutStats {
  totalResources: number;
  pendingTasks: number;
  overdueTasks: number;
}

export class QueryImmediateTaskInstancesOut {
  public taskInstances: QueryImmediateTaskInstancesOutTaskInstance[];
  public stats: QueryImmediateTaskInstancesOutStats;

  constructor(args: {
    taskInstances: QueryImmediateTaskInstancesOutTaskInstance[];
    stats: QueryImmediateTaskInstancesOutStats;
  }) {
    this.taskInstances = args.taskInstances;
    this.stats = args.stats;
  }
}
