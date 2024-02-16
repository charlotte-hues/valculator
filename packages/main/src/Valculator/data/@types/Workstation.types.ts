import { MaterialsType } from "./Materials.types";
import { IStation } from "./ValheimData.types";

type StationTypes = "base" | "bench" | "cooking" | "production";

type StationSets = "structures" | "wood";

export interface WorkStation {
  id: string;
  group: "crafting";
  name: string;
  set: StationSets;
  level?: number;
  type: StationTypes;
  materials: {
    [key in MaterialsType]?: number;
  };
  nearby?: keyof IStation;
}
