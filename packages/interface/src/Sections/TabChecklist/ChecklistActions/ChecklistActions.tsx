import { Box, Button, Typography } from "@mui/material";

import { useValculatorDataContext } from "@valculator/context";

import { getPercentageComplete } from "../TabChecklist.helpers";

export const ChecklistActions = () => {
  const {
    checklist: { collected, totalRequiredMaterials },
    checklistDispatch: { resetChecklist },
  } = useValculatorDataContext();

  return (
    <Box
      display={"flex"}
      gap={1}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography>
        {totalRequiredMaterials > 0 &&
          `${getPercentageComplete(
            collected,
            totalRequiredMaterials
          )}% complete`}
      </Typography>
      <Button disabled={!collected.length} onClick={resetChecklist}>
        Reset Checklist
      </Button>
    </Box>
  );
};
