import { MaterialsType } from "./Materials.types";
import { IStation, IStats } from "./ValheimData.types";

type TrinketSets =
  | "bronze"
  | "iron"
  | "silver"
  | "black metal"
  | "carapace"
  | "flametal";

interface TrinketStats extends Pick<IStats, "weight"> {
  weight: NonNullable<IStats["weight"]>;
}

export interface Trinket {
  id: string;
  group: "trinkets";
  name: string;
  set: TrinketSets;
  type: "trinket";
  stats: TrinketStats;
  station: IStation;
  materials: { [key in MaterialsType]?: number };
}
