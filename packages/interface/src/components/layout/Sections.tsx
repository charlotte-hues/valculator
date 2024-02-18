import { Box, Grid } from "@mui/material";

import { TabChecklist } from "../../Sections/TabChecklist/TabChecklist";
import { TabSearch } from "../../Sections/TabSearch/TabSearch";
import { TabSelection } from "../../Sections/TabSelection/TabSelection";
import { useValculatorLayoutContext } from "@valculator/context/layout";
import { SectionContainer } from "./SectionContainer";

export const ValculatorSections = () => {
  const { isFullScreen, activeTab } = useValculatorLayoutContext();

  return (
    <Box padding={1}>
      <Grid container spacing={2}>
        {(!isFullScreen || activeTab === "search") && (
          <Grid item xs={12} md={isFullScreen ? 12 : 5}>
            <SectionContainer tab="search">
              <TabSearch />
            </SectionContainer>
          </Grid>
        )}
        {(!isFullScreen || activeTab === "selection") && (
          <Grid item xs={12} md={isFullScreen ? 12 : 4}>
            <SectionContainer tab="selection">
              <TabSelection />
            </SectionContainer>
          </Grid>
        )}
        {(!isFullScreen || activeTab === "checklist") && (
          <Grid item xs={12} md={isFullScreen ? 12 : 3}>
            <SectionContainer tab="checklist">
              <TabChecklist />
            </SectionContainer>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
