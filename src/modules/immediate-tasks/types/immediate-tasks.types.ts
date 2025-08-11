import type { TTaskInstanceStatus } from "@/modules/core.types";

export interface TImmediateTaskEntry {
  utcDate: Date;
  entries: {
    id: string;
    name: string;
    description: string | null;
    categoryName: string | null;
    status: TTaskInstanceStatus;
    taskId: string;
  }[];
}
