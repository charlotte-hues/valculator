import { Box, Collapse, Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";

import { allItemsData, maxItemLevels } from "@valculator/data";
import { ExpandButton } from "../../../components/shared/ExpandButton";
import { GroupHeader } from "../../../components/shared/GroupHeader";

import { QuantityButton } from "../../../components/shared/QuantityButton";
import { SelectedItem } from "@valculator/context/types";
import { getSelectedCount } from "../../../helpers/getSelectedCount";
import { ListCard } from "../../../components/shared/ListCard";

export const SelectionGroup = ({
  groupItems,
  groupName,
}: {
  groupItems: Array<SelectedItem>;
  groupName: string;
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Box>
      <GroupHeader
        groupName={groupName}
        expanded={expanded}
        setExpanded={setExpanded}
        count={getSelectedCount(groupItems)}
      />
      <Collapse in={expanded}>
        <Stack spacing={1} padding={1}>
          {groupItems.map((item) => {
            return <SelectionRowItem key={item.id} item={item} />;
          })}
        </Stack>
      </Collapse>
    </Box>
  );
};

export const LevelsIndicator = ({ item }: { item: SelectedItem }) => {
  return (
    <Rating
      readOnly
      value={maxItemLevels[item.name]}
      max={item.level ?? 0}
      size="small"
    />
  );
};

export const OwnedLevelSelector = ({ item }: { item: SelectedItem }) => {
  const max = maxItemLevels[item.name];

  const ownedOptions = allItemsData.filter(
    (i) => i.name === item.name && (i?.level ?? 0) < max
  );

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding={1}
    >
      <Typography>{`If you already have a lower level ${item.name}, add it here:`}</Typography>
      <Stack direction={"column-reverse"} paddingRight={5}>
        {ownedOptions.map((ownedOption) => (
          <Stack key={ownedOption.id} direction={"row"}>
            <QuantityButton id={ownedOption.id} variant="owned" />
            <Rating readOnly value={ownedOption.level} max={max} size="small" />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export const SelectionRowItem = ({ item }: { item: SelectedItem }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <ListCard>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
        padding={1}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <QuantityButton id={item.id} variant="selected" />
          <Typography>{item.name}</Typography>
        </Box>

        <Stack direction={"row"} alignItems={"center"}>
          {item.level && <LevelsIndicator item={item} />}
          {(item.level ?? 0) > 1 && (
            <ExpandButton expanded={expanded} setExpanded={setExpanded} />
          )}
        </Stack>
      </Box>
      <Collapse in={expanded}>
        <OwnedLevelSelector item={item} />
      </Collapse>
    </ListCard>
  );
};
