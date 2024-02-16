import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type ShieldType = "round shields" | "tower shields" | "bucklers";

type ShieldSets =
  | "black metal"
  | "bronze"
  | "bone"
  | "carapace"
  | "iron"
  | "other"
  | "silver"
  | "wood";

interface ShieldEffects {
  movementSpeed: string;
}

interface ShieldStats
  extends Pick<
    IStats,
    "block power" | "durability" | "parry force" | "weight"
  > {
  "block power": NonNullable<IStats["block power"]>;
  "parry force"?: number;
  durability: NonNullable<IStats["durability"]>;
  weight: NonNullable<IStats["weight"]>;
}

export interface Shield {
  id: string;
  group: "shields";
  name: string;
  level: number;
  set: ShieldSets;
  type: ShieldType;
  stats: ShieldStats;
  effects: ShieldEffects;
  station: IStation;
  materials: { [key in MaterialsType]?: number };
}
