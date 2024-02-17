import { Stack } from "@mui/material";

import { useValculatorDataContext } from "@valculator/context";

import {
  ChecklistGroup,
  CraftingStructures,
  UpgradeItemsGroup,
} from "./Checklist.components";

export const ChecklistList = () => {
  const {
    checklist: { uncollected, collected, upgradeItems, requiredStations },
  } = useValculatorDataContext();

  return (
    <Stack spacing={1}>
      <CraftingStructures groupItems={requiredStations} />
      <ChecklistGroup
        groupItems={uncollected}
        groupName={"uncollected"}
        variant="uncollected"
      />
      <ChecklistGroup
        groupItems={collected}
        groupName={"collected"}
        variant="collected"
      />
      <UpgradeItemsGroup groupItems={upgradeItems} />
    </Stack>
  );
};
