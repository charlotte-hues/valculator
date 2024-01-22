import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { useValculatorDataContext } from "../ValculatorDataContext/ValculatorData.context";
import { TabChecklistContextValues } from "./TabChecklist.types";

const TabChecklistContext = createContext<TabChecklistContextValues>({
  groups: [],
});

export const TabChecklistContextProvider = ({
  children,
}: PropsWithChildren) => {
  const {
    items: { selected },
  } = useValculatorDataContext();

  const value = useMemo(() => {
    return {
      groups: selected,
    };
  }, [selected]);

  return (
    <TabChecklistContext.Provider value={value}>
      {children}
    </TabChecklistContext.Provider>
  );
};

export function useTabChecklistContext() {
  return useContext(TabChecklistContext);
}
