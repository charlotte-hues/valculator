import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type BuildingSets =
  | "ash"
  | "black marble"
  | "bronze"
  | "core wood"
  | "crystal"
  | "dark wood"
  | "dvergr"
  | "flametal"
  | "grausten"
  | "iron"
  | "stone"
  | "wood";

type BuildingTypes =
  | "adornments"
  | "arches"
  | "beams"
  | "defense"
  | "doors"
  | "floor"
  | "pillars"
  | "poles"
  | "roof"
  | "stairs"
  | "walls";

interface BuildingStats extends Pick<IStats, "size"> {
  size: NonNullable<IStats["size"]>;
}

export interface Building {
  id: string;
  group: "building";
  name: string;
  set: BuildingSets;
  type: BuildingTypes;
  stats: BuildingStats;
  station: IStation;
  materials: {
    [key in MaterialsType]?: number;
  };
}
