import { lazy, Suspense } from "react";
import { createHashRouter, Outlet } from "react-router-dom";
import { AppShell } from "@/modules/layout";
import { AuthSessionProvider } from "../auth";
import { RouterSuspenseBoundaryContent } from "./components";
import { RepositoriesProvider } from "../repositories/app";

// Lazy-loaded pages
const HomePage = lazy(() => import("@/modules/pages/home/home.page"));
const SettingsPage = lazy(
  () => import("@/modules/pages/settings/settings.page"),
);
const ManageCategoriesPage = lazy(
  () => import("@/modules/pages/manage-categories/manage-categories.page"),
);
const ManageResourcesPage = lazy(
  () => import("@/modules/pages/manage-resources/manage-resources.page"),
);
const ManageBoardsPage = lazy(
  () => import("@/modules/pages/manage-boards/manage-boards.page"),
);
const ManageTasksPage = lazy(
  () => import("@/modules/pages/manage-tasks/manage-tasks.page"),
);
const LoginPage = lazy(() => import("@/modules/pages/login/login.page"));
const SignupPage = lazy(() => import("@/modules/pages/signup/signup.page"));
const ErrorPage = lazy(() => import("@/modules/pages/error/error.page"));

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <AuthSessionProvider>
        <RepositoriesProvider>
          <Suspense fallback={<RouterSuspenseBoundaryContent />}>
            <Outlet />
          </Suspense>
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
          { path: "manage-boards", element: <ManageBoardsPage /> },
          { path: "manage-tasks", element: <ManageTasksPage /> },
        ],
      },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
