import type { IQueryAllBoardsOut } from "@/modules/repositories/app";
import { renderWithProviders } from "@/test";
import { describe, expect, it, vi } from "vitest";
import {
  BoardModalManagerContext,
  type TBoardModalManagerService,
} from "@/modules/boards/board-modal-manager";
import { BoardSelectorLoader } from "./components/board-selector-loader";
import { fireEvent, screen, waitFor } from "@testing-library/dom";

vi.mock("@/modules/core.components", async (imporOriginal) => {
  const actual = await imporOriginal();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // @ts-expect-error: Mock module; used only for mocking
    ...actual,
    EmptyQuery: () => <div data-testid="mock-empty-query" />,
  };
});

vi.mock("@/modules/boards/board-editor", () => ({
  BoardEditorLoader: () => <div data-testid="mock-board-editor-loader" />,
}));

enum Selectors {
  ERROR = "query-error",
  LOADING = "board-selector-skeleton",
  SUCCESS = "board-selector-content",
  EMPTY_SEARCH = "mock-empty-query",
  BOARD_EDITOR_LOADER = "mock-board-editor-loader",
  CREATE_BOARD_BUTTON = "create-board-button",
}

const mockQueryAllBoards: IQueryAllBoardsOut = {
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

const mockBoardModalManagerServiceInstance: TBoardModalManagerService = {
  id: null,
  setId: () => {
    /* do nothing */
  },
  mode: { type: "browse" },
  setMode: () => {
    /* do nothing */
  },
};

function renderWithProvidersAndModalManagerContext(
  reactElement: Parameters<typeof renderWithProviders>[0],
  renderOptions: Parameters<typeof renderWithProviders>[1],
  mockBoardModalManagerService?: Partial<TBoardModalManagerService>,
) {
  const value = {
    ...mockBoardModalManagerServiceInstance,
    ...mockBoardModalManagerService,
  };

  renderWithProviders(
    <BoardModalManagerContext.Provider value={value}>
      {reactElement}
    </BoardModalManagerContext.Provider>,
    renderOptions,
  );
}

describe("BoardSelectorLoader", () => {
  it("should render skeleton if data hasn't resolved", () => {
    renderWithProvidersAndModalManagerContext(<BoardSelectorLoader />, {
      repositories: {
        board: {
          queryAllBoards: () =>
            new Promise<IQueryAllBoardsOut>(() => {
              /* do nothing */
            }),
        },
      },
    });

    expect(screen.getByTestId(Selectors.LOADING)).toBeInTheDocument();
    expect(screen.queryByTestId(Selectors.ERROR)).toBe(null);
    expect(screen.queryByTestId(Selectors.SUCCESS)).toBe(null);
    expect(screen.queryByTestId(Selectors.CREATE_BOARD_BUTTON)).toBe(null);
  });

  it("should handle errored queries", async () => {
    renderWithProvidersAndModalManagerContext(<BoardSelectorLoader />, {
      repositories: {
        board: {
          // eslint-disable-next-line @typescript-eslint/require-await
          queryAllBoards: async () => {
            throw new Error();
          },
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.ERROR)).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.LOADING)).toBe(null);
    expect(screen.queryByTestId(Selectors.SUCCESS)).toBe(null);
    expect(screen.queryByTestId(Selectors.CREATE_BOARD_BUTTON)).toBe(null);
  });

  it("should render the options and be able to select one", async () => {
    const mockSetId = vi.fn();

    renderWithProvidersAndModalManagerContext(
      <BoardSelectorLoader />,
      {
        repositories: {
          board: {
            // eslint-disable-next-line @typescript-eslint/require-await
            queryAllBoards: async () => {
              return mockQueryAllBoards;
            },
          },
        },
      },
      {
        setId: mockSetId,
      },
    );

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
      expect(
        screen.getByTestId(Selectors.CREATE_BOARD_BUTTON),
      ).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.ERROR)).toBe(null);
    expect(screen.queryByTestId(Selectors.LOADING)).toBe(null);

    // Select should be rendered with placeholder
    expect(screen.getByPlaceholderText("Board")).toBeInTheDocument();

    // Use select
    const select = screen.getByPlaceholderText("Board");

    // Open dropdown by clicking
    fireEvent.click(select);

    // Select the first board
    const option = await screen.findByText("board-1");
    fireEvent.click(option);

    expect(mockSetId).toHaveBeenCalledWith("1");
  });

  it("should render empty-query if no selection was made", async () => {
    renderWithProvidersAndModalManagerContext(
      <BoardSelectorLoader />,
      {
        repositories: {
          board: {
            // eslint-disable-next-line @typescript-eslint/require-await
            queryAllBoards: async () => {
              return mockQueryAllBoards;
            },
          },
        },
      },
      {
        id: null,
      },
    );

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
      expect(screen.getByTestId(Selectors.EMPTY_SEARCH)).toBeInTheDocument();
    });

    expect(screen.queryByTestId(Selectors.BOARD_EDITOR_LOADER)).toBe(null);
  });

  it("should render board-editor if no selection was made", async () => {
    renderWithProvidersAndModalManagerContext(
      <BoardSelectorLoader />,
      {
        repositories: {
          board: {
            // eslint-disable-next-line @typescript-eslint/require-await
            queryAllBoards: async () => {
              return mockQueryAllBoards;
            },
          },
        },
      },
      {
        id: "1",
      },
    );

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
      expect(
        screen.getByTestId(Selectors.BOARD_EDITOR_LOADER),
      ).toBeInTheDocument();
    });

    expect(screen.queryByTestId(Selectors.EMPTY_SEARCH)).toBe(null);
  });

  it("should correclty call modal-manager when clicking on-create button", async () => {
    const mockSetMode = vi.fn();

    renderWithProvidersAndModalManagerContext(
      <BoardSelectorLoader />,
      {
        repositories: {
          board: {
            // eslint-disable-next-line @typescript-eslint/require-await
            queryAllBoards: async () => {
              return mockQueryAllBoards;
            },
          },
        },
      },
      {
        setMode: mockSetMode,
      },
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(Selectors.CREATE_BOARD_BUTTON),
      ).toBeInTheDocument();
    });

    const createBoardButton = screen.getByTestId(Selectors.CREATE_BOARD_BUTTON);
    fireEvent.click(createBoardButton);

    expect(mockSetMode).toHaveBeenCalledWith({ type: "create" });
  });
});
