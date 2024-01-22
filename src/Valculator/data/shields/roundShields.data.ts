import { Shield } from "../@types/Shields.types";

const roundShieldList: Array<Omit<Shield, "group" | "id" | "type">> = [
  {
    name: "Wood Shield",
    level: 1,
    set: "wood",
    stats: {
      "block power": 20,
      "parry force": 20,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      resin: 4,
      "leather scraps": 4,
    },
  },
  {
    name: "Wood Shield",
    level: 2,
    set: "wood",
    stats: {
      "block power": 25,
      "parry force": 20,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 15,
      resin: 6,
      "leather scraps": 6,
    },
  },
  {
    name: "Wood Shield",
    level: 3,
    set: "wood",
    stats: {
      "block power": 30,
      "parry force": 20,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 25,
      resin: 10,
      "leather scraps": 10,
    },
  },
  {
    name: "Banded Shield",
    level: 1,
    set: "iron",
    stats: {
      "block power": 60,
      "parry force": 40,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "fine wood": 10,
      iron: 8,
    },
  },
  {
    name: "Banded Shield",
    level: 2,
    set: "iron",
    stats: {
      "block power": 65,
      "parry force": 45,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 20,
      iron: 12,
    },
  },
  {
    name: "Banded Shield",
    level: 3,
    set: "iron",
    stats: {
      "block power": 70,
      "parry force": 50,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 40,
      iron: 20,
    },
  },
  {
    name: "Silver Shield",
    level: 1,
    set: "silver",
    stats: {
      "block power": 75,
      "parry force": 40,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 10,
      silver: 8,
    },
  },
  {
    name: "Silver Shield",
    level: 2,
    set: "silver",
    stats: {
      "block power": 80,
      "parry force": 45,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 20,
      silver: 12,
    },
  },
  {
    name: "Silver Shield",
    level: 3,
    set: "silver",
    stats: {
      "block power": 85,
      "parry force": 50,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 40,
      silver: 20,
    },
  },
  {
    name: "Blackmetal Shield",
    level: 1,
    set: "black metal",
    stats: {
      "block power": 90,
      "parry force": 50,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 10,
      "black metal": 8,
      chain: 5,
    },
  },
  {
    name: "Blackmetal Shield",
    level: 2,
    set: "black metal",
    stats: {
      "block power": 95,
      "parry force": 55,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 20,
      "black metal": 12,
      chain: 7,
    },
  },
  {
    name: "Blackmetal Shield",
    level: 3,
    set: "black metal",
    stats: {
      "block power": 100,
      "parry force": 60,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 40,
      "black metal": 20,
      chain: 11,
    },
  },
  {
    name: "Carapace Shield",
    level: 1,
    set: "carapace",
    stats: {
      "block power": 96,
      "parry force": 60,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      carapace: 20,
      "scale hide": 3,
      "refined eitr": 10,
    },
  },
  {
    name: "Carapace Shield",
    level: 2,
    set: "carapace",
    stats: {
      "block power": 102,
      "parry force": 65,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      carapace: 30,
      "scale hide": 6,
      "refined eitr": 13,
    },
  },
  {
    name: "Carapace Shield",
    level: 3,
    set: "carapace",
    stats: {
      "block power": 108,
      "parry force": 70,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      carapace: 50,
      "scale hide": 12,
      "refined eitr": 19,
    },
  },
];

export const roundShield: Array<Omit<Shield, "id">> = roundShieldList.map(
  (building) => ({
    ...building,
    group: "shields",
    type: "round shields",
  })
);
