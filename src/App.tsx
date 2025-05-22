import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { AppShell } from "./modules/layout";

function App() {
  return (
    <MantineProvider>
      <AppShell>
        <p>Hello World</p>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
