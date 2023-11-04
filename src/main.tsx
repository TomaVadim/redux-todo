import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material";

import { App } from "@/App";

import { generateTheme } from "@/theme/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={generateTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
