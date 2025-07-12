export interface TCategoryTableEntry {
  id: string;
  name: string;
  description?: string;
}

export type TCategoriesTableMode =
  | {
      type: "browse";
    }
  | {
      type: "create";
    }
  | {
      type: "delete";
      id: string;
    }
  | {
      type: "edit";
      id: string;
    };
