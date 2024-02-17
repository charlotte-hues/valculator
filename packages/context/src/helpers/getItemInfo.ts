import { allItemsData, getLegacyId } from "data";
import { SelectedItem } from "../ValculatorDataContext/items/itemData.types";

export const getItemInfo: (
  idArray?: Array<string>,
  version?: number
) => Array<SelectedItem> = (idArray = [], version = 2) => {
  return idArray
    ?.map((idString) => {
      const splitIdString = idString.split(":");
      const id = splitIdString[0];
      const quantity = Number(splitIdString[1]);
      const itemIndex = allItemsData.findIndex((item) =>
        version < 2 ? item.id === getLegacyId(id, "item") : item.id === id
      );
      if (itemIndex === -1) return null;
      const item = allItemsData[itemIndex];
      return {
        ...item,
        quantity,
      };
    })
    .filter((item) => item !== null) as Array<SelectedItem>;
};
