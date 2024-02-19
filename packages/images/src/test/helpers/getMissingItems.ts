import { allItemsData } from "@valculator/data";
import { capitalize, removeSpaces } from "../../helpers/stringFunctions";
import { IItem } from "@valculator/data/types";

function checkIfImageMissing(item: IItem) {
  const isMeadBase = item.set === "mead" && item.type == "base";

  const url = new URL(
    `../../assets/item-images/${isMeadBase ? "recipes" : item.group}/${
      isMeadBase ? "MeadBase" : removeSpaces(capitalize(item.name))
    }.png`,
    import.meta.url
  ).href;

  return url.includes("undefined");
}

export function getMissingItems() {
  const missingItems = allItemsData
    .filter((item: IItem) => {
      return checkIfImageMissing(item);
    })
    .reduce((acc, cur) => {
      const duplicateIndex = acc.findIndex(
        (item: IItem) => item.name === cur.name
      );

      if (duplicateIndex === -1) {
        acc.push(cur);
      }

      return [...acc];
    }, [] as IItem[]);
  return missingItems;
}
