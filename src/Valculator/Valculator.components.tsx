import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { Box, Tab, Tabs } from "@mui/material";
import { Card, Divider, IconButton, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

import { useValculatorLayoutContext } from "./ValculatorDataContext/layout/ValculatorLayout.context";
import { TabsType } from "./ValculatorDataContext/layout/ValculatorLayout.types";

export const TabsMenu = () => {
  const { handleTabChange, isFullScreen } = useValculatorLayoutContext();
  const { activeTab } = useValculatorLayoutContext();
  if (!isFullScreen) return null;
  return (
    <Box display="flex" justifyContent={"center"}>
      <Tabs
        onChange={(_, value) => handleTabChange(value as TabsType)}
        value={activeTab}
      >
        <Tab value={"search"} color={"search"} label="Search" />
        <Tab value={"selection"} color={"selection"} label="Selection" />
        <Tab value={"checklist"} color={"checklist"} label="Checklist" />
      </Tabs>
    </Box>
  );
};

export const SectionContainer = ({
  children,
  tab,
}: PropsWithChildren & { tab: TabsType }) => {
  const { isMobile, isFullScreen, handleToggleFullScreen } =
    useValculatorLayoutContext();
  return (
    <Card sx={{ height: "800px", display: "flex", flexDirection: "column" }}>
      <Box
        padding={1}
        display="flex"
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ backgroundColor: "secondary.main" }}
      >
        <Typography>{tab}</Typography>
        {!isMobile && (
          <IconButton onClick={() => handleToggleFullScreen(tab)}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        )}
      </Box>
      <Divider sx={{ borderColor: "secondary.dark" }} />
      {children}
    </Card>
  );
};

export const SectionHeadContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box
        padding={2}
        flex={"1 0 auto"}
        sx={{ backgroundColor: "background.default" }}
      >
        {children}
      </Box>
      <Divider sx={{ borderColor: "secondary.dark" }} />
    </>
  );
};

export const ListContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      padding={2}
      height={"100%"}
      flex={"0 2 auto"}
      sx={{ overflowY: "scroll" }}
    >
      {children}
    </Box>
  );
};
