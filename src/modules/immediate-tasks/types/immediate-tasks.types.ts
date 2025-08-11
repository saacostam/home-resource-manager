export interface TImmediateTaskEntry {
  utcDate: Date;
  entries: {
    id: string;
    name: string;
    description: string | null;
    categoryName: string | null;
  }[];
}
