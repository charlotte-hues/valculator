import { Weapon } from "../@types/Weapon.types";

const arrowsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Wood Arrow",
    set: "wood",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 22,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      wood: 8,
    },
  },
  {
    name: "Flinthead Arrow",
    set: "flint",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 27,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      wood: 8,
      flint: 2,
      feathers: 2,
    },
  },
  {
    name: "Bronzehead Arrow",
    set: "bronze",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 32,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      wood: 8,
      feathers: 2,
      bronze: 1,
    },
  },
  {
    name: "Ironhead Arrow",
    set: "iron",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 42,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      wood: 8,
      feathers: 2,
      iron: 1,
    },
  },
  {
    name: "Obsidian Arrow",
    set: "obsidian",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 52,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      wood: 8,
      feathers: 2,
      obsidian: 4,
    },
  },
  {
    name: "Needle Arrow",
    set: "needle",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 62,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      feathers: 2,
      needle: 4,
    },
  },
  {
    name: "Fire Arrow",
    set: "elemental",
    crafts: 20,
    stacks: 100,
    stats: {
      total: 33,
      pierce: 11,
      fire: 22,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      wood: 8,
      feathers: 2,
      resin: 1,
    },
  },
  {
    name: "Poison Arrow",
    set: "elemental",
    crafts: 20,
    stacks: 100,
    stats: {
      total: 78,
      pierce: 26,
      poison: 52,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      wood: 8,
      feathers: 2,
      obsidian: 4,
      ooze: 2,
    },
  },
  {
    name: "Silver Arrow",
    set: "elemental",
    crafts: 20,
    stacks: 100,
    stats: {
      total: 72,
      pierce: 52,
      spirit: 20,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      wood: 8,
      feathers: 2,
      silver: 1,
    },
  },
  {
    name: "Frost Arrow",
    set: "elemental",
    crafts: 20,
    stacks: 100,
    stats: {
      total: 78,
      pierce: 26,
      frost: 52,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      wood: 8,
      feathers: 2,
      obsidian: 4,
      "freeze gland": 1,
    },
  },
];

export const arrows: Array<Omit<Weapon, "id">> = arrowsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "arrows",
}));
