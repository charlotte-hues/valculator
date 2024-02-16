import { Shield } from "../@types/Shields.types";

const bucklersShieldList: Array<Omit<Shield, "group" | "id" | "type">> = [
  {
    name: "Bronze Buckler",
    level: 1,
    set: "bronze",
    stats: {
      "block power": 45,
      "parry force": 30,
      durability: 200,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      bronze: 10,
      wood: 4,
    },
  },
  {
    name: "Bronze Buckler",
    level: 2,
    set: "bronze",
    stats: {
      "block power": 50,
      "parry force": 30,
      durability: 250,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      bronze: 15,
      wood: 5,
    },
  },
  {
    name: "Bronze Buckler",
    level: 3,
    set: "bronze",
    stats: {
      "block power": 55,
      "parry force": 30,
      durability: 300,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      bronze: 25,
      wood: 7,
    },
  },
  {
    name: "Iron Buckler",
    level: 1,
    set: "iron",
    stats: {
      "block power": 28,
      "parry force": 30,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      iron: 10,
      "ancient bark": 4,
    },
  },
  {
    name: "Iron Buckler",
    level: 2,
    set: "iron",
    stats: {
      "block power": 34,
      "parry force": 30,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      iron: 15,
      "ancient bark": 5,
    },
  },
  {
    name: "Iron Buckler",
    level: 3,
    set: "iron",
    stats: {
      "block power": 40,
      "parry force": 30,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      iron: 25,
      "ancient bark": 9,
    },
  },
  {
    name: "Carapace Buckler",
    level: 1,
    set: "carapace",
    stats: {
      "block power": 78,
      "parry force": 50,
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
      carapace: 16,
      "scale hide": 3,
      "refined eitr": 10,
    },
  },
  {
    name: "Carapace Buckler",
    level: 2,
    set: "carapace",
    stats: {
      "block power": 84,
      "parry force": 55,
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
      carapace: 24,
      "scale hide": 6,
      "refined eitr": 13,
    },
  },
  {
    name: "Carapace Buckler",
    level: 3,
    set: "carapace",
    stats: {
      "block power": 90,
      "parry force": 60,
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
      carapace: 40,
      "scale hide": 12,
      "refined eitr": 19,
    },
  },
];

export const bucklersShield: Array<Omit<Shield, "id">> = bucklersShieldList.map(
  (building) => ({
    ...building,
    group: "shields",
    type: "bucklers",
  })
);
