import { Box, Theme, ThemeProvider } from "@mui/material";
import { TabsMenu } from "./components/layout/TabsMenu";
import { ValculatorSections } from "./components/layout/Sections";

import { ValculatorContextProvider } from "@valculator/context";
import { theme as defaultTheme } from "@valculator/theme";

export const Valculator = ({
  theme,
}: {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}) => {
  return (
    <ThemeProvider theme={theme ?? defaultTheme}>
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
    </ThemeProvider>
  );
};

export default Valculator;
