import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { router } from "@/modules/router";
import { RouterProvider } from "react-router-dom";
import { AuthSessionProvider } from "@/modules/auth";

function App() {
  return (
    <MantineProvider>
      <AuthSessionProvider>
        <RouterProvider router={router} />
      </AuthSessionProvider>
    </MantineProvider>
  );
}

export default App;
