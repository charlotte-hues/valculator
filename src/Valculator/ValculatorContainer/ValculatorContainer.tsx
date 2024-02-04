import { Box, Grid } from "@mui/material";

import { TabChecklist } from "../TabChecklist/TabChecklist";
import { TabSearch } from "../TabSearch/TabSearch";
import { TabSelection } from "../TabSelection/TabSelection";
import { SectionContainer } from "../Valculator.components";
import { useValculatorLayoutContext } from "../ValculatorDataContext/layout/ValculatorLayout.context";


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
