import { LocalStorageKey, LocalStorageUtils } from "@/modules/local-storage";
import { useCallback, useMemo, useReducer } from "react";

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

  return useMemo(
    () => ({
      logout,
      setToken,
      status:
        token === null
          ? ("unauthenticated" as const)
          : ("authenticated" as const),
    }),
    [logout, setToken, token],
  );
}
