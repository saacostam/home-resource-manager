export type TTaskInstanceStatus =
  | {
      type: "virtual";
    }
  | {
      type: "committed";
      id: string;
    }
  | {
      type: "mutating";
    };
