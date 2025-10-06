export interface IBoardRepository {
  createBoard(args: IMutationCreateBoardIn): Promise<IMutationCreateBoardOut>;
  deleteBoardById(args: IMutationDeleteBoardByIdIn): Promise<void>;
  queryAllBoards(): Promise<IQueryAllBoardsOut>;
  queryBoardById(args: IQueryBoardByIdIn): Promise<IQueryBoardByIdOut>;
  updateBoardById(args: IMutationUpdateBoardByIdIn): Promise<void>;
}

// Create Board
export interface IMutationCreateBoardIn {
  name: string;
}

export interface IMutationCreateBoardOut {
  id: string;
}

// Delete Board By Id
export interface IMutationDeleteBoardByIdIn {
  id: string;
}

// Query All Boards
export interface IQueryAllBoardsOut {
  boards: {
    id: string;
    name: string;
  }[];
}

// Query Board By Id
export interface IQueryBoardByIdIn {
  id: string;
}

export interface IQueryBoardByIdOut {
  id: string;
  name: string;
  content: string;
}

// Update Board By Id
export interface IMutationUpdateBoardByIdIn {
  id: string;
  name?: string;
  content?: string;
}
