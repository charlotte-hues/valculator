import { Box, Tab, Tabs } from "@mui/material";
import {
  TabsType,
  useValculatorLayoutContext,
} from "@valculator/context/layout";

export const TabsMenu = () => {
  const { handleTabChange, isFullScreen, activeTab } =
    useValculatorLayoutContext();
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
