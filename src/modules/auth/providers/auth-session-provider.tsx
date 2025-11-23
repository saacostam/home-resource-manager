import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { genRoute, TRouteType } from "@/modules/routing";
import { usePrivateAuth } from "./use-private-auth";
import { useAuth } from "./use-auth";
import { authContext } from "./auth-context";

const ROUTES_WITHOUT_AUTH = [
  genRoute({
    type: TRouteType.LOGIN,
  }),
  genRoute({
    type: TRouteType.SIGNUP,
  }),
  genRoute({
    type: TRouteType.LANDING,
  }),
];

function AuthSessionGuard({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const { status } = useAuth();

  const shouldRedirectToLogin =
    status === "unauthenticated" && !ROUTES_WITHOUT_AUTH.includes(pathname);
  const shouldRedirectToBaseUrl =
    status === "authenticated" && ROUTES_WITHOUT_AUTH.includes(pathname);

  return shouldRedirectToLogin ? (
    <Navigate to={genRoute({ type: TRouteType.LOGIN })} replace />
  ) : shouldRedirectToBaseUrl ? (
    <Navigate to={genRoute({ type: TRouteType.DASHBOARD })} replace />
  ) : (
    children
  );
}

export function AuthSessionProvider({ children }: PropsWithChildren) {
  return (
    <authContext.Provider value={usePrivateAuth()}>
      <AuthSessionGuard>{children}</AuthSessionGuard>
    </authContext.Provider>
  );
}
