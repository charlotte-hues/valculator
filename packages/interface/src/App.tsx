import { Box } from "@mui/material";
import { TabsMenu } from "./components/layout/TabsMenu";
import { ValculatorSections } from "./components/layout/Sections";

import { ValculatorContextProvider } from "@valculator/context";

export const Valculator = () => {
  return (
    <ValculatorContextProvider>
      <>
        <Box
          padding={2}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TabsMenu />
        </Box>
        <ValculatorSections />
      </>
    </ValculatorContextProvider>
  );
};

export default Valculator;
