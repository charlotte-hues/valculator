import { Misc } from "../@types/Misc.types";

const transportList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Cart",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      wood: 20,
      "bronze nails": 10,
    },
  },
  {
    name: "Raft",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      wood: 20,
      "leather scraps": 6,
      resin: 6,
    },
  },
  {
    name: "Karve",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 30,
      "deer hide": 10,
      resin: 20,
      "bronze nails": 80,
    },
  },
  {
    name: "Longship",
    set: "iron",
    station: {
      workbench: 1,
    },
    materials: {
      "iron nails": 100,
      "deer hide": 10,
      "fine wood": 40,
      "ancient bark": 40,
    },
  },
];

export const transport: Array<Omit<Misc, "id">> = transportList.map(
  (building) => ({
    ...building,
    group: "misc",
    type: "transport",
  })
);
