import { useCallback, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { apiFetcher } from "@/modules/fetcher";
import { LocalStorageKey, LocalStorageUtils } from "@/modules/local-storage";
import { genRoute, TRouteType } from "@/modules/routing";
import { isAuthError } from "../utils";

type FetchWithAuth = <TResponse = unknown>(params: {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}) => Promise<TResponse>;

function tokenReducer(
  state: string | null,
  action: { type: "set"; value: string } | { type: "clear" },
): string | null {
  switch (action.type) {
    case "set": {
      LocalStorageUtils.setString(LocalStorageKey.AUTH, action.value);
      return action.value;
    }
    case "clear": {
      LocalStorageUtils.remove(LocalStorageKey.AUTH);
      return null;
    }
    default: {
      return state;
    }
  }
}

export function usePrivateAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [token, dispatch] = useReducer(tokenReducer, null, () =>
    LocalStorageUtils.safelyGetString(LocalStorageKey.AUTH),
  );

  const setToken = useCallback((value: string) => {
    dispatch({
      type: "set",
      value: value,
    });
  }, []);

  const logout = useCallback(() => {
    dispatch({
      type: "clear",
    });
  }, []);

  const fetch = useMemo(() => {
    const apply: FetchWithAuth = async <Response = unknown>(params: {
      endpoint: string;
      method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
      body?: never;
    }) => {
      try {
        const response = await apiFetcher.request<Body>({
          method: params.method,
          url: params.endpoint,
          data: params.body,
          headers: {
            Authorization: `Bearer ${token ?? ""}`,
          },
        });
        return response.data as unknown as Response;
      } catch (error) {
        const authError = isAuthError(error);

        if (authError) {
          logout();
          void navigate(genRoute({ type: TRouteType.LOGIN }));
          queryClient.clear();
        }

        throw error;
      }
    };

    return apply;
  }, [logout, navigate, queryClient, token]);

  return useMemo(
    () => ({
      fetch,
      logout,
      setToken,
      status:
        token === null
          ? ("unauthenticated" as const)
          : ("authenticated" as const),
    }),
    [fetch, logout, setToken, token],
  );
}
