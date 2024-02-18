import { Stack } from "@mui/material";
import RenderIfVisible from "react-render-if-visible";

import { GroupType } from "@valculator/data/types";
import { EmptyListText } from "../../../components/shared/EmptyListText";

import { useTabSelectionContext } from "../TabSelection.context";
import { SelectionGroup } from "./SelectionList.components";

const ESTIMATED_HEIGHT = 600;

export const SelectionList = () => {
  const { groups } = useTabSelectionContext();

  return (
    <Stack spacing={1}>
      {groups.map((group) => {
        const groupName = Object.keys(group)[0] as GroupType;

        return (
          <RenderIfVisible key={groupName} defaultHeight={ESTIMATED_HEIGHT}>
            <SelectionGroup
              groupItems={group[groupName]}
              groupName={groupName}
            />
          </RenderIfVisible>
        );
      })}
      {groups.length === 0 && (
        <EmptyListText>
          Select the items you want to craft to get started
        </EmptyListText>
      )}
    </Stack>
  );
};
