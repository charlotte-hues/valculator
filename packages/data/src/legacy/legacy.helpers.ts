import { getItemId } from "../utils/getItemId";
import { allLegacyItemIds, allLegacyMaterialIds } from "./legacyId.data";

const legacyIdMap = {
  ...allLegacyMaterialIds,
  ...allLegacyItemIds,
};

export const getLegacyId = (id: string, variant: "material" | "item") => {
  const legacyItem = legacyIdMap[id as keyof typeof legacyIdMap];
  return legacyItem
    ? getItemId(legacyItem.name, variant, legacyItem?.level)
    : id;
};
