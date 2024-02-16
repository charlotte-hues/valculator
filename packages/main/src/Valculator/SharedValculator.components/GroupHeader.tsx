import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

import { ExpandButton } from "./ExpandButton";

export const GroupHeader = ({
  groupName,
  expanded,
  setExpanded,
  count,
}: {
  groupName: string;
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  count: number;
}) => {
  return (
    <Box
      padding={1}
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="overline">{`${groupName} (${count})`}</Typography>
      {count > 0 && (
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      )}
    </Box>
  );
};
