import {
  ChecklistDataAction,
  ChecklistDataType,
  ChecklistMaterialType,
} from "./checklistData.types";
import { convertSelectedItemsToRequired } from "./convertSelectedItemsToRequired.helpers";

const updateChecklist = (
  state: ChecklistDataType,
  action: ChecklistDataAction
) => {
  const { selected = [], owned = [] } = action;
  const { requiredStations, requiredMaterials, totalRequiredMaterials } =
    convertSelectedItemsToRequired(selected, owned);

  const uncollectedMaterials: Array<ChecklistMaterialType> = [];
  const collectedMaterials: Array<ChecklistMaterialType> = [];

  requiredMaterials.forEach((requiredMaterial) => {
    const collectedIndex = state.collected.findIndex(
      (item) => item.id === requiredMaterial.id
    );

    if (collectedIndex === -1) {
      uncollectedMaterials.push(requiredMaterial);
    } else {
      const collectedMaterial = state.collected[collectedIndex];

      if (collectedMaterial?.quantity < requiredMaterial.quantity) {
        uncollectedMaterials.push(requiredMaterial);
      } else {
        collectedMaterials.push(requiredMaterial);
      }
    }
  });

  return {
    ...state,
    requiredStations,
    uncollected: uncollectedMaterials,
    collected: collectedMaterials,
    totalRequiredMaterials,
  };
};

const collectMaterial = (
  state: ChecklistDataType,
  action: ChecklistDataAction
) => {
  const uncollectedItemIndex = state.uncollected.findIndex(
    (item) => item.id === action.id
  );

  const uncollected = [...state.uncollected];
  uncollected.splice(uncollectedItemIndex, 1);
  const collected = [
    ...state.collected,
    { ...state.uncollected[uncollectedItemIndex] },
  ];

  return { ...state, collected, uncollected };
};

const removeCollectedMaterial = (
  state: ChecklistDataType,
  action: ChecklistDataAction
) => {
  const collectedItemIndex = state.collected.findIndex(
    (item) => item.id === action.id
  );

  const collected = [...state.collected];
  collected.splice(collectedItemIndex, 1);
  const uncollected = [
    ...state.uncollected,
    { ...state.collected[collectedItemIndex] },
  ];

  return { ...state, collected, uncollected };
};

const resetChecklist = (state: ChecklistDataType) => {
  const uncollected = [...state.collected, ...state.uncollected];
  const collected = [] as Array<ChecklistMaterialType>;
  return { ...state, uncollected, collected };
};

export const checklistReducer = (
  state: ChecklistDataType,
  action: ChecklistDataAction
) => {
  switch (action.type) {
    case "UPDATE_CHECKLIST":
      return updateChecklist(state, action);

    case "COLLECT":
      return collectMaterial(state, action);

    case "REMOVE_COLLECTED":
      return removeCollectedMaterial(state, action);

    case "RESET_CHECKLIST":
      return resetChecklist(state);

    default:
      return state;
  }
};
