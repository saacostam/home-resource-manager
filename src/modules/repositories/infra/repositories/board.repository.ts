import type { useAuth } from "@/modules/auth";
import type {
  IBoardRepository,
  IMutationCreateBoardIn,
  IMutationCreateBoardOut,
  IMutationDeleteBoardByIdIn,
  IMutationUpdateBoardByIdIn,
  IQueryAllBoardsOut,
  IQueryBoardByIdIn,
  IQueryBoardByIdOut,
} from "../../app";

export class BoardRepository implements IBoardRepository {
  constructor(private auth: ReturnType<typeof useAuth>["fetch"]) {}

  createBoard(args: IMutationCreateBoardIn): Promise<IMutationCreateBoardOut> {
    return this.auth<{
      id: string;
    }>({
      endpoint: "/board",
      method: "POST",
      body: args,
    });
  }

  deleteBoardById(args: IMutationDeleteBoardByIdIn): Promise<void> {
    return this.auth({
      endpoint: `/board/${args.id}`,
      method: "DELETE",
    });
  }

  queryAllBoards(): Promise<IQueryAllBoardsOut> {
    return this.auth<{
      boards: {
        id: string;
        name: string;
      }[];
    }>({
      endpoint: "/board",
      method: "GET",
    });
  }

  queryBoardById(args: IQueryBoardByIdIn): Promise<IQueryBoardByIdOut> {
    return this.auth<{
      id: string;
      name: string;
      content: string;
    }>({
      endpoint: `/board/${args.id}`,
      method: "GET",
    });
  }

  updateBoardById(args: IMutationUpdateBoardByIdIn): Promise<void> {
    return this.auth({
      endpoint: `/board/${args.id}`,
      method: "PUT",
      body: args,
    });
  }
}
