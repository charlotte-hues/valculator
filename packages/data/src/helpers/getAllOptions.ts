import { allItemsData } from "../data/allItems.data";
import { getObjLocation } from "./getObjectLocation";

export function getAllOptions(path: string[], data: any[] = allItemsData) {
  const allOptions = data
    .map((item) => {
      const option = getObjLocation(item, path);
      if (typeof option === "object" && option !== null) {
        return Object.keys(option);
      }
      return option?.toString();
    })
    .flat()
    .filter((value, index, array) => value && array.indexOf(value) === index)
    .sort();

  return allOptions;
}
