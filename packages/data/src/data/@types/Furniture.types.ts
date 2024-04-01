import { MaterialsType } from "./Materials.types";
import { IStation } from "./ValheimData.types";

interface FurnitureStats {
  comfort?: number;
  storage?: number;
}

type FurnitureSets =
  | "black metal"
  | "black marble"
  | "bronze"
  | "banners"
  | "core wood"
  | "copper"
  | "deer"
  | "fine wood"
  | "hare"
  | "iron"
  | "jute"
  | "lox"
  | "seasonal"
  | "stone"
  | "treasure"
  | "wolf"
  | "wood";

type FurnitureTypes =
  | "beds"
  | "banners"
  | "comfort"
  | "decorative"
  | "lighting"
  | "rugs"
  | "seating"
  | "storage"
  | "tables";

export interface Furniture {
  id: string;
  group: "furniture";
  name: string;
  set: FurnitureSets;
  type: FurnitureTypes;

  stats?: FurnitureStats;
  station: IStation;
  materials: { [key in MaterialsType]?: number };
}
