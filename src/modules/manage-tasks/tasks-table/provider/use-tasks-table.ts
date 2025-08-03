import { useCallback, useContext, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { type TTaskTableMode, TTaskTableModeType } from "../types";
import { TasksTableContext } from "./tasks-table.context";

export enum TableModeSearchParams {
  ID = "id",
  TYPE = "type",
}

export function usePrivateTasksTable() {
  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const rawType = searchParams.get(TableModeSearchParams.TYPE);

  const type = useMemo(() => {
    const match = Object.values(TTaskTableModeType).find(
      (t: TTaskTableModeType) => t === rawType,
    );
    return match ?? TTaskTableModeType.BROWSE;
  }, [rawType]);
  const id = searchParams.get(TableModeSearchParams.ID);

  const updateParamsToMode = useCallback(
    (mode: TTaskTableMode) => {
      const url = new URL(window.location.href);

      const setParams = (args: { id: string; type: string }) => {
        url.searchParams.set(TableModeSearchParams.ID, args.id);
        url.searchParams.set(TableModeSearchParams.TYPE, args.type);
      };

      switch (mode.type) {
        case TTaskTableModeType.BROWSE: {
          setParams({
            id: "",
            type: TTaskTableModeType.BROWSE,
          });
          break;
        }
        case TTaskTableModeType.CREATE: {
          setParams({
            id: "",
            type: TTaskTableModeType.CREATE,
          });
          break;
        }
        case TTaskTableModeType.DELETE: {
          setParams({
            id: mode.id,
            type: TTaskTableModeType.DELETE,
          });
          break;
        }
      }

      void nav({
        pathname: url.pathname,
        search: url.search,
      });
    },
    [nav],
  );

  const mode: TTaskTableMode = useMemo(() => {
    switch (type) {
      case TTaskTableModeType.BROWSE: {
        return {
          type: TTaskTableModeType.BROWSE,
        };
      }
      case TTaskTableModeType.CREATE: {
        return {
          type: TTaskTableModeType.CREATE,
        };
      }
      case TTaskTableModeType.DELETE: {
        if (id) {
          return {
            type: TTaskTableModeType.DELETE,
            id: id,
          };
        }
      }
    }

    return {
      type: TTaskTableModeType.BROWSE,
    };
  }, [id, type]);

  return useMemo(
    () => ({ mode, setMode: updateParamsToMode }),
    [mode, updateParamsToMode],
  );
}

export function useTasksTable() {
  return useContext(TasksTableContext);
}
