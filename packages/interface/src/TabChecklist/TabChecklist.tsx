import { ListContainer } from "../components/layout/ListContainer";
import { SectionHeadContainer } from "../components/layout/SectionHeadContainer";
import { ChecklistActions } from "./ChecklistActions/ChecklistActions";
import { ChecklistList } from "./ChecklistList/ChecklistList";

export const TabChecklist = () => {
  return (
    <>
      <SectionHeadContainer>
        <ChecklistActions />
      </SectionHeadContainer>
      <ListContainer>
        <ChecklistList />
      </ListContainer>
    </>
  );
};
