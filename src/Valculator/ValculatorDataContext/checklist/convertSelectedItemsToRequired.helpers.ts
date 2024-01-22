import { MaterialsType } from "@/Valculator/data/@types/Materials.types";
import { StationType } from "@/Valculator/data/@types/ValheimData.types";
import { getItemId } from "@/Valculator/SharedValculator.components/getItemId";

import { SelectedItem } from "../items/itemData.types";
import {
  ChecklistMaterialType,
  ChecklistStationType,
} from "./checklistData.types";

export const materialsReducer = (
  acc: Array<ChecklistMaterialType>,
  cur: SelectedItem
) => {
  const requiredMaterials: Array<ChecklistMaterialType> = [...acc];

  Object?.keys(cur.materials).forEach((key) => {
    const curMaterial = key as MaterialsType;
    const existingIndex = requiredMaterials.findIndex(
      (item) => item.name === curMaterial
    );
    const curMaterialAmount =
      Number(cur.materials?.[curMaterial] ?? 0) * cur.quantity;

    if (existingIndex === -1) {
      requiredMaterials.push({
        name: curMaterial,
        quantity: curMaterialAmount,
        id: getItemId(curMaterial, "material"),
      });
    } else {
      requiredMaterials[existingIndex].quantity += curMaterialAmount;
    }
  });

  return requiredMaterials;
};

export const stationsReducer = (
  acc: Array<ChecklistStationType>,
  cur: SelectedItem
) => {
  const requiredStations: Array<ChecklistStationType> = [...acc];
  if (!cur.station) return requiredStations;

  const curStation = Object.keys(cur.station)[0] as StationType;
  const curStationLevel = cur.station[curStation] ?? 0;

  const existingIndex = requiredStations.findIndex(
    (item) => item.station === curStation
  );

  if (existingIndex === -1) {
    requiredStations.push({
      station: curStation,
      level: cur.station[curStation] ?? 0,
    });
  } else {
    requiredStations[existingIndex].level =
      requiredStations[existingIndex].level >= curStationLevel
        ? requiredStations[existingIndex].level
        : curStationLevel;
  }

  return requiredStations;
};

export const convertSelectedItemsToRequired = (
  selected: Array<SelectedItem>,
  owned: Array<SelectedItem>
) => {
  const requiredStations = selected.reduce(stationsReducer, []);

  const neededMaterials = selected.reduce(materialsReducer, []);
  const ownedMaterials = owned.reduce(materialsReducer, []);

  const requiredMaterials = neededMaterials.map((needed) => {
    const ownedIndex = ownedMaterials.findIndex(
      (owned) => owned.id === needed.id
    );
    return {
      ...needed,
      quantity: needed.quantity - (ownedMaterials[ownedIndex]?.quantity ?? 0),
    };
  });

  const totalRequiredMaterials = requiredMaterials.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return {
    requiredStations,
    requiredMaterials,
    totalRequiredMaterials,
  };
};
