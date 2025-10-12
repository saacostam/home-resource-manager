import type { Dispatch, SetStateAction } from "react";

export type TBoardModalMode =
  | {
      type: "browse";
    }
  | {
      type: "create";
    }
  | {
      type: "delete";
    }
  | {
      type: "edit";
    };

export interface TBoardModalManagerService {
  id: string | null;
  setId: Dispatch<SetStateAction<TBoardModalManagerService["id"]>>;
  mode: TBoardModalMode;
  setMode: Dispatch<SetStateAction<TBoardModalManagerService["mode"]>>;
}
