import { IItem } from "@valculator/data/types";

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const removeSpaces = (s: string) => {
  if (typeof s !== "string") return "";
  return s.replace(/\s/g, "");
};

export const getItemImageSrc = (item: IItem) => {
  const isMeadBase = item.set === "mead" && item.type == "base";

  if (import.meta.env.VITE_PREVIEW) {
    return `./src/assets/item-images/${isMeadBase ? "recipes" : item.group}/${
      isMeadBase ? "MeadBase" : removeSpaces(capitalize(item.name))
    }.png`;
  }

  return `https://valculator-image-hosting-bucket.s3.eu-west-1.amazonaws.com/${
    isMeadBase ? "recipes" : item.group
  }/${isMeadBase ? "MeadBase" : removeSpaces(capitalize(item.name))}.png`;
};
