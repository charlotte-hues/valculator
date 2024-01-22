import { allItemsData } from "@/Valculator/data/allItems.data";

import { ItemsDataAction, ItemsDataType, SelectedItem } from "./itemData.types";

const getItemById = (id: string) => {
  const itemIndex = allItemsData.findIndex((item) => {
    return item.id === id;
  });
  return allItemsData[itemIndex];
};

export const getSelectedCount = (selected: Array<SelectedItem>) => {
  return selected.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
};

const addItem = (state: ItemsDataType, action: ItemsDataAction) => {
  const { id } = action;
  const updatedSelection = [...state.selected];
  const updatedItemIndex = updatedSelection.findIndex(
    (selectedItem) => selectedItem.id === id
  );
  if (updatedItemIndex < 0) {
    const selectedItem = getItemById(id);
    updatedSelection.push({ ...selectedItem, quantity: 1 });
  } else {
    const updatedItem = { ...updatedSelection[updatedItemIndex] };
    updatedItem.quantity++;
    updatedSelection[updatedItemIndex] = updatedItem;
  }
  return { ...state, selected: updatedSelection };
};

const removeAllOwnedItems = (group: Array<SelectedItem>, name: string) => {
  return group.filter((item) => item.name !== name);
};

const removeItem = (state: ItemsDataType, action: ItemsDataAction) => {
  const { id } = action;
  const updatedSelection = [...state.selected];
  let updatedOwned = [...state.owned];
  const updatedItemIndex = updatedSelection.findIndex((item) => item.id === id);

  const updatedItem = { ...updatedSelection[updatedItemIndex] };

  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedSelection.splice(updatedItemIndex, 1);
    updatedOwned = removeAllOwnedItems(updatedOwned, updatedItem.name);
  } else {
    updatedSelection[updatedItemIndex] = updatedItem;
  }
  return { ...state, selected: updatedSelection, owned: updatedOwned };
};

const addOwnItem = (state: ItemsDataType, action: ItemsDataAction) => {
  const { id } = action;
  const updatedOwned = [...state.owned];
  const updatedItemIndex = updatedOwned.findIndex((item) => item.id === id);

  if (updatedItemIndex < 0) {
    const ownedItem = getItemById(id);
    updatedOwned.push({ ...ownedItem, quantity: 1 });
  } else {
    const updatedItem = { ...updatedOwned[updatedItemIndex] };
    updatedItem.quantity++;
    updatedOwned[updatedItemIndex] = updatedItem;
  }
  return { ...state, owned: updatedOwned };
};

const removeOwnItem = (state: ItemsDataType, action: ItemsDataAction) => {
  const { id } = action;
  const updatedOwned = [...state.owned];
  const updatedItemIndex = updatedOwned.findIndex((item) => item.id === id);

  const updatedItem = { ...updatedOwned[updatedItemIndex] };

  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedOwned.splice(updatedItemIndex, 1);
  } else {
    updatedOwned[updatedItemIndex] = updatedItem;
  }
  return { ...state, owned: updatedOwned };
};

const reset = () => {
  return {
    selected: [],
    owned: [],
  };
};

export const itemsReducer = (state: ItemsDataType, action: ItemsDataAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action);
    case "REMOVE_ITEM":
      return removeItem(state, action);

    case "ADD_OWNED":
      return addOwnItem(state, action);
    case "REMOVE_OWNED":
      return removeOwnItem(state, action);

    case "RESET":
      return reset();

    default:
      return state;
  }
};
