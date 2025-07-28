export interface TResourceTableEntry {
  id: string;
  name: string;
  description?: string;
  quantity: number;
}

export interface TResourcesTableMode {
  type: "browse";
}
