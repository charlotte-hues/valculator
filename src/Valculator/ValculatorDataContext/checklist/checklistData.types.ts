import { MaterialsType } from "@/Valculator/data/@types/Materials.types";
import { StationType } from "@/Valculator/data/@types/ValheimData.types";

import { SelectedItem } from "../items/itemData.types";

export interface ChecklistDispatch {
  collect: (id: string) => void;
  removeCollected: (id: string) => void;
  resetChecklist: () => void;
}

export interface ChecklistMaterialType {
  id: string;
  name: MaterialsType;
  quantity: number;
}

export interface ChecklistStationType {
  station: StationType;
  level: number;
}
export interface ChecklistDataType {
  uncollected: Array<ChecklistMaterialType>;
  collected: Array<ChecklistMaterialType>;
  requiredStations: Array<ChecklistStationType>;
  totalRequiredMaterials: number;
}

export type ChecklistDataContextValues = {
  checklist: ChecklistDataType;
  checklistDispatch: ChecklistDispatch;
};

type ChecklistDataActionTypes =
  | "UPDATE_CHECKLIST"
  | "COLLECT"
  | "REMOVE_COLLECTED"
  | "RESET_CHECKLIST";

export interface ChecklistDataAction {
  type: ChecklistDataActionTypes;
  id?: string;
  selected?: Array<SelectedItem>;
  owned?: Array<SelectedItem>;
}
