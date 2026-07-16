import { Misc } from "../@types/Misc.types";

const fireList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Campfire",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      stone: 5,
      wood: 2,
    },
  },
  {
    name: "Bonfire",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "surtling core": 1,
      "ancient bark": 5,
      "core wood": 5,
      "fine wood": 5,
    },
  },
  {
    name: "Hearth",
    set: "structures",
    stats: {
      comfort: 2,
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      stone: 15,
    },
  },
  {
    name: "Firepit Iron",
    set: "structures",
    station: {
      hammer: 1,
    },
    materials: {
      "iron pit": 1,
      wood: 1,
    },
    stats: {
      comfort: 1,
    },
  },
];

export const fire: Array<Omit<Misc, "id">> = fireList.map((building) => ({
  ...building,
  group: "misc",
  type: "fire",
}));
