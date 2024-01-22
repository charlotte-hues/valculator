"use client";

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";

import { components } from "./components";
import { palette } from "./palette";

const themeWithColors = createTheme({ palette });

export const theme = createTheme({
  ...themeWithColors,
  components: components(themeWithColors.palette),
});

export const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
