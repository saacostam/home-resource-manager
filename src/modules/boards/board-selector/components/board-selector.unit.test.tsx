import { renderWithProviders } from "@/test";
import { describe, it } from "vitest";
import { BoardSelector } from "./board-selector";
import type { IQueryAllBoardsOut } from "@/modules/repositories/app";

const leanBoards: IQueryAllBoardsOut = {
  boards: [
    {
      id: "1",
      name: "board-1",
    },
    {
      id: "2",
      name: "board-2",
    },
  ],
};

describe("BoardSelector", () => {
  it("mounts with correct deps", () => {
    renderWithProviders(<BoardSelector />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryAllBoards: async () => leanBoards,
        },
      },
    });
  });
});
