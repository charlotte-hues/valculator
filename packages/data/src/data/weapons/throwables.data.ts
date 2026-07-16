import { Weapon } from "../@types/Weapon.types";

const throwablesList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Ooze Bomb",
    set: "other",
    crafts: 5,
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      ooze: 10,
      resin: 3,
      "leather scraps": 5,
    },
  },
  {
    name: "Bile Bomb",
    set: "other",
    crafts: 3,
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      sap: 1,
      resin: 3,
      bilebag: 1,
    },
  },
  {
    name: "Basalt Bomb",
    set: "flametal",
    crafts: 5,
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "asksvin bladder": 1,
      "asksvin hide": 1,
      "proustite powder": 3,
    },
  },
  {
    name: "Smoke Bomb",
    set: "other",
    crafts: 10,
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "smoke puff": 1,
      "asksvin bladder": 1,
    },
  },
  {
    name: "Blob Bomb: Poison",
    set: "other",
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      resin: 3,
      "blob trophy": 1,
      "corked vial": 1,
    },
  },
  {
    name: "Blob Bomb: Elite Poison",
    set: "other",
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      resin: 3,
      "blob trophy": 3,
      "corked vial": 1,
    },
  },
  {
    name: "Blob Bomb: Frost",
    set: "other",
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "drake trophy": 1,
      resin: 3,
      "corked vial": 1,
    },
  },
  {
    name: "Blob Bomb: Tar",
    set: "other",
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      resin: 3,
      "growth trophy": 1,
      "corked vial": 1,
    },
  },
  {
    name: "Blob Bomb: Lava",
    set: "flametal",
    stacks: 50,
    stats: {
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      sulfur: 10,
      "corked vial": 1,
      "proustite powder": 10,
    },
  },
];

export const throwables: Array<Omit<Weapon, "id">> = throwablesList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "throwables",
}));
