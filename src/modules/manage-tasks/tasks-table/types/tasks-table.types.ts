export interface TTaskTableEntry {
  id: string;
  name: string;
  categoryName: string | null;
  recurrenceType: string;
}

export enum TTaskTableModeType {
  BROWSE = "browse",
  CREATE = "create",
  DELETE = "delete",
  EDIT = "edit",
}

export type TTaskTableMode =
  | {
      type: TTaskTableModeType.BROWSE;
    }
  | {
      type: TTaskTableModeType.CREATE;
    }
  | {
      type: TTaskTableModeType.DELETE;
    }
  | {
      type: TTaskTableModeType.EDIT;
    };
