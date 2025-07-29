export interface TResourceTableEntry {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  categoryName: string | null;
}

export type TResourcesTableMode =
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
