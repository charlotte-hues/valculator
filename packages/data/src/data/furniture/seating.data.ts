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
      "iron nails": 1,
      "deer hide": 1,
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
    name: "Black Marble Bench",
    set: "black marble",
    stats: {
      comfort: 3,
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 6,
      copper: 3,
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
