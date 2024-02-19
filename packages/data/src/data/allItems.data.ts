import { getAllOptions } from "../helpers/getAllOptions";
import { getItemId } from "../helpers/getItemId";
import {
  GroupType,
  IItem,
  SetType,
  TypeType,
} from "./@types/ValheimData.types";
import { armorData } from "./armor";
import { buildingData } from "./building";
import { furnitureData } from "./furniture";
import { miscData } from "./misc";
import { recipesData } from "./recipes";
import { shieldsData } from "./shields";
import { stationsData } from "./stations";
import { toolsData } from "./tools";
import { weaponsData } from "./weapons";

export const allItemsData: Array<IItem> = [
  ...(armorData as Array<IItem>),
  ...(buildingData as Array<IItem>),
  ...(weaponsData as Array<IItem>),
  ...(recipesData as Array<IItem>),
  ...(shieldsData as Array<IItem>),
  ...(toolsData as Array<IItem>),
  ...(stationsData as Array<IItem>),
  ...(furnitureData as Array<IItem>),
  ...(miscData as Array<IItem>),
].map((item) => ({ ...item, id: getItemId(item.name, "item", item?.level) }));

export const allItems: Array<string> = getAllOptions(["name"]);
export const allGroups: Array<GroupType> = getAllOptions(["group"]);
export const allTypes: Array<TypeType> = getAllOptions(["type"]);
export const allSets: Array<SetType> = getAllOptions(["set"]);
export const allLevels = getAllOptions(["level"]);
export const allWorkbenchLevels = getAllOptions(["station", "workbench"]);
export const allForgeLevels = getAllOptions(["station", "forge"]);

export const maxItemLevels: { [key: string]: number } = allItems.reduce(
  (acc, cur) => {
    const itemMaxLevel = allItemsData
      .filter((item) => item.name === cur)
      .reduce((acc, cur) => Math.max(acc, Number(cur?.level ?? 0)), 0);
    return { ...acc, [cur]: itemMaxLevel };
  },
  {}
);
