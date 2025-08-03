import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { AvailabilitySplashScreenLoader } from "@/modules/availability-splash-screen";
import { router } from "@/modules/router";

const client = new QueryClient();

function App() {
  return (
    <MantineProvider theme={{ primaryColor: "violet", black: "#00032F" }}>
      <QueryClientProvider client={client}>
        <AvailabilitySplashScreenLoader>
          <RouterProvider router={router} />
        </AvailabilitySplashScreenLoader>
        <Notifications />
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
