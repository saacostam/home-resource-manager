import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/modules/layout";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  ManageCategoriesPage,
  SignupPage,
} from "@/modules/pages";
import { AuthSessionProvider } from "../auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthSessionProvider />,
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "manage-categories", element: <ManageCategoriesPage /> },
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
