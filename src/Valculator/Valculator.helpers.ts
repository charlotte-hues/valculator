import { removeSpaces } from "@/utils/stringFunctions";
import { IItem } from "@/Valculator/data/@types/ValheimData.types";
import { allItemsData } from "@/Valculator/data/allItems.data";

import { materialsData } from "./data/materials.data";
import { getLegacyId } from "./legacy/legacy.helpers";
import { ChecklistMaterialType } from "./ValculatorDataContext/checklist/checklistData.types";
import { SelectedItem } from "./ValculatorDataContext/items/itemData.types";

export const getItemImageSrc = (item: IItem) => {
  return item.set === "mead" && item.type == "base"
    ? `/images/item-images/recipes/MeadBase.png`
    : `/images/item-images/${item.group}/${removeSpaces(item.name)}.png`;
};

export const getItemName = (item: IItem) => {
  return `${item.name}${item?.crafts ? ` (x${item.crafts})` : ""}`;
};

export const getItemUrlParamIds = (
  itemArray: Array<{ id: string; quantity: number }> = []
) => {
  return itemArray?.map((item) => `${item.id}:${item.quantity}`);
};

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

export const getMaterialInfo: (
  idArray?: Array<string>,
  version?: number
) => Array<ChecklistMaterialType> = (idArray = [], version = 2) => {
  return idArray
    ?.map((idString) => {
      const splitIdString = idString.split(":");
      const id = splitIdString[0];
      const quantity = Number(splitIdString[1]);
      const materialIndex = materialsData.findIndex((item) =>
        version < 2 ? item.id === getLegacyId(id, "material") : item.id === id
      );
      if (materialIndex === -1) return null;
      const material = materialsData[materialIndex];
      return {
        ...material,
        quantity,
      };
    })
    .filter((item) => item !== null) as Array<ChecklistMaterialType>;
};
