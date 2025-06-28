export enum TRouteType {
  LOGIN = "login",
  BASE = "base",
}

export type TGenRouteAction =
  | {
      type: TRouteType.BASE;
    }
  | {
      type: TRouteType.LOGIN;
    };

export function genRoute(action: TGenRouteAction): string {
  switch (action.type) {
    case TRouteType.BASE: {
      return "/";
    }
    case TRouteType.LOGIN: {
      return "/login";
    }
  }
}
