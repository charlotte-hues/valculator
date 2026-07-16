import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type RecipeTypes =
  | "base"
  | "cooked food"
  | "eitr"
  | "feasts"
  | "healing"
  | "potions"
  | "prepared food"
  | "resistance"
  | "stamina";

type RecipeSets = "food" | "mead";

interface RecipeStats
  extends Pick<
    IStats,
    | "crafts"
    | "duration"
    | "health"
    | "health regen"
    | "healing"
    | "max eitr"
    | "max health"
    | "max stamina"
    | "max eitr"
    | "resistance"
    | "stamina"
    | "stamina regen"
    | "time"
    | "weight"
  > {
  weight: NonNullable<IStats["weight"]>;
}

export interface Recipe {
  id: string;
  group: "recipes";
  name: string;
  set: RecipeSets;
  type: RecipeTypes;
  stacks: number;
  stats: RecipeStats;
  station: IStation;
  materials: { [key in MaterialsType]?: number };
  crafts?: number;
}

export interface Feast {
  id: string;
  group: "recipes";
  name: string;
  set: RecipeSets;
  type: "feasts";
  stacks: number;
  resultQuantity: number;
  stats: RecipeStats;
  station: IStation;
  materials: { [key in MaterialsType]?: number };
}
