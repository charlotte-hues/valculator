import { Recipe } from "../@types/Recipes.types";

const staminaList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Medium Stamina Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      stamina: 160,
      duration: "2s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: medium stamina": 1,
    },
  },
  {
    name: "Minor Stamina Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      stamina: 80,
      duration: "2s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: minor stamina": 1,
    },
  },

  {
    name: "Tasty Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      "health regen": "-50%",
      "stamina regen": "+100%",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: tasty": 1,
    },
  },
  {
    name: "Lingering Stamina Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: lingering stamina": 1,
    },
  },
  {
    name: "Tonic of Ratatosk",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: ratatosk": 1,
    },
  },
];

export const stamina: Array<Omit<Recipe, "id">> = staminaList.map(
  (building) => ({
    ...building,
    group: "recipes",
    type: "stamina",
  })
);
