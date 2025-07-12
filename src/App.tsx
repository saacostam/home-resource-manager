import "@mantine/core/styles.css";

import { AvailabilitySplashScreenLoader } from "@/modules/availability-splash-screen";
import { MantineProvider } from "@mantine/core";
import { router } from "@/modules/router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

function App() {
  return (
    <MantineProvider theme={{ primaryColor: "violet" }}>
      <QueryClientProvider client={client}>
        <AvailabilitySplashScreenLoader>
          <RouterProvider router={router} />
        </AvailabilitySplashScreenLoader>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
