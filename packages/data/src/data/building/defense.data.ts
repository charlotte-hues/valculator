import { Building } from "../@types/Building.types";

const defenseList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Sharp Stakes",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 6,
      "core wood": 4,
    },
  },
  {
    name: "Stake Wall",
    set: "wood",
    stats: {
      size: "2x3",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 4,
    },
  },
  {
    name: "Roundpole Fence",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 1,
    },
  },
  {
    name: "Dvergr Sharp Stakes",
    set: "dvergr",
    stats: {
      size: "4x2",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 5,
      copper: 5,
    },
  },
  {
    name: "Ashwood Stakewall",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 6,
    },
  },
];

export const defense: Array<Omit<Building, "id">> = defenseList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "defense",
  })
);
