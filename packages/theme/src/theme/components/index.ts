import { Theme } from "@mui/material";

import {
  MuiButton,
  MuiToggleButton,
  MuiToggleButtonGroup,
} from "./button.overrides";
import { MuiTab, MuiTabs } from "./tab.overrides";

export const components = (palette: Theme["palette"]) => ({
  MuiButton,
  MuiToggleButtonGroup,
  MuiToggleButton,
  MuiTabs,
  MuiTab: MuiTab(palette),
});
