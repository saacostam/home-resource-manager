import { createHashRouter, Outlet } from "react-router-dom";
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
  SettingsPage,
} from "@/modules/pages";
import { AuthSessionProvider } from "../auth";
import { RepositoriesProvider } from "../repositories/app";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <AuthSessionProvider>
        <RepositoriesProvider>
          <Outlet />
        </RepositoriesProvider>
      </AuthSessionProvider>
    ),
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "settings", element: <SettingsPage /> },
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
