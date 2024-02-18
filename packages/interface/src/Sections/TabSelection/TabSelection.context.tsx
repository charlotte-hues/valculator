import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { useValculatorDataContext } from "@valculator/context";
import {
  filterEmptyGroups,
  selectionGroupsReducer,
} from "./TabSelection.helpers";
import { TabSelectionContextValues } from "./TabSelection.types";

const TabSelectionContext = createContext<TabSelectionContextValues>({
  groups: [],
});

export const TabSelectionContextProvider = ({
  children,
}: PropsWithChildren) => {
  const {
    items: { selected },
  } = useValculatorDataContext();

  const groups = selected
    .reduce(selectionGroupsReducer, [])
    .filter(filterEmptyGroups);

  const value = useMemo(() => {
    return {
      groups,
    };
  }, [groups]);

  return (
    <TabSelectionContext.Provider value={value}>
      {children}
    </TabSelectionContext.Provider>
  );
};

export function useTabSelectionContext() {
  return useContext(TabSelectionContext);
}
