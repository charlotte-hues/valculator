import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type WeaponType =
  | "arrows"
  | "axes"
  | "bolts"
  | "bows"
  | "club"
  | "crossbows"
  | "fists"
  | "knives"
  | "magic"
  | "missiles"
  | "polearms"
  | "spear"
  | "sword"
  | "throwables";

type WeaponSets =
  | "flint"
  | "copper"
  | "abyssal"
  | "black metal"
  | "wood"
  | "bronze"
  | "eitr"
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
  | "bone"
  | "carapace"
  | "flametal"
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
