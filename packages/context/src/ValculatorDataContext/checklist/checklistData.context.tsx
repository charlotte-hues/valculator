import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { useUrlFilters } from "../../helpers/useUrlFilters";

import { SelectedItem } from "../items/itemData.types";
import { useItemsDataContext } from "../items/itemsData.context";
import { checklistReducer } from "./checklistData.helpers";
import {
  ChecklistDataContextValues,
  ChecklistMaterialType,
  ChecklistStationType,
} from "./checklistData.types";
import { getMaterialInfo } from "../../helpers/getMaterialInfo";

const ChecklistDataContext = createContext<ChecklistDataContextValues>({
  checklist: {
    uncollected: [],
    collected: [],
    requiredStations: [],
    upgradeItems: [],
    totalRequiredMaterials: 0,
  },
  checklistDispatch: {
    collect: () => {},
    removeCollected: () => {},
    resetChecklist: () => {},
  },
});

export const ChecklistDataContextProvider = ({
  children,
}: PropsWithChildren) => {
  const {
    items: { selected, owned },
  } = useItemsDataContext();
  const { materials: initialMaterials, version } = useUrlFilters();

  const initialState = {
    uncollected: [] as ChecklistMaterialType[],
    collected: getMaterialInfo(initialMaterials, version),
    requiredStations: [] as Array<ChecklistStationType>,
    upgradeItems: [] as SelectedItem[],
    totalRequiredMaterials: 0,
  };

  const [checklist, checklistDispatch] = useReducer(
    checklistReducer,
    initialState
  );

  useEffect(() => {
    checklistDispatch({
      type: "UPDATE_CHECKLIST",
      selected: selected,
      owned: owned,
    });
  }, [selected, owned]);

  const collect = (id: string) => {
    checklistDispatch({ type: "COLLECT", id });
  };

  const removeCollected = (id: string) => {
    checklistDispatch({ type: "REMOVE_COLLECTED", id });
  };

  const resetChecklist = () => {
    checklistDispatch({ type: "RESET_CHECKLIST" });
  };

  const value = useMemo(() => {
    return {
      checklist,
      checklistDispatch: {
        collect,
        removeCollected,
        resetChecklist,
      },
    };
  }, [checklist]);

  return (
    <ChecklistDataContext.Provider value={value}>
      {children}
    </ChecklistDataContext.Provider>
  );
};

export function useChecklistDataContext() {
  return useContext(ChecklistDataContext);
}
