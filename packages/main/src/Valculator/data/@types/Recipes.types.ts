import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type RecipeTypes =
  | "base"
  | "cooked food"
  | "healing"
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
    | "max health"
    | "max stamina"
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
