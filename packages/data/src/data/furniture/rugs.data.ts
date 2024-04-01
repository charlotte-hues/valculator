import { Furniture } from "../@types/Furniture.types";

const rugsList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Deer Rug",
    set: "deer",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "deer hide": 4,
    },
  },
  {
    name: "Wolf Rug",
    set: "wolf",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "wolf pelt": 4,
    },
  },
  {
    name: "Lox Rug",
    set: "lox",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "lox pelt": 4,
    },
  },
  {
    name: "Hare Rug",
    set: "hare",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "scale hide": 4,
    },
  },
];

export const rugs: Array<Omit<Furniture, "id">> = rugsList.map((building) => ({
  ...building,
  group: "furniture",
  type: "rugs",
}));
