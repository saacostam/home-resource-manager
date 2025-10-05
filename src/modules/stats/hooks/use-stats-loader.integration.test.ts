import { describe, expect, it, vi } from "vitest";
import { waitFor } from "@testing-library/dom";
import { renderHookWithProviders, type MockRepositories } from "@/test";
import { QueryImmediateTaskInstancesOut } from "@/modules/repositories/app";
import { useStatsLoader } from "./use-stats-loader";

const mockQueryImmediateTaskInstancesOut: QueryImmediateTaskInstancesOut =
  new QueryImmediateTaskInstancesOut({
    taskInstances: [],
    stats: {
      totalResources: 2,
      pendingTasks: 3,
      overdueTasks: 5,
    },
  });

const mockTaskInstancesRepository: MockRepositories["taskInstances"] = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async getImmediateTaskInstances() {
    return mockQueryImmediateTaskInstancesOut;
  },
};

describe("useStatsLoader", () => {
  it("should return success if data was received", async () => {
    const { result } = renderHookWithProviders(() => useStatsLoader(), {
      repositories: {
        taskInstances: mockTaskInstancesRepository,
      },
    });

    await waitFor(() => {
      expect(result.current.status).toBe("success");
    });
    expect(result.current.stats).toEqual(
      mockQueryImmediateTaskInstancesOut.stats,
    );
  });

  it("should return loading if data has not been resolved", () => {
    const { result } = renderHookWithProviders(() => useStatsLoader(), {
      repositories: {
        taskInstances: {
          getImmediateTaskInstances: () =>
            new Promise(() => {
              /* do nothing */
            }),
        },
      },
    });

    expect(result.current.status).toBe("loading");
  });

  it("should return error is query errors out, and retry mechanism", async () => {
    const query = vi.fn();

    const { result } = renderHookWithProviders(() => useStatsLoader(), {
      repositories: {
        taskInstances: {
          getImmediateTaskInstances: query.mockRejectedValueOnce(new Error()),
        },
      },
    });

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });

    expect(query).toHaveBeenCalledOnce();
    expect(result.current.retry?.onClick).toBeDefined();
    expect(result.current.retry?.isPending).toBeDefined();

    // Test retry mechanism
    query.mockReset();
    await result.current.retry?.onClick();
    expect(query).toHaveBeenCalledOnce();
  });
});
