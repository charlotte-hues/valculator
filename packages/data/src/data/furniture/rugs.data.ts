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
    name: "Red Jute Carpet",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "red jute": 4,
    },
  },
  {
    name: "Blue Jute Carpet",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "blue jute": 4,
    },
  },
  {
    name: "Straw Rug",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      barley: 1,
      flax: 1,
    },
  },
  {
    name: "Hare Rug",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "scale hide": 4,
    },
  },
  {
    name: "Asksvin Rug",
    set: "ash",
    station: {
      workbench: 1,
    },
    materials: {
      "asksvin hide": 4,
    },
  },
  {
    name: "Bearskin Rug",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "bear hide": 1,
      "bear paw": 2,
      "bear trophy": 1,
    },
  },
];

export const rugs: Array<Omit<Furniture, "id">> = rugsList.map((building) => ({
  ...building,
  group: "furniture",
  type: "rugs",
}));
