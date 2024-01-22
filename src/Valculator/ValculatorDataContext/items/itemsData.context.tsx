import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { useUrlFilters } from "@/utils/hooks/useUrlFilters";
import { getItemInfo } from "@/Valculator/Valculator.helpers";

import { ItemsDataContextValues } from "./itemData.types";
import { itemsReducer } from "./itemsData.helpers";

const ItemsDataContext = createContext<ItemsDataContextValues>({
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
});

export const ItemsDataContextProvider = ({ children }: PropsWithChildren) => {
  const { items: initialItems, version } = useUrlFilters();

  const [items, itemsDispatch] = useReducer(itemsReducer, {
    selected: getItemInfo(initialItems.selected, version),
    owned: getItemInfo(initialItems.owned, version),
  });

  const addItem = useCallback((id: string) => {
    return itemsDispatch({ type: "ADD_ITEM", id: id });
  }, []);
  const removeItem = useCallback(
    (id: string) => itemsDispatch({ type: "REMOVE_ITEM", id: id }),
    []
  );
  const addOwnedItem = useCallback(
    (id: string) => itemsDispatch({ type: "ADD_OWNED", id: id }),
    []
  );
  const removeOwnedItem = useCallback(
    (id: string) => itemsDispatch({ type: "REMOVE_OWNED", id: id }),
    []
  );
  const removeAll = useCallback(
    () => itemsDispatch({ type: "RESET", id: "" }),
    []
  );

  const value = useMemo(() => {
    return {
      items,
      itemsDispatch: {
        addItem,
        removeItem,
        addOwnedItem,
        removeOwnedItem,
        removeAll,
      },
    };
  }, [addItem, addOwnedItem, items, removeAll, removeItem, removeOwnedItem]);

  return (
    <ItemsDataContext.Provider value={value}>
      {children}
    </ItemsDataContext.Provider>
  );
};

export function useItemsDataContext() {
  return useContext(ItemsDataContext);
}
