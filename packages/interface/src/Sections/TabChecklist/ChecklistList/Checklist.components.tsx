import { Box, Checkbox, Collapse, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import { IItem } from "@valculator/data/types";
import { ItemImage } from "@valculator/images";
import {
  ChecklistMaterialType,
  ChecklistStationType,
  SelectedItem,
} from "@valculator/context/types";
import { useValculatorDataContext } from "@valculator/context";
import { GroupHeader } from "../../../components/shared/GroupHeader";
import { LevelIconIndicator } from "../../../components/shared/IconIndicators";
import { ListCard } from "../../../components/shared/ListCard";

export const CraftingStructures = ({
  groupItems,
}: {
  groupItems: Array<ChecklistStationType>;
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <Box>
      <GroupHeader
        groupName={"Crafting Structures"}
        expanded={expanded}
        setExpanded={setExpanded}
        count={groupItems.length}
      />
      {groupItems.length > 0 && (
        <Collapse in={expanded}>
          <Stack
            padding={1}
            justifyContent={"flex-start"}
            direction={"row"}
            flexWrap={"wrap"}
            columnGap={2}
            rowGap={1}
          >
            {groupItems.map((item) => {
              return (
                <CraftingStructure key={item.name} craftingStructure={item} />
              );
            })}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
};

const LevelContainer = styled("div")(() => ({
  position: "relative",
  bottom: "0",
  right: "0",
}));

const CraftingStructure = ({
  craftingStructure,
}: {
  craftingStructure: ChecklistStationType;
}) => {
  return (
    <Box position={"relative"}>
      <ListCard>
        <Box padding={0.5} position={"relative"}>
          <Typography variant="overline">{craftingStructure.name}</Typography>
          <Stack direction="row" gap={1} alignItems={"flex-end"} padding={0.5}>
            <ItemImage item={craftingStructure as unknown as IItem} size={48} />
            <LevelContainer>
              <LevelIconIndicator
                level={craftingStructure.level}
                name={craftingStructure.name}
              />
            </LevelContainer>
          </Stack>
        </Box>
      </ListCard>
    </Box>
  );
};

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

const ChecklistRowItem = ({
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
    <ListCard>
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
    </ListCard>
  );
};

export const UpgradeItemsGroup = ({
  groupItems,
}: {
  groupItems: Array<SelectedItem>;
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Box>
      <GroupHeader
        groupName={"To Upgrade"}
        expanded={expanded}
        setExpanded={setExpanded}
        count={groupItems.length}
      />
      {groupItems.length > 0 && (
        <Collapse in={expanded}>
          <Stack spacing={1} padding={1}>
            {groupItems.map((item) => {
              return <UpgradeItemRowItem key={item.id} item={item} />;
            })}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
};

const UpgradeItemRowItem = ({ item }: { item: SelectedItem }) => {
  return (
    <ListCard>
      <Box
        display="flex"
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={0.5}
      >
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <Checkbox checked={true} size="small" disabled={true} />
          <Typography>{item.name}</Typography>
          <LevelIconIndicator level={item.level ?? 0} name={item.name} />
        </Stack>
        <Typography>{item.quantity}</Typography>
      </Box>
    </ListCard>
  );
};
