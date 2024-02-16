import { Box } from "@mui/material";

import { TabsMenu } from "./Valculator.components";
import { ValculatorContextProvider } from "./Valculator.context";
import { ValculatorSections } from "./ValculatorContainer/ValculatorContainer";

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