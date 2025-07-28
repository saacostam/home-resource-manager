export enum TRouteType {
  LOGIN = "login",
  SIGNUP = "sign-up",
  DASHBOARD = "base",
  CATEGORIES = "categories",
  RESOURCES = "resources",
}

export type TGenRouteAction =
  | {
      type: TRouteType.DASHBOARD;
    }
  | {
      type: TRouteType.SIGNUP;
    }
  | {
      type: TRouteType.LOGIN;
    }
  | {
      type: TRouteType.CATEGORIES;
    }
  | {
      type: TRouteType.RESOURCES;
    };

export function genRoute(action: TGenRouteAction): string {
  switch (action.type) {
    case TRouteType.DASHBOARD: {
      return "/";
    }
    case TRouteType.SIGNUP: {
      return "/signup";
    }
    case TRouteType.LOGIN: {
      return "/login";
    }
    case TRouteType.CATEGORIES: {
      return "/manage-categories";
    }
    case TRouteType.RESOURCES: {
      return "/manage-resources";
    }
  }
}
