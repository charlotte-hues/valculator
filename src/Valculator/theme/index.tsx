"use client";

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";

import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

const themeWithColors = createTheme({ palette, typography });

export const theme = createTheme({
  ...themeWithColors,
  components: components(themeWithColors.palette),
});

console.log(theme);

export const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
