import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage } from "@/modules/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // You can add an error page here to catch any routing errors
  // {
  //   path: "*",
  //   element: <div>404 Not Found</div>,
  // }
]);
