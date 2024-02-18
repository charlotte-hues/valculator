import { Box, Button, Typography } from "@mui/material";

import { useValculatorDataContext } from "@valculator/context";
import { getSelectedCount } from "../../../helpers/getSelectedCount";

export const SelectionActions = () => {
  const {
    itemsDispatch: { removeAll },
    items: { selected },
  } = useValculatorDataContext();

  return (
    <Box
      display="flex"
      gap={1}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography>{`${getSelectedCount(selected)} items selected`}</Typography>
      <Button disabled={!selected.length} onClick={removeAll}>
        Clear Selection
      </Button>
    </Box>
  );
};
