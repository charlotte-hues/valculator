import { ListContainer } from "../../components/layout/ListContainer";
import { SectionHeadContainer } from "../../components/layout/SectionHeadContainer";
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
