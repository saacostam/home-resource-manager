export enum TRouteType {
  LOGIN = "login",
  SIGNUP = "sign-up",
  BASE = "base",
}

export type TGenRouteAction =
  | {
      type: TRouteType.BASE;
    }
  | {
      type: TRouteType.SIGNUP;
    }
  | {
      type: TRouteType.LOGIN;
    };

export function genRoute(action: TGenRouteAction): string {
  switch (action.type) {
    case TRouteType.BASE: {
      return "/";
    }
    case TRouteType.SIGNUP: {
      return "/signup";
    }
    case TRouteType.LOGIN: {
      return "/login";
    }
  }
}
