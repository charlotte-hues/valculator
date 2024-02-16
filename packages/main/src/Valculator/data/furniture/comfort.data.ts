import { Furniture } from "../@types/Furniture.types";

const comfortList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Hot Tub",
    set: "iron",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 20,
      tar: 6,
      iron: 10,
      stone: 8,
    },
  },
];

export const comfort: Array<Omit<Furniture, "id">> = comfortList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "comfort",
  })
);
