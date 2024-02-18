import { SelectedItem } from "@valculator/context/types";

export const getSelectedCount = (selected: Array<SelectedItem>) => {
  return selected.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
};
