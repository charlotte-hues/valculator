import React from "react";
import ReactDOM from "react-dom/client";
import { ShareListButton, Valculator } from "../src/main";
import { ThemeProvider } from "@mui/material";

import { theme as defaultTheme } from "@valculator/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ShareListButton />
      <Valculator />
    </ThemeProvider>
  </React.StrictMode>
);
