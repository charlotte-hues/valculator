import { ListContainer, SectionHeadContainer } from "../Valculator.components";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { SearchList } from "./SearchList/SearchList";
import { TabSearchContextProvider } from "./TabSearch.context";

export const TabSearch = () => {
  return (
    <TabSearchContextProvider>
      <SectionHeadContainer>
        <SearchFilter />
      </SectionHeadContainer>
      <ListContainer>
        <SearchList />
      </ListContainer>
    </TabSearchContextProvider>
  );
};
