import { Furniture } from "../@types/Furniture.types";

const decorativeList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Armor Stand",
    set: "iron",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 8,
      "iron nails": 4,
      "leather scraps": 2,
    },
  },
  {
    name: "Item Stand (V)",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      "bronze nails": 4,
    },
  },
  {
    name: "Item Stand (H)",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      "bronze nails": 4,
    },
  },
  {
    name: "Sign",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      coal: 1,
      wood: 2,
    },
  },
  {
    name: "Yule Tree",
    set: "seasonal",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "fir cone": 1,
    },
  },
  {
    name: "Yuleklapp(L)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      raspberries: 1,
    },
  },
  {
    name: "Yuleklapp(M)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 3,
      dandelion: 1,
    },
  },
  {
    name: "Yuleklapp(S)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "bone fragments": 1,
    },
  },
  {
    name: "Maypole",
    set: "wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      dandelion: 4,
      thistle: 4,
    },
  },
  {
    name: "Treasure Chest",
    set: "treasure",
    station: {
      workbench: 1,
    },
    materials: {
      coins: 99,
      ruby: 5,
      "silver necklace": 2,
      "fine wood": 8,
      silver: 2,
    },
  },
];

export const decorative: Array<Omit<Furniture, "id">> = decorativeList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "decorative",
  })
);
