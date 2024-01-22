import { getItemId } from "../SharedValculator.components/getItemId";
import {
  IMaterial,
  MaterialsEnum,
  MaterialsType,
} from "./@types/Materials.types";

export const materialsData: Array<IMaterial> = Object.keys(MaterialsEnum).map(
  (key) => ({
    name: key as MaterialsType,
    id: getItemId(key, "material"),
  })
);
