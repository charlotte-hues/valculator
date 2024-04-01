import { Weapon } from "../@types/Weapon.types";

const fistsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Flesh Rippers",
    level: 1,
    set: "fenris",
    stats: {
      slash: 60,
      stagger: 60,
      knockback: 20,
      backstab: "6x",
      durability: 300,
      weight: 2,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      "fenris hair": 10,
      "fenris claw": 6,
      silver: 10,
    },
  },
  {
    name: "Flesh Rippers",
    level: 2,
    set: "fenris",
    stats: {
      slash: 64,
      stagger: 64,
      knockback: 20,
      backstab: "6x",
      durability: 350,
      weight: 2,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      "fenris hair": 11,
      "fenris claw": 7,
      silver: 11,
    },
  },
  {
    name: "Flesh Rippers",
    level: 3,
    set: "fenris",
    stats: {
      slash: 68,
      stagger: 68,
      knockback: 20,
      backstab: "6x",
      durability: 400,
      weight: 2,
    },
    effects: {},
    station: {
      forge: 5,
    },
    materials: {
      "fenris hair": 13,
      "fenris claw": 9,
      silver: 13,
    },
  },
  {
    name: "Flesh Rippers",
    level: 4,
    set: "fenris",
    stats: {
      slash: 72,
      stagger: 72,
      knockback: 20,
      backstab: "6x",
      durability: 450,
      weight: 2,
    },
    effects: {},
    station: {
      forge: 6,
    },
    materials: {
      "fenris hair": 16,
      "fenris claw": 12,
      silver: 16,
    },
  },
];

export const fists: Array<Omit<Weapon, "id">> = fistsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "fists",
}));
