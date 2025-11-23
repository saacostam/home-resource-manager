export enum TRouteType {
  LANDING = "landing",
  LOGIN = "login",
  SIGNUP = "sign-up",
  DASHBOARD = "base",
  CATEGORIES = "categories",
  RESOURCES = "resources",
  BOARDS = "boards",
  TASKS = "tasks",
  SETTINGS = "settings",
}

export type TGenRouteAction =
  | {
      type: TRouteType.LANDING;
    }
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
    }
  | {
      type: TRouteType.BOARDS;
    }
  | {
      type: TRouteType.TASKS;
    }
  | {
      type: TRouteType.SETTINGS;
    };

export function genRoute(action: TGenRouteAction): string {
  switch (action.type) {
    case TRouteType.DASHBOARD: {
      return "/dashboard";
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
    case TRouteType.BOARDS: {
      return "/manage-boards";
    }
    case TRouteType.TASKS: {
      return "/manage-tasks";
    }
    case TRouteType.SETTINGS: {
      return "/settings";
    }
    case TRouteType.LANDING: {
      return "/";
    }
  }
}
