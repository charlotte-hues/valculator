import { Shield } from "../@types/Shields.types";

const towerShieldList: Array<Omit<Shield, "group" | "id" | "type">> = [
  {
    name: "Wood Tower Shield",
    level: 1,
    set: "wood",
    stats: {
      "block power": 35,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "leather scraps": 6,
    },
  },
  {
    name: "Wood Tower Shield",
    level: 2,
    set: "wood",
    stats: {
      "block power": 40,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 15,
      "leather scraps": 9,
    },
  },
  {
    name: "Wood Tower Shield",
    level: 3,
    set: "wood",
    stats: {
      "block power": 45,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 25,
      "leather scraps": 15,
    },
  },
  {
    name: "Iron Tower Shield",
    level: 1,
    set: "iron",
    stats: {
      "block power": 75,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "fine wood": 15,
      iron: 10,
    },
  },
  {
    name: "Iron Tower Shield",
    level: 2,
    set: "iron",
    stats: {
      "block power": 80,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 25,
      iron: 15,
    },
  },
  {
    name: "Iron Tower Shield",
    level: 3,
    set: "iron",
    stats: {
      "block power": 85,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 45,
      iron: 25,
    },
  },
  {
    name: "Blackmetal Tower Shield",
    level: 1,
    set: "other",
    stats: {
      "block power": 105,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 15,
      "black metal": 10,
      chain: 7,
    },
  },
  {
    name: "Blackmetal Tower Shield",
    level: 2,
    set: "black metal",
    stats: {
      "block power": 110,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 30,
      "black metal": 16,
      chain: 9,
    },
  },
  {
    name: "Blackmetal Tower Shield",
    level: 3,
    set: "black metal",
    stats: {
      "block power": 115,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 50,
      "black metal": 24,
      chain: 13,
    },
  },
  {
    name: "Serpentscale Shield",
    level: 1,
    set: "other",
    stats: {
      "block power": 90,
      durability: 200,
      weight: 5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "fine wood": 10,
      iron: 4,
      "serpent scale": 8,
    },
  },
  {
    name: "Serpentscale Shield",
    level: 2,
    set: "other",
    stats: {
      "block power": 95,
      durability: 250,
      weight: 5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 20,
      iron: 6,
      "serpent scale": 12,
    },
  },
  {
    name: "Serpentscale Shield",
    level: 3,
    set: "other",
    stats: {
      "block power": 100,
      durability: 300,
      weight: 5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 40,
      iron: 10,
      "serpent scale": 20,
    },
  },
  {
    name: "Bone Tower Shield",
    level: 1,
    set: "bone",
    stats: {
      "block power": 32,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 10,
      "bone fragments": 10,
      "skeleton trophy": 3,
    },
  },
  {
    name: "Bone Tower Shield",
    level: 2,
    set: "bone",
    stats: {
      "block power": 38,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 15,
      "bone fragments": 15,
      "skeleton trophy": 3,
    },
  },
  {
    name: "Bone Tower Shield",
    level: 3,
    set: "bone",
    stats: {
      "block power": 44,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      wood: 25,
      "bone fragments": 25,
      "skeleton trophy": 3,
    },
  },
];

export const towerShield: Array<Omit<Shield, "id">> = towerShieldList.map(
  (building) => ({
    ...building,
    group: "shields",
    type: "tower shields",
  })
);
