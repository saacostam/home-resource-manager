export interface TLeanBoard {
  id: string;
  name: string;
}

export interface TBoard extends TLeanBoard {
  content: string;
}
