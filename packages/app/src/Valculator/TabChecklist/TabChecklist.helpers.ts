import { ChecklistMaterialType } from "../ValculatorDataContext/checklist/checklistData.types";

export const getPercentageComplete = (
  collected: Array<ChecklistMaterialType>,
  totalRequiredMaterials: number
) => {
  const totalGot = collected.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  return totalGot ? Math.round((totalGot / totalRequiredMaterials) * 100) : 0;
};
