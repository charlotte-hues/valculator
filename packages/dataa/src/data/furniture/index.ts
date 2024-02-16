import { Furniture } from "../@types/Furniture.types";
import { banners } from "./banners.data";
import { beds } from "./beds.data";
import { comfort } from "./comfort.data";
import { decorative } from "./decorative.data";
import { lighting } from "./lighting.data";
import { rugs } from "./rugs.data";
import { seating } from "./seating.data";
import { storage } from "./storage.data";
import { tables } from "./tables.data";

const furnitureList: Array<Omit<Furniture, "group" | "id">> = [
  ...banners,
  ...beds,
  ...comfort,
  ...decorative,
  ...lighting,
  ...rugs,
  ...seating,
  ...storage,
  ...tables,
];

export const furnitureData: Array<Omit<Furniture, "id">> = furnitureList.map(
  (item) => ({
    ...item,
    group: "furniture",
  })
);
