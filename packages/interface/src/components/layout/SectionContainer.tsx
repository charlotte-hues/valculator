import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { Box } from "@mui/material";
import { Card, Divider, IconButton, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

import {
  useValculatorLayoutContext,
  TabsType,
} from "@valculator/context/layout";

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
        <Typography variant="h5" fontWeight={900}>
          {tab}
        </Typography>
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
