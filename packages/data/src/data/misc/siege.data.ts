import { Misc } from "../@types/Misc.types";

const siegeList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Battering Ram",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      flametal: 10,
      "surtling core": 2,
      "ash wood": 20,
    },
  },
  {
    name: "Catapult",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      flametal: 10,
      "charred cogwheel": 1,
      "ash wood": 20,
    },
  },
  {
    name: "Grausten Payload",
    set: "structures",
    crafts: 5,
    station: {
      workbench: 1,
    },
    materials: {
      grausten: 10,
    },
  },
  {
    name: "Catapult Payload",
    set: "structures",
    crafts: 5,
    station: {
      workbench: 1,
    },
    materials: {
      "asksvin hide": 2,
      sulfur: 2,
      "proustite powder": 3,
    },
  },
];

export const siege: Array<Omit<Misc, "id">> = siegeList.map((building) => ({
  ...building,
  group: "misc",
  type: "siege",
}));
