import { Components, Theme } from "@mui/material";

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {
      ".MuiTabs-flexContainer": {
        gap: "16px",
      },
      ".MuiTabs-indicator": {
        display: "none",
      },
    },
  },
};

export const MuiTab = (
  palette: Theme["palette"]
): Components<Theme>["MuiTab"] => ({
  styleOverrides: {
    root: {
      border: "2px solid",
      borderRadius: "40px",
      "&.Mui-selected": {
        border: `4px solid ${palette.secondary.main}`,
        color: palette.secondary.main,
        fontWeight: "900",
        borderRadius: "40px",
      },
    },
  },
});
