import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/tiptap/styles.css";
import "./index.css";
import App from "./App.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
