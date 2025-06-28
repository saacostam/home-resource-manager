import "@mantine/core/styles.css";

import { AuthSessionProvider } from "@/modules/auth";
import { MantineProvider } from "@mantine/core";
import { router } from "@/modules/router";
import { RouterProvider } from "react-router-dom";

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
