import { ListContainer, SectionHeadContainer } from "../Valculator.components";
import { ChecklistActions } from "./ChecklistActions/ChecklistActions";
import { ChecklistList } from "./ChecklistList/ChecklistList";
import { TabChecklistContextProvider } from "./TabChecklist.context";

export const TabChecklist = () => {
  return (
    <TabChecklistContextProvider>
      <>
        <SectionHeadContainer>
          <ChecklistActions />
        </SectionHeadContainer>
        <ListContainer>
          <ChecklistList />
        </ListContainer>
      </>
    </TabChecklistContextProvider>
  );
};
