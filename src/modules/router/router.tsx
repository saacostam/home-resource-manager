import { lazy, Suspense } from "react";
import { createHashRouter, Outlet } from "react-router-dom";
import { AppShell } from "@/shared/layout";
import { AuthSessionProvider } from "../auth";
import { RouterSuspenseBoundaryContent } from "./components";
import { RepositoriesProvider } from "@/shared/repositories/app";
import { LandingPage } from "@/shared/pages";

// Lazy-loaded pages
const HomePage = lazy(() => import("@/shared/pages/home/home.page"));
const SettingsPage = lazy(
  () => import("@/shared/pages/settings/settings.page"),
);
const ManageCategoriesPage = lazy(
  () => import("@/shared/pages/manage-categories/manage-categories.page"),
);
const ManageResourcesPage = lazy(
  () => import("@/shared/pages/manage-resources/manage-resources.page"),
);
const ManageBoardsPage = lazy(
  () => import("@/shared/pages/manage-boards/manage-boards.page"),
);
const ManageTasksPage = lazy(
  () => import("@/shared/pages/manage-tasks/manage-tasks.page"),
);
const LoginPage = lazy(() => import("@/shared/pages/login/login.page"));
const SignupPage = lazy(() => import("@/shared/pages/signup/signup.page"));
const ErrorPage = lazy(() => import("@/shared/pages/error/error.page"));

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
          { path: "dashboard", element: <HomePage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "manage-categories", element: <ManageCategoriesPage /> },
          { path: "manage-resources", element: <ManageResourcesPage /> },
          { path: "manage-boards", element: <ManageBoardsPage /> },
          { path: "manage-tasks", element: <ManageTasksPage /> },
        ],
      },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "/", element: <LandingPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
