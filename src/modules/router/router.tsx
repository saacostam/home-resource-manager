import { createHashRouter } from "react-router-dom";
import { AppShell } from "@/modules/layout";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  ManageCategoriesPage,
  ManageResourcesPage,
  ManageBoardsPage,
  ManageTasksPage,
  SignupPage,
} from "@/modules/pages";
import { AuthSessionProvider } from "../auth";

export const router = createHashRouter([
  {
    path: "/",
    element: <AuthSessionProvider />,
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "manage-categories", element: <ManageCategoriesPage /> },
          { path: "manage-resources", element: <ManageResourcesPage /> },
          {
            path: "manage-boards",
            element: <ManageBoardsPage />,
          },
          { path: "manage-tasks", element: <ManageTasksPage /> },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
