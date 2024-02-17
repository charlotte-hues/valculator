import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

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
