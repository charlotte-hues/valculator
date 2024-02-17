import { Box, Divider } from "@mui/material";
import { PropsWithChildren } from "react";

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
