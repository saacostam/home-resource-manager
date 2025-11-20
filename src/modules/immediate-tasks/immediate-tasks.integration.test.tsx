import { renderWithProviders } from "@/test";
import { describe, expect, it, vi } from "vitest";
import { ImmediateTasksLoader } from "./components";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import type { IQueryImmediateTaskInstancesOut } from "../repositories/app";

enum Selectors {
  ERROR = "query-error",
  LOADING = "immediate-tasks-skeleton",
  SUCCESS = "immediate-tasks-content",
}

const MOCK_COMMITED_INSTANCE = {
  status: {
    type: "committed" as const,
    id: "committed",
  },
  date: "2025-01-01",
  task: {
    id: "task-1",
    name: "Task 1",
    description: null,
    category: {
      name: "Category 1",
    },
  },
};

const MOCK_VIRTUAL_INSTANCE = {
  status: {
    type: "virtual" as const,
  },
  date: "2025-01-01",
  task: {
    id: "task-2",
    name: "Task 2",
    description: null,
    category: {
      name: "Category 2",
    },
  },
};

const MOCK_MUTATING_INSTANCE = {
  status: {
    type: "mutating" as const,
  },
  date: "2025-01-01",
  task: {
    id: "task-3",
    name: "Task 3",
    description: null,
    category: {
      name: "Category 3",
    },
  },
};

const mockImmediateTasksInstances = (
  taskInstances: IQueryImmediateTaskInstancesOut["taskInstances"],
): IQueryImmediateTaskInstancesOut => ({
  stats: { totalResources: 2, pendingTasks: 1, overdueTasks: 1 },
  taskInstances,
});

describe("Immediate Tasks [Integration]", () => {
  it("should render skeleton id data hasn't resolved", () => {
    renderWithProviders(<ImmediateTasksLoader />, {
      repositories: {
        taskInstances: {
          getImmediateTaskInstances: () =>
            new Promise(() => {
              // not resolved
            }),
        },
      },
    });

    expect(screen.getByTestId(Selectors.LOADING)).toBeInTheDocument();
    expect(screen.queryByTestId(Selectors.SUCCESS)).toBeNull();
    expect(screen.queryByTestId(Selectors.ERROR)).toBeNull();
  });

  it("should handle errored queries", async () => {
    renderWithProviders(<ImmediateTasksLoader />, {
      repositories: {
        taskInstances: {
          getImmediateTaskInstances: () => {
            throw new Error();
          },
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.ERROR)).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.LOADING)).toBeNull();
    expect(screen.queryByTestId(Selectors.SUCCESS)).toBeNull();
  });

  it("should render the comitted tasks", async () => {
    const deleteTaskCompletion = vi.fn();

    renderWithProviders(<ImmediateTasksLoader />, {
      repositories: {
        taskInstances: {
          // eslint-disable-next-line @typescript-eslint/require-await
          getImmediateTaskInstances: async () =>
            mockImmediateTasksInstances([MOCK_COMMITED_INSTANCE]),
          deleteTaskCompletion,
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.ERROR)).toBeNull();
    expect(screen.queryByTestId(Selectors.LOADING)).toBeNull();

    // Should render task
    expect(screen.getByText("Wed Jan 01 2025")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();

    // Should call delete-task-completion if checked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).not.toBeDisabled();
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(deleteTaskCompletion).toHaveBeenCalled();
    });
  });

  it("should render the virtual tasks", async () => {
    const createTaskCompletion = vi.fn();

    renderWithProviders(<ImmediateTasksLoader />, {
      repositories: {
        taskInstances: {
          // eslint-disable-next-line @typescript-eslint/require-await
          getImmediateTaskInstances: async () =>
            mockImmediateTasksInstances([MOCK_VIRTUAL_INSTANCE]),
          createTaskCompletion,
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.ERROR)).toBeNull();
    expect(screen.queryByTestId(Selectors.LOADING)).toBeNull();

    // Should render task
    expect(screen.getByText("Wed Jan 01 2025")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();

    // Should call create-task-completion if checked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(createTaskCompletion).toHaveBeenCalled();
    });
  });

  it("should call create-task-completion for virtual tasks", async () => {
    const createTaskCompletion = vi.fn();
    const deleteTaskCompletion = vi.fn();

    renderWithProviders(<ImmediateTasksLoader />, {
      repositories: {
        taskInstances: {
          // eslint-disable-next-line @typescript-eslint/require-await
          getImmediateTaskInstances: async () =>
            mockImmediateTasksInstances([MOCK_MUTATING_INSTANCE]),
          createTaskCompletion,
          deleteTaskCompletion,
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId(Selectors.SUCCESS)).toBeInTheDocument();
    });
    expect(screen.queryByTestId(Selectors.ERROR)).toBeNull();
    expect(screen.queryByTestId(Selectors.LOADING)).toBeNull();

    // Should render task
    expect(screen.getByText("Wed Jan 01 2025")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
    expect(screen.getByText("Category 3")).toBeInTheDocument();

    // Should do-nothing if checkbox is toggled
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(createTaskCompletion).not.toHaveBeenCalled();
      expect(deleteTaskCompletion).not.toHaveBeenCalled();
    });
  });
});
