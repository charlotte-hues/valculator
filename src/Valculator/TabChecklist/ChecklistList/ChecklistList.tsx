import { Stack } from "@mui/material";

import { useValculatorDataContext } from "@/Valculator/ValculatorDataContext/ValculatorData.context";

import { ChecklistGroup } from "./Checklist.components";

export const ChecklistList = () => {
  const {
    checklist: { uncollected, collected },
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
    </Stack>
  );
};
