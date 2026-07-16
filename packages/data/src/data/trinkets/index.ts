import { Trinket } from "../@types/Trinket.types";
import { trinkets } from "./trinkets.data";

const trinketsList: Array<Omit<Trinket, "group" | "id">> = [...trinkets];

export const trinketsData: Array<Omit<Trinket, "id">> = trinketsList.map(
  (item) => ({
    ...item,
    group: "trinkets",
  })
);
