import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type WeaponType =
  | "arrows"
  | "axes"
  | "bolts"
  | "bows"
  | "club"
  | "fists"
  | "knives"
  | "magic"
  | "missiles"
  | "polearms"
  | "spear"
  | "sword";

type WeaponSets =
  | "flint"
  | "bone"
  | "carapace"
  | "copper"
  | "eitr"
  | "abyssal"
  | "black metal"
  | "wood"
  | "bronze"
  | "fenris"
  | "iron"
  | "needle"
  | "silver"
  | "bronze"
  | "wood"
  | "obsidian"
  | "elemental"
  | "crystal"
  | "wolf"
  | "other";

interface WeaponStats
  extends Pick<
    IStats,
    | "pierce"
    | "slash"
    | "knockback"
    | "backstab"
    | "parry force"
    | "durability"
    | "weight"
    | "blunt"
    | "frost"
    | "spirit"
    | "poison"
    | "total"
    | "fire"
    | "chop"
    | "stagger"
    | "lightning"
    | "weight"
  > {
  weight: NonNullable<IStats["weight"]>;
}

interface WeaponEffects {
  movementSpeed?: string;
}

export interface Weapon {
  id: string;
  group: "weapons";
  name: string;
  level?: number;
  set: WeaponSets;
  type: WeaponType;
  stats: WeaponStats;
  effects: WeaponEffects;
  station: IStation;
  materials: {
    [key in MaterialsType]?: number;
  };
  crafts?: number;
  stacks?: number;
}
