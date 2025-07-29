export interface TResourceTableEntry {
  id: string;
  name: string;
  description?: string;
  quantity: number;
}

export type TResourcesTableMode =
  | {
      type: "browse";
    }
  | {
      type: "create";
    };
