import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, LoginPage } from "@/modules/pages";
import { AuthSessionProvider } from "../auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthSessionProvider />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
