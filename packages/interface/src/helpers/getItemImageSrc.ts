import { IItem } from "@valculator/data/types";
import { capitalize, removeSpaces } from "./stringFunctions";

export const getItemImageSrc = (item: IItem) => {
  const isMeadBase = item.set === "mead" && item.type == "base";

  return new URL(
    `./data/images/item-images/${isMeadBase ? "recipes" : item.group}/${
      isMeadBase ? "MeadBase" : removeSpaces(capitalize(item.name))
    }.png`,
    import.meta.url
  ).href;
};
