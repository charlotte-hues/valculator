import { Weapon } from "../@types/Weapon.types";

const boltsList: Array<Omit<Weapon, "group" | "id">> = [
  {
    name: "Bone Bolt",
    set: "bone",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 32,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      "bone fragments": 8,
      feathers: 2,
    },
  },
  {
    name: "Iron Bolt",
    set: "iron",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 42,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      feathers: 2,
      iron: 1,
      wood: 8,
    },
  },
  {
    name: "Blackmetal Bolt",
    set: "black metal",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 62,
      knockback: 10,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      feathers: 2,
      "black metal": 2,
      wood: 8,
    },
  },
  {
    name: "Carapace Bolt",
    set: "carapace",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 72,
      knockback: 15,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      feathers: 2,
      carapace: 2,
      wood: 8,
    },
  },
  {
    name: "Charred Bolt",
    set: "flametal",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 82,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      "charred bone": 2,
      feathers: 2,
      "ash wood": 8,
    },
  },
  {
    name: "Wooden Missile",
    set: "wood",
    type: "missiles",
    crafts: 20,
    stacks: 20,
    stats: {
      pierce: 60,
      knockback: 45,
      weight: 0.5,
    },
    effects: {},
    station: {
      "Artisan Table": 1,
    },
    materials: {
      feathers: 2,
      "core wood": 5,
    },
  },
  {
    name: "Blackmetal Missile",
    set: "black metal",
    type: "missiles",
    crafts: 20,
    stacks: 20,
    stats: {
      pierce: 100,
      knockback: 50,
      weight: 0.5,
    },
    effects: {},
    station: {
      "Artisan Table": 1,
    },
    materials: {
      "black metal": 1,
      wood: 10,
    },
  },
  {
    name: "Flametal Missile",
    set: "flametal",
    type: "missiles",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 140,
      knockback: 60,
      weight: 0.5,
    },
    effects: {},
    station: {
      "Artisan Table": 1,
    },
    materials: {
      flametal: 1,
      "ash wood": 10,
    },
  },
  {
    name: "Blob Bomb: Pulp",
    set: "other",
    type: "missiles",
    stacks: 50,
    stats: {
      blunt: 5,
      knockback: 40,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "corked vial": 1,
      "pulp trophy": 1,
      "dead pulp": 3,
    },
  },
  {
    name: "Bloodgold Bolt",
    set: "bloodgold",
    type: "bolts",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 92,
      weight: 0.1,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      bloodgold: 1,
      timberwood: 8,
      feathers: 2,
    },
  },
  {
    name: "Bloodgold Missile",
    set: "bloodgold",
    type: "missiles",
    crafts: 20,
    stacks: 100,
    stats: {
      pierce: 200,
      knockback: 60,
      weight: 0.5,
    },
    effects: {},
    station: {
      "Artisan Table": 1,
    },
    materials: {
      timberwood: 10,
      bloodgold: 1,
    },
  },
  {
    name: "Bloodgold Payload",
    set: "bloodgold",
    type: "missiles",
    crafts: 5,
    stacks: 50,
    stats: {
      blunt: 20,
      knockback: 40,
      weight: 0.3,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      ice: 2,
      bloodgold: 2,
      "proustite powder": 3,
    },
  },
  {
    name: "Ember Charge",
    set: "other",
    type: "missiles",
    crafts: 10,
    stacks: 50,
    stats: {
      knockback: 40,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "seal pelt": 2,
      embers: 1,
    },
  },
  {
    name: "Explosive Payload",
    set: "other",
    type: "missiles",
    crafts: 5,
    stacks: 50,
    stats: {
      knockback: 40,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "asksvin hide": 2,
      sulfur: 2,
      "proustite powder": 3,
    },
  },
  {
    name: "Snowball",
    set: "other",
    type: "missiles",
    crafts: 10,
    stacks: 50,
    stats: {
      blunt: 5,
      frost: 10,
      knockback: 40,
      weight: 0.3,
    },
    effects: {},
    station: {},
    materials: {
      ice: 5,
    },
  },
];

export const bolts: Array<Omit<Weapon, "id">> = boltsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
}));
