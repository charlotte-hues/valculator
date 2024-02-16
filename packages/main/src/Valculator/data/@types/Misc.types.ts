import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

interface MiscStats extends Pick<IStats, "comfort"> {
  comfort: NonNullable<IStats["comfort"]>;
}

type MiscSets =
  | "bronze"
  | "coal"
  | "core wood"
  | "iron"
  | "stone"
  | "structures"
  | "treasure"
  | "wood";

type MiscTypes =
  | "co-op"
  | "defense"
  | "fire"
  | "piles"
  | "road"
  | "teleport"
  | "transport";

export interface Misc {
  id: string;
  group: "misc";
  name: string;
  set: MiscSets;
  type: MiscTypes;
  station: IStation;
  materials: {
    [key in MaterialsType]?: number;
  };
  stats?: MiscStats;
}
