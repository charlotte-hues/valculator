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
  {
    name: "Drakkar",
    set: "iron",
    station: {
      workbench: 1,
    },
    materials: {
      "iron nails": 100,
      "ceramic plate": 30,
      "fine wood": 50,
      "yggdrasil wood": 25,
    },
  },
  {
    name: "Lox Saddle",
    set: "structures",
    station: {
      forge: 1,
    },
    materials: {
      "leather scraps": 10,
      "linen thread": 20,
      "black metal": 15,
    },
  },
  {
    name: "Asksvin Saddle",
    set: "structures",
    station: {
      "black forge": 2,
    },
    materials: {
      flametal: 6,
      "linen thread": 20,
      "morgen sinew": 4,
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
