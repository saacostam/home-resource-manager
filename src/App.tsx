import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { router } from "@/modules/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <MantineProvider theme={{ primaryColor: "violet" }}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
