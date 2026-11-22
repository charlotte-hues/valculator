import { IItem } from "@valculator/data/types";
import { capitalize, removeSpaces } from "./stringFunctions";

const imageHost = import.meta.env.DEV
  ? "https://valculator-image-hosting-bucket.s3.eu-west-1.amazonaws.com"
  : "https://images.valculator.io";

export const getItemImageSrc = (item: IItem) => {
  const isMeadBase = item.set === "mead" && item.type == "base";
  const group = isMeadBase ? "recipes" : item.group;
  const fileName = isMeadBase ? "MeadBase" : removeSpaces(capitalize(item.name));

  if (import.meta.env.VITE_PREVIEW) {
    return `./src/assets/item-images/${group}/${fileName}.png`;
  }

  return `${imageHost}/${group}/${fileName}.png`;
};
