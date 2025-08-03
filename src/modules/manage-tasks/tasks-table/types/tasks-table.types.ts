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
      id: string;
      type: TTaskTableModeType.DELETE;
    }
  | {
      id: string;
      type: TTaskTableModeType.EDIT;
    };
