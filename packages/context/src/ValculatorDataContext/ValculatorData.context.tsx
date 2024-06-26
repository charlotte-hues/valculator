import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { useUrlFilters } from "../helpers/useUrlFilters";

import { getItemUrlParamIds } from "../helpers/getItemUrlParamIds";
import { useChecklistDataContext } from "./checklist/checklistData.context";
import {
  ChecklistDataType,
  ChecklistDispatch,
} from "./checklist/checklistData.types";
import { ItemsDataType, ItemsDispatch } from "./items/itemData.types";
import { useItemsDataContext } from "./items/itemsData.context";

export type ValculatorDataContextValues = {
  items: ItemsDataType;
  itemsDispatch: ItemsDispatch;
  checklist: ChecklistDataType;
  checklistDispatch: ChecklistDispatch;
};

const ValculatorDataContext = createContext<ValculatorDataContextValues>({
  items: {
    selected: [],
    owned: [],
  },
  itemsDispatch: {
    addItem: () => {},
    removeItem: () => {},
    addOwnedItem: () => {},
    removeOwnedItem: () => {},
    removeAll: () => {},
  },
  checklist: {
    uncollected: [],
    collected: [],
    upgradeItems: [],
    requiredStations: [],
    totalRequiredMaterials: 0,
  },
  checklistDispatch: {
    collect: () => {},
    removeCollected: () => {},
    resetChecklist: () => {},
  },
});

export const ValculatorDataContextProvider = ({
  children,
}: PropsWithChildren) => {
  const { items, itemsDispatch } = useItemsDataContext();
  const { checklist, checklistDispatch } = useChecklistDataContext();
  const { handleUpdateSearchParams } = useUrlFilters();

  useEffect(() => {
    handleUpdateSearchParams({
      items: {
        ...(items.selected?.length
          ? { selected: getItemUrlParamIds(items.selected) }
          : { selected: [] }),
        ...(items.owned?.length
          ? { owned: getItemUrlParamIds(items.owned) }
          : {}),
      },
      materials: [
        ...(checklist.collected?.length
          ? getItemUrlParamIds(checklist.collected)
          : []),
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, checklist.collected]);

  const value = useMemo(() => {
    return {
      items,
      itemsDispatch,
      checklist,
      checklistDispatch,
    };
  }, [checklist, checklistDispatch, items, itemsDispatch]);

  return (
    <ValculatorDataContext.Provider value={value}>
      {children}
    </ValculatorDataContext.Provider>
  );
};

export function useValculatorDataContext() {
  return useContext(ValculatorDataContext);
}
