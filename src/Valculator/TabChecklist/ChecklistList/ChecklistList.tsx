import { Stack } from "@mui/material";

import { useValculatorDataContext } from "@/Valculator/ValculatorDataContext/ValculatorData.context";

import { ChecklistGroup, UpgradeItemsGroup } from "./Checklist.components";

export const ChecklistList = () => {
  const {
    checklist: { uncollected, collected, upgradeItems },
  } = useValculatorDataContext();

  return (
    <Stack spacing={1}>
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
