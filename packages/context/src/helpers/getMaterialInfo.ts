import { getLegacyId, materialsData } from "@valculator/data";
import { ChecklistMaterialType } from "../ValculatorDataContext/checklist/checklistData.types";

export const getMaterialInfo: (
  idArray?: Array<string>,
  version?: number
) => Array<ChecklistMaterialType> = (idArray = [], version = 2) => {
  return idArray
    ?.map((idString) => {
      const splitIdString = idString.split(":");
      const id = splitIdString[0];
      const quantity = Number(splitIdString[1]);
      const materialIndex = materialsData.findIndex((item) =>
        version < 2 ? item.id === getLegacyId(id, "material") : item.id === id
      );
      if (materialIndex === -1) return null;
      const material = materialsData[materialIndex];
      return {
        ...material,
        quantity,
      };
    })
    .filter((item) => item !== null) as Array<ChecklistMaterialType>;
};
