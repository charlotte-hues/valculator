import { IItem } from "@valculator/data/types";

export type SelectedItem = IItem & { quantity: number };

export interface ItemsDispatch {
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  addOwnedItem: (id: string) => void;
  removeOwnedItem: (id: string) => void;
  removeAll: () => void;
}

export interface ItemsDataType {
  selected: Array<SelectedItem>;
  owned: Array<SelectedItem>;
}

export type ItemsDataContextValues = {
  items: ItemsDataType;
  itemsDispatch: ItemsDispatch;
};

type ItemsDataActionTypes =
  | "ADD_ITEM"
  | "REMOVE_ITEM"
  | "ADD_OWNED"
  | "REMOVE_OWNED"
  | "RESET";

export interface ItemsDataAction {
  type: ItemsDataActionTypes;
  id: string;
}
