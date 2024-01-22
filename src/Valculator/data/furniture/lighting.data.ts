import { Furniture } from "../@types/Furniture.types";

const lightingList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Standing Wood Torch",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      resin: 2,
    },
  },
  {
    name: "Standing Iron Torch",
    set: "iron",
    station: {
      workbench: 1,
    },
    materials: {
      iron: 2,
      resin: 2,
    },
  },
  {
    name: "Standing Green Iron Torch",
    set: "iron",
    station: {
      forge: 1,
    },
    materials: {
      iron: 2,
      guck: 2,
    },
  },
  {
    name: "Standing Blue Iron Torch",
    set: "iron",
    station: {
      forge: 1,
    },
    materials: {
      iron: 2,
      "greydwarf eye": 2,
    },
  },
  {
    name: "Sconce",
    set: "copper",
    station: {
      forge: 1,
    },
    materials: {
      wood: 2,
      copper: 2,
      resin: 2,
    },
  },
  {
    name: "Hanging Brazier",
    set: "bronze",
    stats: {
      comfort: 1,
    },
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      coal: 2,
      chain: 1,
    },
  },
  {
    name: "Jack-o-turnip",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      turnip: 4,
      resin: 2,
    },
  },
];

export const lighting: Array<Omit<Furniture, "id">> = lightingList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "lighting",
  })
);
