import { allItemsData, getItemId } from "data";

import { MaterialsType, StationType } from "data/types";

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
    (item) => item.name === curStation
  );

  if (existingIndex === -1) {
    requiredStations.push({
      name: curStation,
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

const getStationData = (station: ChecklistStationType) => {
  const stationData = allItemsData.find(
    (itemData) => itemData.name.toLowerCase() === station.name.toLowerCase()
  );

  return stationData
    ? {
        ...station,
        name: stationData.name,
        group: stationData.group,
        type: stationData.type,
        set: stationData.set,
      }
    : station;
};

const getUpgradeItems = ({
  owned,
  selected,
}: {
  selected: Array<SelectedItem>;
  owned: Array<SelectedItem>;
}) => {
  const allOwnedItems = [...owned];
  const ownedItemsToBeUsedInUpgrades: Array<SelectedItem> = [];

  selected
    .sort(
      (a, b) =>
        a.name.localeCompare(b.name) ||
        Number(a?.level ?? 0) - Number(b?.level ?? 0)
    )
    .forEach((selectedItem) => {
      if (!selectedItem.level || selectedItem?.level <= 1) return;

      const availableUpgrades = allOwnedItems.filter(
        (upgrade) => upgrade.name === selectedItem.name
      );
      if (availableUpgrades.length === 0) return;

      let requiredQuantity = selectedItem.quantity;

      availableUpgrades.forEach((upgrade) => {
        if (!requiredQuantity || !upgrade.quantity) return;
        if (upgrade.quantity >= selectedItem.quantity) {
          ownedItemsToBeUsedInUpgrades.push({
            ...upgrade,
            quantity: selectedItem.quantity,
          });
          requiredQuantity -= selectedItem.quantity;
        } else {
          ownedItemsToBeUsedInUpgrades.push({
            ...upgrade,
            quantity: upgrade.quantity,
          });
          requiredQuantity -= upgrade.quantity;
        }
      });
    });

  return ownedItemsToBeUsedInUpgrades;
};

export const convertSelectedItemsToRequired = (
  selected: Array<SelectedItem>,
  owned: Array<SelectedItem>
) => {
  const requiredStations = selected.reduce(stationsReducer, []);
  const convertedRequiredStations = requiredStations.map(getStationData);

  const upgradeItems = getUpgradeItems({ selected, owned });
  const neededMaterials = selected.reduce(materialsReducer, []);
  const ownedMaterials = upgradeItems.reduce(materialsReducer, []);

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
    requiredStations: convertedRequiredStations,
    upgradeItems,
    requiredMaterials,
    totalRequiredMaterials,
  };
};
