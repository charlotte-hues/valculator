import { Furniture } from "../@types/Furniture.types";

const seatingList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Bench",
    set: "fine wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 6,
    },
  },
  {
    name: "Chair",
    set: "fine wood",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
    },
  },
  {
    name: "Stool",
    set: "fine wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
    },
  },
  {
    name: "Sitting Log",
    set: "core wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 2,
    },
  },
  {
    name: "Raven Throne",
    set: "fine wood",
    stats: {
      comfort: 3,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 20,
      "iron nails": 10,
    },
  },
  {
    name: "Stone Throne",
    set: "stone",
    stats: {
      comfort: 3,
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 20,
      "deer hide": 2,
      "wolf pelt": 2,
    },
  },
  {
    name: "Darkwood Chair",
    set: "iron",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      tar: 1,
      "iron nails": 5,
      "deer hide": 1,
    },
  },
  {
    name: "Black Marble Bench",
    set: "black marble",
    stats: {
      comfort: 1,
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 6,
      copper: 3,
    },
  },
  {
    name: "Ashwood Bench",
    set: "ash",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 6,
    },
  },
  {
    name: "Black Marble Throne",
    set: "black marble",
    stats: {
      comfort: 3,
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 20,
      "scale hide": 4,
      "deer hide": 2,
      copper: 5,
    },
  },
  {
    name: "Bone Throne",
    set: "other",
    stats: {
      comfort: 3,
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "charred bone": 15,
      flametal: 4,
      grausten: 20,
      "charred skull": 3,
    },
  },
  {
    name: "Antler Throne",
    set: "timberwood",
    stats: {
      comfort: 3,
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 15,
      "moose trophy": 1,
      "moose hide": 5,
    },
  },
  {
    name: "Carved Bench",
    set: "timberwood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 6,
      "moose hide": 1,
    },
  },
  {
    name: "Carved Chair",
    set: "timberwood",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 4,
      "moose sinew": 1,
    },
  },
  {
    name: "Wood Bench",
    set: "fine wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 6,
    },
  },
  {
    name: "Wood Chair",
    set: "fine wood",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
    },
  },
];

export const seating: Array<Omit<Furniture, "id">> = seatingList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "seating",
  })
);
