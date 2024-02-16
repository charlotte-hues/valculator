import { Furniture } from "../@types/Furniture.types";

const bedsList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Bed",
    set: "wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 8,
    },
  },
  {
    name: "Dragon Bed",
    set: "iron",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 8,
      "deer hide": 7,
      "wolf pelt": 4,
      feathers: 10,
      "iron nails": 15,
    },
  },
];

export const beds: Array<Omit<Furniture, "id">> = bedsList.map((building) => ({
  ...building,
  group: "furniture",
  type: "beds",
}));
