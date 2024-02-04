import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const EmptyListText = ({ children }: PropsWithChildren) => {
  return (
    <Box display="flex" justifyContent="center" padding={2}>
      <Typography variant="h6">{children}</Typography>
    </Box>
  );
};
