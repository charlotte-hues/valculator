import { Box } from "@mui/material";

import { TabsMenu, ValculatorSections } from "./Valculator.components";
import { ValculatorContextProvider } from "./Valculator.context";

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
