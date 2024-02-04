import { ListContainer, SectionHeadContainer } from "../Valculator.components";
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
