import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type ToolType = "axe" | "club" | "misc" | "pickaxe";

type ToolSets =
  | "black metal"
  | "bronze"
  | "flint"
  | "iron"
  | "other"
  | "stone"
  | "wood";

interface ToolStats
  extends Pick<
    IStats,
    | "blunt"
    | "chop"
    | "durability"
    | "fire"
    | "knockback"
    | "parry force"
    | "pickaxe"
    | "pierce"
    | "slash"
    | "weight"
  > {
  durability: NonNullable<IStats["durability"]>;
  weight: NonNullable<IStats["weight"]>;
}

interface ToolEffects {
  movementSpeed: string;
}

export interface Tool {
  id: string;
  group: "tools";
  name: string;
  level?: number;
  set: ToolSets;
  type: ToolType;
  stats: ToolStats;
  effects?: ToolEffects;
  station?: IStation;
  materials: { [key in MaterialsType]?: number };
}
