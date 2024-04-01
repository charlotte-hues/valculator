import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type ArmorSets =
  | "bronze"
  | "carapace"
  | "iron"
  | "eitr-weave"
  | "fenris"
  | "leather"
  | "lox"
  | "padded"
  | "rag"
  | "root"
  | "sesonal"
  | "troll"
  | "wolf";

type ArmorTypes = "cape" | "chest" | "helmet" | "legs";

interface ArmorStats
  extends Pick<IStats, "protection" | "durability" | "weight"> {
  protection: NonNullable<IStats["protection"]>;
  durability: NonNullable<IStats["durability"]>;
  weight: NonNullable<IStats["weight"]>;
}

type AdditionalEffects =
  | "Resistant vs. Frost (negated when Wet)"
  | "Resistant vs. Pierce"
  | "Feather fall"
  | "Eitr regen";

interface ArmorEffects {
  sneak?: string;
  movementSpeed?: string;
  "frost resistance"?: boolean;
  additional?: AdditionalEffects;
}

export interface Armor {
  id: string;
  group: "armor";
  name: string;
  level: number;
  set: ArmorSets;
  type: ArmorTypes;
  stats: ArmorStats;
  effects: ArmorEffects;
  station: IStation;
  materials: {
    [key in MaterialsType]?: number;
  };
}
