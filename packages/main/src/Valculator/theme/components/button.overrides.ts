import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    size: "small",
    variant: "contained",
  },
};

export const MuiToggleButtonGroup: Components<Theme>["MuiToggleButtonGroup"] = {
  defaultProps: {
    size: "small",
  },
};

export const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  defaultProps: {
    size: "small",
    color: "primary",
  },
  styleOverrides: {
    root: {
      padding: "0.2rem 0.5rem",
    },
  },
};
