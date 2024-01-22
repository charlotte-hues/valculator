import {
  Box,
  Card,
  CardActionArea,
  Checkbox,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { GroupHeader } from "@/Valculator/SharedValculator.components/GroupHeader";
import { ChecklistMaterialType } from "@/Valculator/ValculatorDataContext/checklist/checklistData.types";
import { useValculatorDataContext } from "@/Valculator/ValculatorDataContext/ValculatorData.context";

export const ChecklistGroup = ({
  groupItems,
  groupName,
  variant,
}: {
  groupItems: Array<ChecklistMaterialType>;
  groupName: string;
  variant: "uncollected" | "collected";
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Box>
      <GroupHeader
        groupName={groupName}
        expanded={expanded}
        setExpanded={setExpanded}
        count={groupItems.length}
      />
      {groupItems.length > 0 && (
        <Collapse in={expanded}>
          <Stack spacing={1} padding={1}>
            {groupItems.map((item) => {
              return (
                <ChecklistRowItem key={item.id} item={item} variant={variant} />
              );
            })}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
};

export const ChecklistRowItem = ({
  item,
  variant,
}: {
  item: ChecklistMaterialType;
  variant: "uncollected" | "collected";
}) => {
  const {
    checklistDispatch: { collect, removeCollected },
  } = useValculatorDataContext();

  const handleCheckboxChange = () => {
    if (variant === "uncollected") {
      collect(item.id);
    } else {
      removeCollected(item.id);
    }
  };

  return (
    <Card>
      <CardActionArea>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={0.5}
        >
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Checkbox
              checked={variant === "collected"}
              size="small"
              onChange={handleCheckboxChange}
            />
            <Typography>{item.name}</Typography>
          </Stack>
          <Typography>{item.quantity}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
