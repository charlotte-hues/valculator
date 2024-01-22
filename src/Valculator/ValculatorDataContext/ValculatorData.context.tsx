import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { useUrlFilters } from "@/utils/hooks/useUrlFilters";

import { getItemUrlParamIds } from "../Valculator.helpers";
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
  const { handleUpdateUrl } = useUrlFilters();

  useEffect(() => {
    handleUpdateUrl({
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
