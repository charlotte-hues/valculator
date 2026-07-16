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
  {
    name: "Wisp Torch",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "yggdrasil wood": 1,
      wisp: 1,
    },
  },
  {
    name: "Dvergr Wall Lantern",
    set: "dvergr",
    station: {
      "black forge": 1,
    },
    materials: {
      copper: 2,
      "dvergr lantern": 1,
      chain: 1,
    },
  },
  {
    name: "Dvergr Lantern Pole",
    set: "dvergr",
    station: {
      "black forge": 1,
    },
    materials: {
      copper: 2,
      "dvergr lantern": 1,
      chain: 1,
    },
  },
  {
    name: "Lava Lantern",
    set: "other",
    station: {
      "black forge": 1,
    },
    materials: {
      flametal: 1,
      "proustite powder": 1,
      sulfur: 1,
    },
  },
  {
    name: "Resin Candle",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      resin: 1,
      "candle wick": 1,
    },
  },
  {
    name: "Standing Brazier",
    set: "bronze",
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      coal: 2,
      "fenris claw": 3,
    },
  },
  {
    name: "Blue Standing Brazier",
    set: "bronze",
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      "greydwarf eye": 2,
      "fenris claw": 3,
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
