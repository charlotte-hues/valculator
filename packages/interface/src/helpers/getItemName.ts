import { IItem } from "@valculator/data/types";

export const getItemName = (item: IItem) => {
  return `${item.name}${item?.crafts ? ` (x${item.crafts})` : ""}`;
};
