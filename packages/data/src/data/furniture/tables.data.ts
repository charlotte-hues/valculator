import { Furniture } from "../@types/Furniture.types";

const tablesList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Long Heavy Table",
    set: "iron",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 20,
      tar: 2,
      "iron nails": 20,
    },
  },
  {
    name: "Table",
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
    name: "Round Table",
    set: "iron",
    stats: {
      comfort: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 20,
      tar: 2,
      "iron nails": 20,
    },
  },
  {
    name: "Black Marble Table",
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
];

export const tables: Array<Omit<Furniture, "id">> = tablesList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "tables",
  })
);
