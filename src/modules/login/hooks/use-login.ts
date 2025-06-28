import { useAuth } from "@/modules/auth";
import { genRoute, TRouteType } from "@/modules/routing";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSubmit = useCallback(() => {
    setToken("mock-value");
    void navigate(genRoute({ type: TRouteType.BASE }));
  }, [navigate, setToken]);

  return useMemo(
    () => ({
      onSubmit,
    }),
    [onSubmit],
  );
}
