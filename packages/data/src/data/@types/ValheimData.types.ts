import { MaterialsType } from "./Materials.types";

export interface IItem {
  id: string;
  group: GroupType;
  name: string;
  set: string;
  type: string;
  level?: number;
  materials: { [key in MaterialsType]?: number };
  stats?: IStats;
  effects?: IEffects;
  station?: IStation;
  crafts?: number;
  stacks?: number;
  nearby?: NearbyType;
}

export interface IStation {
  workbench?: number;
  forge?: number;
  cauldron?: number;
  fermenter?: number;
  "Stone Oven"?: number;
  stonecutter?: number;
  "Artisan Table"?: number;
  hammer?: number;
  "black forge"?: number;
  "galdr table"?: number;
  "mead ketill"?: number;
  "food preparation table"?: number;
  "iron cooking station"?: number;
  "cooking station"?: number;
  "eitr refinery"?: number;
}
export interface IStats {
  protection?: number;
  durability?: number;
  weight?: number;
  size?: string;
  pierce?: number;
  slash?: number;
  knockback?: number;
  backstab?: string;
  "parry force"?: number;
  blunt?: number;
  frost?: number;
  spirit?: number;
  poison?: number;
  total?: number;
  fire?: number;
  chop?: number;
  time?: string;
  crafts?: number;
  resistance?: string;
  duration?: string;
  "max health"?: number;
  "max stamina"?: number;
  healing?: number;
  health?: number;
  stamina?: number;
  "health regen"?: string;
  "stamina regen"?: string;
  "block power"?: number;
  pickaxe?: number;
  comfort?: number;
  storage?: number;
  stagger?: number;
  lightning?: number;
  "max eitr"?: number;
  "eitr regen"?: number;
  eitr?: number;
}

interface IEffects {
  sneak?: string;
  movementSpeed?: string;
  "frost resistance"?: boolean;
  additional?: additionalType;
}

export type GroupType =
  | "armor"
  | "building"
  | "weapons"
  | "recipes"
  | "shields"
  | "tools"
  | "crafting"
  | "furniture"
  | "misc"
  | "trinkets";

export type StationType = keyof IStation;

export type StatsType = keyof IStats;

export type EffectsType = keyof IEffects;

export type SetType =
  | "abyssal"
  | "ash"
  | "banners"
  | "bear"
  | "black marble"
  | "black metal"
  | "bone"
  | "bronze"
  | "carapace"
  | "coal"
  | "copper"
  | "core wood"
  | "crystal"
  | "dark wood"
  | "deer"
  | "dvergr"
  | "elemental"
  | "fine wood"
  | "flametal"
  | "flint"
  | "food"
  | "grausten"
  | "iron"
  | "leather"
  | "lox"
  | "mage"
  | "mead"
  | "needle"
  | "obsidian"
  | "other"
  | "padded"
  | "rag"
  | "root"
  | "seasonal"
  | "silver"
  | "stone"
  | "structures"
  | "treasure"
  | "troll"
  | "wolf"
  | "wood";

export type TypeType =
  | "adornments"
  | "arches"
  | "arrows"
  | "axe"
  | "banners"
  | "base"
  | "beams"
  | "beds"
  | "bench"
  | "bolts"
  | "bows"
  | "bucklers"
  | "cape"
  | "chest"
  | "club"
  | "co-op"
  | "axes"
  | "comfort"
  | "cooked food"
  | "cooking"
  | "crafting"
  | "crossbows"
  | "decoration"
  | "decorative"
  | "defense"
  | "doors"
  | "eitr"
  | "feasts"
  | "fire"
  | "fists"
  | "floor"
  | "healing"
  | "helmet"
  | "knives"
  | "legs"
  | "lighting"
  | "magic"
  | "misc"
  | "missiles"
  | "pickaxe"
  | "piles"
  | "pillars"
  | "polearms"
  | "poles"
  | "potions"
  | "prepared food"
  | "production"
  | "resistance"
  | "road"
  | "roof"
  | "round shields"
  | "rugs"
  | "seating"
  | "siege"
  | "spear"
  | "stairs"
  | "stamina"
  | "storage"
  | "sword"
  | "tables"
  | "teleport"
  | "throwables"
  | "tower shields"
  | "transport"
  | "trinket"
  | "walls";

type NearbyType = "artisan Table" | "forge" | "workbench";

type additionalType =
  | "Resistant vs. Frost (negated when Wet)"
  | "Resistant vs. Pierce";
