import { ListContainer, SectionHeadContainer } from "../Valculator.components";
import { SelectionActions } from "./SelectionActions/SelectionActions";
import { SelectionList } from "./SelectionList/SelectionList";
import { TabSelectionContextProvider } from "./TabSelection.context";

export const TabSelection = () => {
  return (
    <TabSelectionContextProvider>
      <SectionHeadContainer>
        <SelectionActions />
      </SectionHeadContainer>
      <ListContainer>
        <SelectionList />
      </ListContainer>
    </TabSelectionContextProvider>
  );
};
